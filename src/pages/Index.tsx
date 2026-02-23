import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
<Stats />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProductsSection />
      // <Video />
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
