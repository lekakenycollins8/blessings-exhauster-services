import { CONTACT_INFO } from '@/lib/constants/contact';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Contact us today for a free quote or immediate assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Available 24/7 for emergencies
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href={CONTACT_INFO.phones.primary.link}
                    className="block text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {CONTACT_INFO.phones.primary.display}
                  </a>
                  <a
                    href={CONTACT_INFO.phones.secondary.link}
                    className="block text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {CONTACT_INFO.phones.secondary.display}
                  </a>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <a href={CONTACT_INFO.phones.primary.link}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Quick response guaranteed
                </p>
                <div className="mb-6">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {CONTACT_INFO.whatsapp.displayNumber}
                  </a>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A]"
                >
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Serving <span className="font-semibold text-green-600">Kisii, Nyamira, Migori & Homabay</span> counties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
