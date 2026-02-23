import { ValueCard } from '@/components/shared/ValueCard';
import { COMPANY_INFO } from '@/lib/constants/company';
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Blessing Movers & Exhauster?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine innovation, sustainability, and customer satisfaction to deliver exceptional service every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COMPANY_INFO.values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Commitment to Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_INFO.trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-green-200 flex-shrink-0" />
                <span className="text-sm font-medium">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
