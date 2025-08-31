import { Navigation } from "@/components/Navigation";

const TermsOfSale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Sale</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Our AI platform provides various artificial intelligence services including text-to-image generation, 
              image-to-video conversion, face swap technology, and voice generation. All services are provided 
              through a credit-based system.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Credit System</h2>
            <p className="text-muted-foreground mb-4">
              Credits are digital tokens used to access our AI services. Each service consumes a specific 
              amount of credits as outlined in our pricing structure. Credits are non-transferable and 
              expire 12 months from the date of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              All payments are processed securely through Stripe. By purchasing credits, you agree to 
              pay all charges associated with your account. Prices are subject to change with notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Refund Policy</h2>
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Important Notice</h3>
              <p className="text-foreground font-medium">
                <strong>No refunds will be provided once credits have been added to your account.</strong>
              </p>
            </div>
            <p className="text-muted-foreground mb-4">
              Due to the digital nature of our services and the immediate availability of credits upon 
              purchase, all sales are final. Once credits are successfully added to your account, 
              no refunds, cancellations, or exchanges will be processed.
            </p>
            <p className="text-muted-foreground mb-4">
              We encourage users to carefully review their purchase before completing the transaction. 
              If you experience technical issues during the purchase process that prevent credits from 
              being added to your account, please contact our support team within 48 hours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              While we strive to maintain 99.9% uptime, our services may occasionally be unavailable 
              due to maintenance, updates, or unforeseen circumstances. Service interruptions do not 
              qualify for refunds under this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Usage Terms</h2>
            <p className="text-muted-foreground mb-4">
              Credits must be used in accordance with our Terms of Service. Misuse of our platform 
              or violation of our acceptable use policy may result in account suspension without 
              refund of remaining credits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions regarding these Terms of Sale, please contact our support team. We are 
              committed to providing excellent customer service while maintaining our no-refund policy 
              for credited purchases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms of Sale at any time. Changes will be effective 
              immediately upon posting. Your continued use of our services constitutes acceptance of 
              any modifications.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfSale;