import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+917990558862";
const WHATSAPP_NUMBER = "917990558862";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onEnquiry: (productName: string) => void;
}

const ProductCard = ({ id, name, description, price, image, onEnquiry }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in: ${name} (₹${price.toLocaleString()}). Please share more details.`
  );

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden bg-secondary aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
          ₹{price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col gap-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full"
          >
            <Button className="w-full btn-call" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call to Order
            </Button>
          </a>
          
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full btn-whatsapp" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Enquiry
            </Button>
          </a>
          
          <Button
            onClick={() => onEnquiry(name)}
            className="w-full btn-enquiry"
            size="sm"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
