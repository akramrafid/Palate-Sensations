/**
 * Mock Stripe Service
 * 
 * This is a stub for Phase 4. Once API keys are provided, 
 * this file will be updated to use the official 'stripe' npm package.
 */

export interface StripeCheckoutSessionOptions {
  bookingId: string;
  userEmail: string;
  amount: number;
  className: string;
  successUrl: string;
  cancelUrl: string;
}

export const stripeService = {
  /**
   * Simulates creating a Stripe Checkout Session
   */
  async createCheckoutSession(options: StripeCheckoutSessionOptions) {
    console.log(`[STRIPE MOCK] Creating checkout session for Booking: ${options.bookingId}`);
    console.log(`[STRIPE MOCK] Amount: $${options.amount}`);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return a mock URL that instantly redirects back to the success URL
    // simulating a successful payment.
    const mockCheckoutUrl = `${options.successUrl}?session_id=mock_cs_${Date.now()}`;
    
    return {
      url: mockCheckoutUrl,
      id: `mock_cs_${Date.now()}`,
    };
  },

  /**
   * Simulates handling a Stripe Webhook
   */
  async handleWebhook(payload: any) {
    console.log(`[STRIPE MOCK] Processing webhook event`);
    return { received: true, status: "mocked" };
  }
};
