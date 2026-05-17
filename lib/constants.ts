export const SITE = {
  name: 'Garage Door Repair of Pembroke Pines',
  domain: 'https://garagedoorrepairpembrokepines.us',
  phone: '(754) 314-2244',
  phoneRaw: '7543142244',
  address: '18501 Pines Blvd STE 300',
  city: 'Pembroke Pines',
  state: 'FL',
  zip: '33029',
  county: 'Broward',
  hours: 'Monday–Sunday 7:00 AM – 8:00 PM',
  hoursSchema: 'Mo-Su 07:00-20:00',
  formspree: 'https://formspree.io/f/mdajnpqn',
  founded: '2010',
}

export const SERVICES = [
  { slug: 'spring-replacement', name: 'Spring Replacement', shortName: 'Springs', icon: '🔧', description: 'Loud bang? Door won\'t open? A broken torsion spring is the #1 garage door emergency in South Florida.' },
  { slug: 'opener-repair', name: 'Opener Repair', shortName: 'Openers', icon: '📡', description: 'Door hums but won\'t move? Remote stopped working? We diagnose and fix all major brands same day.' },
  { slug: 'off-track-repair', name: 'Off-Track Repair', shortName: 'Off-Track', icon: '🛤️', description: 'Door hanging crooked or stuck sideways? Don\'t force it — call us before it gets worse.' },
  { slug: 'cable-replacement', name: 'Cable Replacement', shortName: 'Cables', icon: '⚙️', description: 'Frayed or snapped cable? Door lifting unevenly? This is dangerous — let our techs handle it safely.' },
  { slug: 'sensor-repair', name: 'Sensor Repair', shortName: 'Sensors', icon: '👁️', description: 'Door reverses for no reason? In South Florida, heat, humidity, and lizards blocking sensor eyes are common culprits.' },
  { slug: 'roller-replacement', name: 'Roller Replacement', shortName: 'Rollers', icon: '🔩', description: 'Grinding, squeaking, or rattling every time the door moves? Worn nylon rollers are usually the cause.' },
  { slug: 'emergency-repair', name: 'Emergency Repair', shortName: 'Emergency', icon: '🚨', description: 'Can\'t get your car out? Door stuck open overnight? We prioritize same-day emergency calls across Pembroke Pines.' },
  { slug: 'new-installation', name: 'New Door Installation', shortName: 'Installation', icon: '🏠', description: 'Ready for a new door? We install hurricane-rated sectional doors that meet Broward County wind load requirements and HOA standards.' },
]

export const NEIGHBORHOODS = [
  {
    slug: 'silver-lakes',
    name: 'Silver Lakes',
    image: '/images/silver-lakes.png',
    description: 'Upscale waterfront community with premium homes and strict HOA standards.',
  },
  {
    slug: 'chapel-trail',
    name: 'Chapel Trail',
    image: '/images/chapel-trail.png',
    description: 'Family-oriented neighborhood with newer construction and an active community HOA.',
  },
  {
    slug: 'pembroke-falls',
    name: 'Pembroke Falls',
    image: '/images/pembroke-falls.png',
    description: 'Gated upscale community with well-maintained homes and strong HOA oversight.',
  },
  {
    slug: 'pembroke-isles',
    name: 'Pembroke Isles',
    image: '/images/pembroke-isles.png',
    description: 'Established neighborhood with larger lots and many homes in need of door upgrades.',
  },
  {
    slug: 'grand-palms',
    name: 'Grand Palms',
    image: '/images/grand-palms.png',
    description: 'Golf community with premium homes and discerning, high-income homeowners.',
  },
  {
    slug: 'walnut-creek',
    name: 'Walnut Creek',
    image: '/images/walnut-creek.png',
    description: 'Well-established community with many homes featuring aging hardware needing service.',
  },
]

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: 'US',
  },
  telephone: SITE.phone,
  url: SITE.domain,
  areaServed: [
    'Pembroke Pines', 'Silver Lakes', 'Chapel Trail', 'Pembroke Falls',
    'Pembroke Isles', 'Grand Palms', 'Walnut Creek', 'Broward County',
  ],
  priceRange: '$$',
  openingHours: SITE.hoursSchema,
  description:
    'Professional garage door repair and installation serving Pembroke Pines, FL and surrounding Broward County communities.',
}
