// Image optimization utility for SEO-friendly naming and alt text

export const IMAGE_MAPPINGS = {
  'WhatsApp Image 2026-02-21 at 13.25.34.jpeg': {
    newName: 'exhauster-service-kisii-septic-tank.jpg',
    alt: 'Professional exhauster truck providing septic tank emptying services in Kisii',
  },
  'WhatsApp Image 2026-02-21 at 13.25.34 (1).jpeg': {
    newName: 'exhauster-truck-nyamira-service.jpg',
    alt: 'Blessing Movers exhauster truck delivering services in Nyamira County',
  },
  'WhatsApp Image 2026-02-21 at 13.25.34 (2).jpeg': {
    newName: 'transport-truck-blessing-movers.jpg',
    alt: 'Blessing Movers transport truck for moving services in Kisii',
  },
  'WhatsApp Image 2026-02-21 at 13.25.34 (3).jpeg': {
    newName: 'exhauster-service-residential-area.jpg',
    alt: 'Exhauster truck providing residential septic tank services',
  },
  'WhatsApp Image 2026-02-21 at 13.25.35.jpeg': {
    newName: 'exhauster-truck-migori-service.jpg',
    alt: 'Professional exhauster services in Migori County',
  },
  'WhatsApp Image 2026-02-21 at 13.25.35 (1).jpeg': {
    newName: 'exhauster-fleet-blessing-movers.jpg',
    alt: 'Blessing Movers modern exhauster fleet serving Western Kenya',
  },
  'WhatsApp Image 2026-02-21 at 13.25.35 (2).jpeg': {
    newName: 'moving-services-homabay.jpg',
    alt: 'Moving and transport services in Homabay County',
  },
  'WhatsApp Image 2026-02-21 at 13.25.35 (3).jpeg': {
    newName: 'exhauster-service-action.jpg',
    alt: 'Exhauster truck in action during septic tank emptying',
  },
  'WhatsApp Image 2026-02-21 at 13.25.36.jpeg': {
    newName: 'transport-truck-warehouse.jpg',
    alt: 'Blessing Movers transport truck for commercial moving',
  },
  'WhatsApp Image 2026-02-21 at 13.25.36 (1).jpeg': {
    newName: 'exhauster-truck-professional-team.jpg',
    alt: 'Professional team operating exhauster truck in Kisii',
  },
  'WhatsApp Image 2026-02-21 at 13.25.36 (2).jpeg': {
    newName: 'exhauster-service-emergency.jpg',
    alt: '24/7 emergency exhauster services available across all counties',
  },
  'WhatsApp Image 2026-02-21 at 13.25.36 (3).jpeg': {
    newName: 'grease-trap-cleaning-service.jpg',
    alt: 'Professional grease trap cleaning services for restaurants',
  },
  'WhatsApp Image 2026-02-21 at 13.25.36 (4).jpeg': {
    newName: 'pit-latrine-emptying-service.jpg',
    alt: 'Pit latrine emptying services for homes and institutions',
  },
  'WhatsApp Image 2026-02-21 at 13.25.37.jpeg': {
    newName: 'exhauster-truck-green-fleet.jpg',
    alt: 'Eco-friendly exhauster truck with modern equipment',
  },
  'WhatsApp Image 2026-02-21 at 13.25.37 (1).jpeg': {
    newName: 'exhauster-service-nyamira-town.jpg',
    alt: 'Exhauster services in Nyamira Town and surrounding areas',
  },
  'WhatsApp Image 2026-02-21 at 13.25.37 (2).jpeg': {
    newName: 'exhauster-truck-field-service.jpg',
    alt: 'Exhauster truck providing services in rural areas',
  },
  'WhatsApp Image 2026-02-21 at 13.25.37 (3).jpeg': {
    newName: 'commercial-transport-services.jpg',
    alt: 'Commercial transport and cargo services across four counties',
  },
} as const;

export function getOptimizedImagePath(originalName: string): string {
  const mapping = IMAGE_MAPPINGS[originalName as keyof typeof IMAGE_MAPPINGS];
  return mapping ? `/images/${mapping.newName}` : `/images/${originalName}`;
}

export function getImageAlt(originalName: string): string {
  const mapping = IMAGE_MAPPINGS[originalName as keyof typeof IMAGE_MAPPINGS];
  return mapping ? mapping.alt : 'Blessing Movers & Exhauster Services';
}
