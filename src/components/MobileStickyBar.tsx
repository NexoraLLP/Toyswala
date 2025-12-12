import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+917990558862";
const WHATSAPP_NUMBER = "917990558862";

const MobileStickyBar = () => {
  return (
    <div className="sticky-mobile-bar">
      <div className="flex">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold btn-call"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold btn-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
