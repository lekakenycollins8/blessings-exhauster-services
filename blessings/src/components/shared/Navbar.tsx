'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/constants/company';
import { CONTACT_INFO } from '@/lib/constants/contact';
import { getWhatsAppUrl } from '@/lib/utils/whatsapp';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handlePhoneClick = () => {
    // Analytics tracking will be added when Google Analytics is configured
    console.log('Phone clicked');
  };

  const handleWhatsAppClick = () => {
    // Analytics tracking will be added when Google Analytics is configured
    console.log('WhatsApp clicked');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="Blessing Movers & Exhauster Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                {COMPANY_INFO.name.split('&')[0]}
              </h2>
              <p className="text-xs text-gray-600">Professional Services</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-green-600 hover:bg-green-700"
            >
              <a href={CONTACT_INFO.phones.primary.link}>
                <Phone className="w-4 h-4 mr-2" />
                {CONTACT_INFO.phones.primary.display}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <a href={CONTACT_INFO.phones.primary.link} onClick={handlePhoneClick}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call {CONTACT_INFO.phones.primary.display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
