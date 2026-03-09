import { EXHAUSTER_SERVICES, TRANSPORT_SERVICES } from '@/lib/constants/services';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants/contact';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import Image from 'next/image';

const serviceImages = {
  'septic-tank': '/images/exhauster-truck-professional-team.jpeg',
  'grease-trap': '/images/exhauster-service-emergency.jpeg',
  'pit-latrine': '/images/exhauster-service-emergency.jpeg',
  'emergency': '/images/exhauster-service-emergency.jpeg',
  'residential-moving': '/images/moving-services-homabay.jpeg',
  'commercial-moving': '/images/moving-services-homabay.jpeg',
  'furniture-transport': '/images/moving-services-homabay.jpeg',
  'cargo-transport': '/images/exhauster-fleet-blessing-movers.jpeg',
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive exhauster and transport solutions tailored to meet your needs across Kisii, Nyamira, Migori, Homabay, Kilgoris, Lolgarian, and Awendo.
          </p>
        </div>

        {/* Exhauster Services */}
        <div className="mb-24">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold mb-3 text-green-700">Exhauster Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional waste management solutions with modern equipment and trained operators
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {EXHAUSTER_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden group">
                    <Image
                      src={serviceImages[service.id as keyof typeof serviceImages]}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h4 className="text-3xl font-bold text-gray-900">{service.title}</h4>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 text-xl">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 bg-green-600 hover:bg-green-700"
                  >
                    <a href="#contact">
                      Request This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Services */}
        <div className="mb-24">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold mb-3 text-green-700">Transport & Moving Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reliable transport solutions for residential and commercial needs
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {TRANSPORT_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden group">
                    <Image
                      src={serviceImages[service.id as keyof typeof serviceImages]}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h4 className="text-3xl font-bold text-gray-900">{service.title}</h4>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 text-xl">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 bg-green-600 hover:bg-green-700"
                  >
                    <a href="#contact">
                      Request This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
