import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, HeadphonesIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";
import MobileStickyBar from "@/components/MobileStickyBar";
import { products } from "@/data/products";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();

  const handleEnquiry = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-accent via-background to-pink-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in">
                🔒 Discreet Adult Store – Toys Wala
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Premium Adult Toys for
                <span className="text-primary"> Intimate Wellness</span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Explore a discreet range of personal massagers, couple toys and
                intimate wellness products – delivered safely with full privacy
                and trust.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Link to="/products">
                  <Button size="lg" className="btn-enquiry px-8">
                    Browse Adult Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 border-foreground/20 hover:bg-secondary"
                  >
                    Contact Us Privately
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-10 bg-card border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Discreet",
                  desc: "Plain, unbranded packaging",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  desc: "Quick & safe dispatch",
                },
                {
                  icon: HeadphonesIcon,
                  title: "Private Support",
                  desc: "Confidential assistance",
                },
                {
                  icon: Star,
                  title: "Quality Assured",
                  desc: "Carefully selected products",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading">Featured Adult Toys</h2>
              <p className="section-subheading">
                Popular dildos, personal massagers and couple toys curated for
                comfort, pleasure and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onEnquiry={handleEnquiry}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/products">
                <Button size="lg" className="btn-enquiry px-8">
                  View All Adult Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-card mb-4">
                Ready to Order Discreetly?
              </h2>
              <p className="text-card/80 text-lg mb-8">
                Call or WhatsApp us to place your order. No judgment, no
                questions – just fast, private service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918200118646">
                  <Button size="lg" className="btn-call px-8 w-full sm:w-auto">
                    📞 Call Now (Private)
                  </Button>
                </a>
                <a
                  href="https://wa.me/918200118646"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="btn-whatsapp px-8 w-full sm:w-auto"
                  >
                    💬 WhatsApp Us Privately
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Index;
