import { Phone, MessageCircle, FileText, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/constants/company';
import { CONTACT_INFO } from '@/lib/constants/contact';
import { COUNTY_NAMES } from '@/lib/constants/locations';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/exhauster-service-kisii-septic-tank.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {COMPANY_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-green-100">
              Professional Exhauster & Transport Services
            </p>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {COUNTY_NAMES.map((county) => (
              <div
                key={county}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-medium flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-green-400" />
                {county}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href={CONTACT_INFO.phones.primary.link}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phones.primary.display}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-green-500 text-white border-2 border-white hover:bg-green-400 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href="#contact">
                <FileText className="mr-2 h-5 w-5" />
                Get a Quote
              </a>
            </Button>
          </div>

          <div className="pt-8 text-sm text-green-100">
            <p className="font-medium">🚨 Emergency Services Available 24/7</p>
            <p className="mt-1">Call {CONTACT_INFO.phones.primary.display} or {CONTACT_INFO.phones.secondary.display}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
