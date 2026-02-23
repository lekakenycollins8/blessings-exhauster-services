export interface Service {
  id: string;
  title: string;
  description: string;
  features: readonly string[];
  icon: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  description: string;
  coverageAreas: readonly string[];
  services: readonly string[];
  highlights: readonly string[];
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  location: string;
  message: string;
  contactMethod: 'phone' | 'whatsapp' | 'email';
}
