'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants/contact';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from '@/lib/utils/analytics';

export function FloatingContactButtons() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('Floating Button');
  };

  const handlePhoneClick = () => {
    trackPhoneClick(CONTACT_INFO.phones.primary.display);
  };

  const handleEmailClick = () => {
    trackEmailClick(CONTACT_INFO.email.general);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      <a
        href={CONTACT_INFO.phones.primary.link}
        onClick={handlePhoneClick}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>

      <a
        href={`mailto:${CONTACT_INFO.email.general}`}
        onClick={handleEmailClick}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Email us"
      >
        <Mail className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email Us
        </span>
      </a>
    </div>
  );
}
