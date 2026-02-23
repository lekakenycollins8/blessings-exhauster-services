// Analytics tracking for contact interactions

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

export function trackPhoneClick(phoneNumber: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'Contact',
      event_label: phoneNumber,
      value: 1,
    });
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📞 Phone click tracked:', phoneNumber);
  }
}

export function trackWhatsAppClick(context?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: context || 'WhatsApp',
      value: 1,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('💬 WhatsApp click tracked:', context);
  }
}

export function trackEmailClick(email: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'Contact',
      event_label: email,
      value: 1,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 Email click tracked:', email);
  }
}

export function trackFormSubmission(formType: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'Lead Generation',
      event_label: formType,
      value: 1,
      ...data,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📝 Form submission tracked:', formType, data);
  }
}

export function trackNavigation(section: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation', {
      event_category: 'Navigation',
      event_label: section,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('🧭 Navigation tracked:', section);
  }
}
