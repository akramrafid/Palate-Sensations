/**
 * Mock Email Service
 * 
 * This is a stub for Phase 4. Once a provider (Resend/SendGrid) is chosen 
 * and API keys are provided, this will be updated to send real emails.
 */

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const emailService = {
  /**
   * Simulates sending an email
   */
  async sendEmail(options: SendEmailOptions) {
    console.log(`\n================== [MOCK EMAIL SENT] ==================`);
    console.log(`To: ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Content length: ${options.html.length} characters`);
    console.log(`=======================================================\n`);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true, messageId: `mock_msg_${Date.now()}` };
  },

  /**
   * Helper to send booking confirmation
   */
  async sendBookingConfirmation(to: string, bookingDetails: any) {
    const html = `
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking with Palate Sensations.</p>
      <p>Class: ${bookingDetails.className}</p>
      <p>Date: ${bookingDetails.date}</p>
      <p>We look forward to seeing you in the kitchen!</p>
    `;

    return this.sendEmail({
      to,
      subject: `Booking Confirmation: ${bookingDetails.className}`,
      html
    });
  }
};
