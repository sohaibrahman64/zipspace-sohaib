import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import BookPickup from "@/components/BookPickup";
import ReturnItems from "@/components/ReturnItems";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ImageCarousel />
        <Hero />
        <BookPickup />
        <Pricing />
        <ReturnItems />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
