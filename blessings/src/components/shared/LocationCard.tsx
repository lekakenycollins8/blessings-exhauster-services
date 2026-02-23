import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { ServiceArea } from '@/types';

interface LocationCardProps {
  location: ServiceArea;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-500">
      <CardHeader>
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <MapPin className="w-7 h-7 text-green-600" />
        </div>
        <CardTitle className="text-2xl">{location.name}</CardTitle>
        <CardDescription className="text-base">{location.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-sm text-green-700 mb-3">Coverage Areas:</h4>
          <div className="flex flex-wrap gap-2">
            {location.coverageAreas.map((area, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-green-700 mb-3">Available Services:</h4>
          <ul className="space-y-2">
            {location.services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-green-700 mb-3">Why Choose Us:</h4>
          <ul className="space-y-2">
            {location.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-green-600 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
