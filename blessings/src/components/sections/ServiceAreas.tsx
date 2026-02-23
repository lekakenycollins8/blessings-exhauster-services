import { LocationCard } from '@/components/shared/LocationCard';
import { SERVICE_AREAS } from '@/lib/constants/locations';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Areas We Proudly Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing reliable exhauster and transport services across four counties in Western Kenya. 
            No matter where you are, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICE_AREAS.map((area) => (
            <LocationCard key={area.id} location={area} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-green-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">
              Not Sure If We Cover Your Area?
            </h3>
            <p className="text-lg mb-6 text-green-800">
              Contact us on WhatsApp and let us know your location. We're always expanding our service areas!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              <a
                href={getWhatsAppUrl('Hello, I would like to know if you cover my area.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
