import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why_ZipSpace from "@/components/Why_ZipSpace";
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
        <Why_ZipSpace />
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
