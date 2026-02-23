import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
