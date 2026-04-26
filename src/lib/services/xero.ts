/**
 * Mock Xero Accounting Service
 * 
 * This is a stub for Phase 4. Once Xero Developer credentials are provided,
 * this will be updated to use the 'xero-node' SDK to sync invoices.
 */

export interface SyncInvoiceOptions {
  bookingId: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  description: string;
  date: Date;
}

export const xeroService = {
  /**
   * Simulates creating an invoice in Xero
   */
  async syncInvoice(options: SyncInvoiceOptions) {
    console.log(`[XERO MOCK] Syncing invoice for Booking: ${options.bookingId}`);
    console.log(`[XERO MOCK] Contact: ${options.customerName} (${options.customerEmail})`);
    console.log(`[XERO MOCK] Line Item: ${options.description} - $${options.amount}`);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      xeroInvoiceId: `mock_inv_${Date.now()}`,
      status: "AUTHORISED"
    };
  }
};
