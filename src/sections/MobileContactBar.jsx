import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const MobileContactBar = () => {
  const phoneNumber = "918745805409"; 
  const whatsappMessage = "Hi, I'm interested. Please share details.";

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="flex shadow-2xl border-t border-gray-200 bg-white">

        {/* CALL BUTTON */}
        <a
          href={`tel:+${phoneNumber}`}
          className="w-1/2 flex items-center justify-center gap-2 py-4 bg-gray-900 text-white font-semibold tracking-wide"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-semibold tracking-wide"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;
