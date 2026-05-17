import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { SITE, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Services Pembroke Pines FL | All Repairs & Installation',
  description:
    'Complete garage door services in Pembroke Pines, FL. Spring replacement, opener repair, cable replacement, new installation & more. Licensed & insured. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services' },
}

const serviceDetails = [
  {
    slug: 'spring-replacement',
    name: 'Spring Replacement',
    icon: '🔧',
    price: '$150–$500',
    description:
      'Torsion and extension spring replacement for all residential and light commercial garage doors. We stock galvanized springs in every standard size for same-day repairs.',
    highlights: ['Torsion & extension springs', 'High-cycle upgrades available', 'Both springs replaced together'],
  },
  {
    slug: 'opener-repair',
    name: 'Opener Repair',
    icon: '📡',
    price: '$85–$350',
    description:
      'Diagnosis and repair of all major opener brands including LiftMaster, Chamberlain, Genie, Craftsman, and Ryobi. Logic board, motor, and drive repair or full replacement.',
    highlights: ['All major brands serviced', 'Remote & keypad programming', 'WiFi smart opener upgrades'],
  },
  {
    slug: 'off-track-repair',
    name: 'Off-Track Repair',
    icon: '🛤️',
    price: '$100–$300',
    description:
      'Emergency realignment service when your door has jumped its tracks. We straighten bent tracks, replace damaged rollers, and test for full safe operation before leaving.',
    highlights: ['Same-day emergency service', 'Track straightening & replacement', 'Roller replacement included'],
  },
  {
    slug: 'cable-replacement',
    name: 'Cable Replacement',
    icon: '🔗',
    price: '$100–$250',
    description:
      'Lift cable replacement for frayed, snapped, or corroded cables. Steel lift cables are the critical link between your springs and the door — a failed cable means a failed door.',
    highlights: ['Galvanized steel cables', 'Cable drum inspection', 'Both cables replaced together'],
  },
  {
    slug: 'sensor-repair',
    name: 'Sensor Repair',
    icon: '👁️',
    price: '$50–$150',
    description:
      'Safety sensor alignment, cleaning, and replacement. Misaligned or dirty sensors are among the most common reasons garage doors refuse to close — usually a quick fix.',
    highlights: ['Same-day diagnosis', 'Alignment & replacement', 'All opener brands'],
  },
  {
    slug: 'roller-replacement',
    name: 'Roller Replacement',
    icon: '⚙️',
    price: '$75–$200',
    description:
      'Worn or broken rollers cause noisy, rough operation and put strain on tracks and springs. Nylon roller upgrades dramatically reduce noise and extend door system life.',
    highlights: ['Nylon & steel rollers', 'Quieter operation', 'Extends door system life'],
  },
  {
    slug: 'emergency-repair',
    name: 'Emergency Repair',
    icon: '🚨',
    price: 'Call for pricing',
    description:
      'When your door won\'t open and your car is stuck inside — or won\'t close and your home is exposed — call us. Emergency response is available 7 days a week across Pembroke Pines.',
    highlights: ['7-day availability', '7 AM – 8 PM response', 'No extra emergency fee'],
  },
  {
    slug: 'new-installation',
    name: 'New Door Installation',
    icon: '🏠',
    price: '$800–$3,500+',
    description:
      'Full garage door replacement and new installation. We help you select the right door for your home\'s style, budget, and HOA requirements — then handle everything from removal to final tuning.',
    highlights: ['All major door brands', 'HOA-compliant options', 'Hurricane-rated doors available'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Garage Door Services in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            From a snapped spring to a full door replacement, our licensed technicians handle every garage door
            service need — same day, upfront pricing, no surprises.
          </p>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Call {SITE.phone}
          </a>
        </div>
      </section>

      {/* AEO Block */}
      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            What garage door services are available in Pembroke Pines?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines offers spring replacement ($150–$500), opener repair ($85–$350),
            off-track repair, cable replacement, sensor repair, roller replacement, emergency service, and new door
            installation. Same-day service is available 7 days a week.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">All Services</h2>
          <p className="text-gray-500 text-center mb-10">
            Every service performed by licensed, insured Pembroke Pines technicians
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map((s) => (
              <div key={s.slug} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-0.5">{s.name}</h3>
                      <p className="text-orange-500 font-semibold text-sm">{s.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                  <ul className="space-y-1 mb-5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block bg-navy hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-lg text-sm transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Why Pembroke Pines Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📅', title: 'Same-Day Service', body: 'Most calls scheduled the same day you call, 7 days a week.' },
              { icon: '💰', title: 'Upfront Pricing', body: 'Written quote before any work begins. No hidden fees, ever.' },
              { icon: '🏅', title: 'Licensed & Insured', body: 'Fully licensed for all Broward County garage door work.' },
              { icon: '🛡️', title: 'Guaranteed Work', body: 'Our labor and parts are backed by a satisfaction guarantee.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure What You Need? We'll Diagnose It Free."
        subheading="Call us and describe what's happening — we'll tell you exactly what the fix is and what it costs."
        variant="orange"
      />
    </>
  )
}
