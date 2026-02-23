import { COMPANY_INFO } from '@/lib/constants/company';
import { CONTACT_INFO, SOCIAL_MEDIA } from '@/lib/constants/contact';
import { COUNTY_NAMES } from '@/lib/constants/locations';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-sm mb-4 text-gray-400">
              {COMPANY_INFO.shortDescription}
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Septic Tank Emptying
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Grease Trap Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Pit Latrine Emptying
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Moving Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Transport Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Emergency Services (24/7)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {COUNTY_NAMES.map((county) => (
                <li key={county}>
                  <a href="#service-areas" className="hover:text-green-400 transition-colors">
                    {county} County
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h5 className="text-white font-semibold mb-2">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:text-green-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-green-400 transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-green-400 flex-shrink-0" />
                <div>
                  <a href={CONTACT_INFO.phones.primary.link} className="hover:text-green-400 transition-colors block">
                    {CONTACT_INFO.phones.primary.display}
                  </a>
                  <a href={CONTACT_INFO.phones.secondary.link} className="hover:text-green-400 transition-colors block">
                    {CONTACT_INFO.phones.secondary.display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-green-400 flex-shrink-0" />
                <div>
                  <a href={`mailto:${CONTACT_INFO.email.general}`} className="hover:text-green-400 transition-colors block break-all">
                    {CONTACT_INFO.email.general}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-green-400 flex-shrink-0" />
                <div>
                  <p>{CONTACT_INFO.address.city}</p>
                  <p>{CONTACT_INFO.address.county}</p>
                  <p>{CONTACT_INFO.address.country}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
