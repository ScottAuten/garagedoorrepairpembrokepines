import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Sensor Repair Pembroke Pines FL | Won\'t Close Fix',
  description:
    'Garage door won\'t close in Pembroke Pines? Safety sensor repair and alignment — same day. Fast diagnosis, upfront pricing. Licensed technicians. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/sensor-repair' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Safety Sensor Repair',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description: 'Professional garage door safety sensor repair, alignment, and replacement in Pembroke Pines, FL.',
  offers: { '@type': 'Offer', priceRange: '$50 - $150', priceCurrency: 'USD' },
}

const faqs = [
  {
    question: 'Why does my garage door go down and then come back up?',
    answer:
      'This is almost always a safety sensor issue. The infrared beam between the two sensors is being interrupted — by misalignment, a dirty lens, direct sunlight interference, or a physical obstruction in the sensor path. The opener reverses as a safety response.',
  },
  {
    question: 'The sensor lights are blinking — what does that mean?',
    answer:
      'A blinking or off sensor light means the sensors aren\'t properly aligned or one sensor is malfunctioning. The sending sensor (usually yellow light) and receiving sensor (green light) must be precisely aimed at each other. We realign and test in under an hour in most cases.',
  },
  {
    question: 'Can sunlight cause sensor problems in Florida?',
    answer:
      'Yes — and it\'s common in Pembroke Pines. Direct afternoon sunlight hitting the receiving sensor can overwhelm its infrared receiver and mimic an obstacle. We can reposition sensors or add a sun shade to resolve this without replacing the sensors.',
  },
  {
    question: 'How much does sensor repair cost?',
    answer:
      'Sensor alignment and cleaning is typically $50–$80. If a sensor needs replacement, cost runs $80–$150 including parts and labor. It\'s one of the more affordable garage door repairs.',
  },
  {
    question: 'Can I bypass the sensors to close my door?',
    answer:
      'You can temporarily close most openers by holding the wall button continuously — the opener overrides the sensor signal if pressure is maintained. However, this bypasses a critical safety feature. Get it repaired promptly, especially if children or pets use the area.',
  },
]

export default function SensorRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Sensor Repair</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Sensor Repair in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Door won&apos;t close — or closes and reverses immediately? Misaligned or dirty safety sensors are the #1
            cause. We diagnose and fix sensor issues the same day across Pembroke Pines for $50–$150.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Call {SITE.phone}
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Why won&apos;t my garage door close in Pembroke Pines?</p>
          <p className="text-gray-700 leading-relaxed">
            The most common reason a garage door won&apos;t close is misaligned or dirty safety sensors. The infrared beam between sensors is broken or obstructed. Most sensor issues are resolved in under an hour for <strong>$50–$150</strong> — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> for same-day service.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">How Garage Door Safety Sensors Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Safety sensors consist of two small units mounted at the base of your door tracks — one on each side, about 4–6 inches off the ground. The sending sensor (usually identified by a yellow indicator light) projects an infrared beam across the doorway. The receiving sensor (green light when aligned) detects that beam continuously. If anything interrupts the beam while the door is closing, the opener reverses immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This safety system was mandated by federal law for all residential openers manufactured after January 1993. While it prevents serious injuries, it&apos;s also one of the more sensitive components of a garage door system — easily knocked out of alignment by a stray bicycle, a garden hose, or even accumulated dust on the lens.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">South Florida Sensor Problems: Direct Sunlight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pembroke Pines experiences intense afternoon sun from the southwest — the same direction most garage door openings face. During certain times of year, direct sunlight hits the receiving sensor at exactly the angle needed to overwhelm its infrared receiver, causing the opener to behave as if an obstacle is present even when the path is clear.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We&apos;ve seen this issue repeatedly in neighborhoods like Silver Lakes and Grand Palms where garages face west. Solutions include repositioning the sensor slightly, adding a small visor or hood over the receiving sensor, or replacing older sensors with newer models that have better ambient-light rejection. We diagnose which approach is right for your setup.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Areas We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NEIGHBORHOODS.map((n) => (
              <Link key={n.slug} href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Pembroke Pines, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Door Won't Close? We Fix Sensors Same Day." subheading="Fast, affordable sensor repair across all of Pembroke Pines." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Quick Fix. Upfront Price. Same Day." subheading="Licensed technicians serving Pembroke Pines and Broward County." variant="navy" />
    </>
  )
}
