import { Heart, Target, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-accent via-background to-pink-light py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trust Beyond Us – Your private partner in intimate wellness & adult toys
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Welcome to <span className="font-bold text-primary">Toys Wala</span>, a discreet destination for
                adult toys and intimate wellness products. We started with a simple idea – to make 
                quality adult products easily accessible in India, with complete privacy and zero judgment.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We carefully curate every product to be safe, comfortable and reliable. From beginners to 
                experienced users, our goal is to help you explore pleasure and intimacy in a healthy, 
                respectful and confidential way. Every order is packed discreetly so only you know what&apos;s inside.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Toys Wala?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Privacy & Respect",
                  desc: "No judgment, ever. We respect your privacy and treat every order confidentially.",
                },
                {
                  icon: Target,
                  title: "Quality & Safety",
                  desc: "Products are selected for quality materials, comfort and safe usage.",
                },
                {
                  icon: Users,
                  title: "Discreet Service",
                  desc: "Plain, unbranded packaging with silent support through call or WhatsApp.",
                },
                {
                  icon: Award,
                  title: "Fair Pricing",
                  desc: "Honest prices with wholesale-style value without compromising on quality.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10,000+", label: "Discreet Orders Delivered" },
                { number: "200+", label: "Curated Adult Products" },
                { number: "4.9★", label: "Customer Satisfaction" },
                { number: "3+", label: "Years in Intimate Wellness" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-card/80 text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default About;
