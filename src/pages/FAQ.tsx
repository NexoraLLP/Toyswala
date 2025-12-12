import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const faqs = [
  {
    question: "How can I place an order?",
    answer: "You can place your order by calling us directly, sending us a WhatsApp message, or submitting the enquiry form on our website. Our team will contact you privately to confirm your order.",
  },
  {
    question: "Is Cash on Delivery (COD) available?",
    answer: "Yes, we provide Cash on Delivery (COD) on most orders depending on your location. Please confirm availability with our team while ordering.",
  },
  {
    question: "Will my order be delivered discreetly?",
    answer: "Absolutely. All orders are packed in plain, unbranded packaging. There is no mention of adult products on the parcel for complete privacy.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3–7 business days depending on your city. In some locations, it may be faster. Tracking details are shared once your order is dispatched.",
  },
  {
    question: "Can I return or exchange adult products?",
    answer: "Due to hygiene and safety reasons, adult products cannot be returned or exchanged once opened. If the product is damaged or incorrect, please contact us within 24 hours of delivery with an opening video.",
  },
  {
    question: "Are your adult toys safe to use?",
    answer: "Yes. All our products are made from body-safe materials and are checked for quality. We recommend following the usage and hygiene instructions for safe use.",
  },
  {
    question: "Do you sell to individuals only or also in bulk?",
    answer: "We sell to both individuals and bulk buyers. For wholesale or bulk purchasing, please contact us directly for special pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery, UPI, and bank transfers. No online payment option is required on the website.",
  },
  {
    question: "Do you ship across India?",
    answer: "Yes, we deliver to most cities and towns across India. Delivery availability can be confirmed via call or WhatsApp.",
  },
  {
    question: "Is there any age restriction to order?",
    answer: "Yes. You must be 18 years or older to purchase from our website. By placing an order, you confirm that you meet the legal age requirement.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-accent via-background to-pink-light py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear answers about privacy, delivery and ordering
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-5 pt-0 animate-fade-in">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Still have questions */}
              <div className="mt-12 text-center bg-accent rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Need private assistance? Our team is ready to help you discreetly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+917990558862">
                    <button className="px-6 py-3 rounded-lg font-semibold btn-call">
                      📞 Call Us
                    </button>
                  </a>
                  <a
                    href="https://wa.me/917990558862"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-6 py-3 rounded-lg font-semibold btn-whatsapp">
                      💬 WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default FAQ;
