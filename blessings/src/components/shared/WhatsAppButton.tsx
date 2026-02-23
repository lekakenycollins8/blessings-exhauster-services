import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl, getWhatsAppUrlWithService } from '@/lib/utils/whatsapp';

interface WhatsAppButtonProps {
  service?: string;
  location?: string;
  customMessage?: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function WhatsAppButton({ 
  service, 
  location, 
  customMessage,
  label = 'WhatsApp Us',
  variant = 'default',
  size = 'default',
  className = ''
}: WhatsAppButtonProps) {
  const whatsappUrl = customMessage 
    ? getWhatsAppUrl(customMessage)
    : service 
      ? getWhatsAppUrlWithService(service, location)
      : getWhatsAppUrl();

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        <span>{label}</span>
      </a>
    </Button>
  );
}
