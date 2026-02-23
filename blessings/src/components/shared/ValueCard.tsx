import { 
  Lightbulb, 
  Leaf, 
  Heart, 
  Users, 
  Truck, 
  BadgeDollarSign, 
  Clock, 
  MapPin,
  LucideIcon 
} from 'lucide-react';
import { CompanyValue } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  leaf: Leaf,
  heart: Heart,
  users: Users,
  truck: Truck,
  'badge-dollar-sign': BadgeDollarSign,
  clock: Clock,
  'map-pin': MapPin,
};

interface ValueCardProps {
  value: CompanyValue;
}

export function ValueCard({ value }: ValueCardProps) {
  const Icon = iconMap[value.icon] || Heart;

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
    </div>
  );
}
