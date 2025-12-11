import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 section-padding">
        <div className="container-tight mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>Last updated: December 2024</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including name, email address, phone number, and address when you book a pickup or create an account.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our storage services, process transactions, and communicate with you about your stored items.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our service.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h2 className="text-xl font-semibold text-secondary mt-8">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@zipspace.in</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
