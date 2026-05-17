import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Off Track Repair Pembroke Pines FL | Emergency Same-Day',
  description:
    'Garage door jumped off track in Pembroke Pines? Emergency repair available same day. Licensed technicians realign tracks, replace rollers. Call (754) 314-2244 now.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/off-track-repair' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Off-Track Repair',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description: 'Emergency garage door off-track realignment and repair in Pembroke Pines, FL.',
  offers: { '@type': 'Offer', priceRange: '$100 - $300', priceCurrency: 'USD' },
}

const faqs = [
  {
    question: 'Can I use my garage door if it\'s off track?',
    answer:
      'No. Do not attempt to operate a garage door that has jumped its tracks. Running the opener can bend tracks further, snap cables, or cause the door to crash. Leave the door in place and call for same-day repair.',
  },
  {
    question: 'What causes a garage door to go off track?',
    answer:
      'The most common causes are: a vehicle hitting the door or tracks, worn or broken rollers, a cable snapping suddenly, an obstruction in the track path, or loose track mounting hardware. Impact damage accounts for most emergency off-track calls.',
  },
  {
    question: 'How much does off-track repair cost in Pembroke Pines?',
    answer:
      'Most off-track repairs cost $100–$300. Simple realignment with no track damage is on the low end. If tracks are bent and need replacement, or if multiple rollers failed simultaneously, cost is higher.',
  },
  {
    question: 'Can bent tracks be straightened or do they need replacing?',
    answer:
      'Minor bends can often be straightened. Significant bends, kinks, or cracks require track replacement — a bent track will cause the door to jump again quickly. We assess and give you an honest recommendation.',
  },
  {
    question: 'How long does off-track repair take?',
    answer:
      'Most off-track repairs are completed in 1–2 hours. If tracks need full replacement, plan for 2–3 hours. We arrive fully stocked with replacement rollers, tracks, and hardware.',
  },
]

export default function OffTrackRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Emergency Service</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Off-Track Repair in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            A door off its tracks is a safety emergency. Do not attempt to force the door open or run the opener.
            Call us now — same-day response available across Pembroke Pines, 7 days a week.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">What should I do if my garage door jumps the track?</p>
          <p className="text-gray-700 leading-relaxed">
            Stop using the door immediately. Do not run the opener. A door off its tracks can collapse if forced. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>{' '}
            for same-day emergency off-track repair in Pembroke Pines. Cost: <strong>$100–$300</strong> for most repairs.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Garage Doors Go Off Track</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most dramatic cause is vehicle impact — a car backing into the door or a low-hanging object striking
            a panel. But off-track failures also happen gradually: worn rollers that develop flat spots eventually
            derail, loose track mounting bolts let the track flex over time, and a snapped lift cable can cause one
            side of the door to drop suddenly and jam the rollers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Pembroke Pines, track corrosion is a contributing factor in older homes — galvanized track coating
            eventually breaks down in high-humidity environments, and corroded track surfaces create resistance that
            worn rollers can&apos;t overcome.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Our Off-Track Repair Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
            <li><strong>Safety assessment</strong> — check door stability before any movement</li>
            <li><strong>Identify root cause</strong> — roller failure, track damage, cable issue, or impact</li>
            <li><strong>Upfront written quote</strong> — approval before any work</li>
            <li><strong>Realign door</strong> — carefully seat all rollers back in track</li>
            <li><strong>Repair or replace tracks</strong> — straighten minor bends; replace severely damaged sections</li>
            <li><strong>Replace failed rollers</strong> — nylon or steel depending on door and preference</li>
            <li><strong>Tighten all mounting hardware</strong> — prevent future loosening</li>
            <li><strong>Test through full travel</strong> — 10 cycles confirmed smooth before leaving</li>
          </ol>

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

      <CTASection heading="Door Off Track? Don't Force It." subheading="Emergency same-day off-track repair across Pembroke Pines." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Safe, Fast, Fully Insured" subheading="Licensed Pembroke Pines technicians. Upfront pricing. Same-day service." variant="navy" />
    </>
  )
}
