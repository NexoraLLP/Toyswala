import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const EnquiryModal = ({ isOpen, onClose, productName }: EnquiryModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: productName ? `I'm interested in: ${productName}` : "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Enquiry Sent!",
      description: "We'll contact you shortly.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold text-foreground">Send Enquiry</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center">
            <CheckCircle className="w-16 h-16 text-whatsapp mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">Your enquiry has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {productName && (
              <div className="p-3 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground font-medium">
                  Enquiry for: {productName}
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Name <span className="text-primary">*</span>
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full"
                maxLength={100}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Phone <span className="text-primary">*</span>
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Your phone number"
                className="w-full"
                maxLength={15}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email (optional)"
                className="w-full"
                maxLength={255}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                className="w-full resize-none"
                rows={4}
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-enquiry"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Enquiry
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
