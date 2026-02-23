import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Droplet, 
  Sparkles, 
  Recycle, 
  AlertCircle, 
  Home, 
  Building, 
  Armchair, 
  Truck,
  LucideIcon 
} from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  droplet: Droplet,
  sparkles: Sparkles,
  recycle: Recycle,
  'alert-circle': AlertCircle,
  home: Home,
  building: Building,
  armchair: Armchair,
  truck: Truck,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Truck;

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-500">
      <CardHeader>
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-green-600" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
