'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContactFormData } from '@/types';
import { getWhatsAppUrlFromForm } from '@/lib/utils/whatsapp';
import { COUNTY_NAMES } from '@/lib/constants/locations';
import { trackFormSubmission } from '@/lib/utils/analytics';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: '',
    contactMethod: 'phone',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('Quote Request', {
      service: formData.service,
      location: formData.location,
      contactMethod: formData.contactMethod,
    });
    
    const whatsappUrl = getWhatsAppUrlFromForm(formData);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="0712 345 678"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (Optional)</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service">Service Needed *</Label>
          <Select
            required
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Septic Tank Emptying">Septic Tank Emptying</SelectItem>
              <SelectItem value="Grease Trap Cleaning">Grease Trap Cleaning</SelectItem>
              <SelectItem value="Pit Latrine Emptying">Pit Latrine Emptying</SelectItem>
              <SelectItem value="Moving Services">Moving Services</SelectItem>
              <SelectItem value="Transport Services">Transport Services</SelectItem>
              <SelectItem value="Emergency Service">Emergency Service</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">County/Location *</Label>
          <Select
            required
            value={formData.location}
            onValueChange={(value) => setFormData({ ...formData, location: value })}
          >
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {COUNTY_NAMES.map((county) => (
                <SelectItem key={county} value={county}>
                  {county} County
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message/Details *</Label>
        <Textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us more about your needs..."
        />
      </div>

      <div className="space-y-2">
        <Label>Preferred Contact Method *</Label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              checked={formData.contactMethod === 'phone'}
              onChange={(e) => setFormData({ ...formData, contactMethod: 'phone' })}
              className="w-4 h-4 text-green-600"
            />
            <span className="text-sm">Phone Call</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="whatsapp"
              checked={formData.contactMethod === 'whatsapp'}
              onChange={(e) => setFormData({ ...formData, contactMethod: 'whatsapp' })}
              className="w-4 h-4 text-green-600"
            />
            <span className="text-sm">WhatsApp</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={(e) => setFormData({ ...formData, contactMethod: 'email' })}
              className="w-4 h-4 text-green-600"
            />
            <span className="text-sm">Email</span>
          </label>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
      >
        <Send className="mr-2 h-5 w-5" />
        Request a Quote
      </Button>
    </form>
  );
}
