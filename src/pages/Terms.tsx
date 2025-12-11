import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 section-padding">
        <div className="container-tight mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>Last updated: December 2024</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">1. Acceptance of Terms</h2>
            <p>By using ZipSpace services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">2. Storage Services</h2>
            <p>ZipSpace provides secure storage facilities for personal belongings. We reserve the right to refuse storage of prohibited items including hazardous materials, perishables, and illegal items.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">3. Payment Terms</h2>
            <p>Storage fees are billed monthly in advance. Late payments may result in access restrictions to stored items. First-time customers receive 15% discount and free pickup.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">4. Item Retrieval</h2>
            <p>Items can be requested for return through our platform. Standard delivery is within 48 hours. Elite plan members receive priority handling.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">5. Liability</h2>
            <p>While we take utmost care of your belongings, ZipSpace liability is limited to the declared value of items. Elite plan includes comprehensive insurance coverage.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">6. Termination</h2>
            <p>You may cancel your storage plan at any time. Items must be retrieved within 30 days of cancellation. Unclaimed items may be disposed of per applicable laws.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">7. Contact</h2>
            <p>For questions regarding these terms, contact us at support@zipspace.in or call +91 9920714625.</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Terms;
