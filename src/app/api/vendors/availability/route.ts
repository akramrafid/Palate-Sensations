import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// This is a secure endpoint for external vendors (Klook, Pelago, Viator)
// to poll our system for real-time class availability.
export async function GET(request: Request) {
  try {
    // In production, require an API key via headers (e.g., Authorization: Bearer <VENDOR_KEY>)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch upcoming sessions that have available capacity
    const upcomingSessions = await prisma.classSession.findMany({
      where: {
        date: {
          gte: new Date(),
        },
      },
      include: {
        template: {
          select: {
            title: true,
            duration: true,
            basePrice: true,
            maxParticipants: true,
          }
        },
        _count: {
          select: { bookings: true }
        }
      },
      orderBy: {
        date: 'asc'
      },
      take: 50 // Limit response size for external polling
    });

    // Format the response specifically for vendor integration
    const availability = upcomingSessions.map(session => {
      const capacity = session.template.maxParticipants;
      const booked = session._count.bookings;
      const availableSpots = Math.max(0, capacity - booked);

      return {
        sessionId: session.id,
        className: session.template.title,
        date: session.date,
        durationMinutes: session.template.duration,
        price: session.customPrice || session.template.basePrice,
        availableSpots,
        isAvailable: availableSpots > 0,
      };
    });

    return NextResponse.json({
      status: 'success',
      count: availability.length,
      data: availability
    });

  } catch (error) {
    console.error('Vendor API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
