import { CONTACT_INFO } from '@/lib/constants/contact';

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = message || 'Hello Blessing Movers, I need information about your services.';
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodedMessage}`;
}

export function getWhatsAppUrlWithService(service: string, location?: string): string {
  const message = `Hello Blessing Movers, I need information about ${service}${location ? ` in ${location}` : ''}.`;
  return getWhatsAppUrl(message);
}

export function getWhatsAppUrlFromForm(formData: {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  contactMethod: string;
}): string {
  const message = `
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Location: ${formData.location}
Message: ${formData.message}
Preferred Contact: ${formData.contactMethod}
  `.trim();
  
  return getWhatsAppUrl(message);
}
