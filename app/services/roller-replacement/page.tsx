import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Roller Replacement Pembroke Pines FL | Quiet Nylon Rollers',
  description:
    'Noisy, rough garage door in Pembroke Pines? Roller replacement with quiet nylon rollers — same-day service. Licensed technicians, upfront pricing. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/roller-replacement' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Roller Replacement',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description: 'Professional garage door roller replacement with nylon and steel rollers in Pembroke Pines, FL.',
  offers: { '@type': 'Offer', priceRange: '$75 - $200', priceCurrency: 'USD' },
}

const faqs = [
  {
    question: 'Why is my garage door so loud when it opens?',
    answer:
      'Noise during operation is the most common symptom of worn rollers. Old steel rollers with dry or rusted bearings create grinding, rattling, and squealing. Nylon roller upgrades dramatically reduce noise — often by 50–70%.',
  },
  {
    question: 'What is the difference between nylon and steel rollers?',
    answer:
      'Nylon rollers run much quieter than steel, require less lubrication, and don\'t rust — making them ideal for South Florida\'s humidity. Steel rollers are more durable under heavy commercial loads. For residential use in Pembroke Pines, nylon sealed-bearing rollers are our standard recommendation.',
  },
  {
    question: 'How much does roller replacement cost?',
    answer:
      'Replacing all rollers on a standard two-car door typically costs $75–$200 including parts and labor. The full set of 10–12 rollers is usually replaced at once — piecemeal replacement just means more service calls as the remaining rollers wear out.',
  },
  {
    question: 'How often should garage door rollers be replaced?',
    answer:
      'Standard steel rollers last 5–7 years with maintenance. Nylon sealed-bearing rollers last 10–15 years. In high-humidity environments like Pembroke Pines, steel rollers without regular lubrication may wear faster.',
  },
  {
    question: 'Can worn rollers damage other parts of the door system?',
    answer:
      'Yes. Rollers with flat spots or damaged bearings put uneven pressure on tracks, causing them to bend or loosen over time. They also put excess strain on the opener motor and springs as they compensate for increased friction.',
  },
]

export default function RollerReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Roller Replacement</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Roller Replacement in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Grinding, rattling, and rough door movement are signs your rollers are overdue for replacement. Nylon
            roller upgrades eliminate noise and extend the life of your tracks, springs, and opener — same-day
            service available across Pembroke Pines.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">Why is my garage door making so much noise?</p>
          <p className="text-gray-700 leading-relaxed">
            Grinding, rattling, and squealing during door travel almost always points to worn or dry rollers. Nylon roller replacement eliminates most door noise and costs <strong>$75–$200</strong> for a full set — typically completed in under 90 minutes.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Nylon vs. Steel Rollers: What We Recommend</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard residential garage doors come from the factory with steel rollers — functional but noisy, and susceptible to rust in South Florida&apos;s high-humidity environment. We recommend upgrading to sealed-bearing nylon rollers for virtually all residential applications in Pembroke Pines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-navy mb-3">Steel Rollers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Noisy operation</li>
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Rust-prone in humidity</li>
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Require regular lubrication</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Lower upfront cost</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Better for very heavy doors</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-navy mb-3">Nylon Rollers (Recommended)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Dramatically quieter</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Rust-resistant</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Sealed bearings — less maintenance</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>10–15 year lifespan</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Gentler on tracks</li>
              </ul>
            </div>
          </div>

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

      <CTASection heading="Quiet Your Noisy Garage Door Today." subheading="Nylon roller upgrades available same day across Pembroke Pines." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Smooth, Quiet, Long-Lasting" subheading="Licensed technicians. Upfront pricing. Pembroke Pines and all of Broward County." variant="navy" />
    </>
  )
}
