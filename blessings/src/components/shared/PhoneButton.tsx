import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhoneButtonProps {
  number: string;
  displayNumber: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function PhoneButton({ 
  number, 
  displayNumber, 
  label, 
  variant = 'default',
  size = 'default',
  className = ''
}: PhoneButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a
        href={`tel:${number}`}
        aria-label={`Call ${displayNumber}`}
      >
        <Phone className="w-4 h-4 mr-2" />
        <span>{label || displayNumber}</span>
      </a>
    </Button>
  );
}
