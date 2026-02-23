import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmailButtonProps {
  email: string;
  subject?: string;
  body?: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function EmailButton({ 
  email, 
  subject,
  body,
  label = 'Email Us',
  variant = 'default',
  size = 'default',
  className = ''
}: EmailButtonProps) {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const mailtoUrl = `mailto:${email}${params.toString() ? `?${params.toString()}` : ''}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a
        href={mailtoUrl}
        aria-label={`Email ${email}`}
      >
        <Mail className="w-4 h-4 mr-2" />
        <span>{label}</span>
      </a>
    </Button>
  );
}
