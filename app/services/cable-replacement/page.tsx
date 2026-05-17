import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Cable Replacement Pembroke Pines FL | Same-Day Service',
  description:
    'Garage door cable snapped or fraying in Pembroke Pines? Licensed technicians replace lift cables same day. Galvanized steel cables, upfront pricing. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/cable-replacement' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Cable Replacement',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description: 'Professional garage door lift cable replacement in Pembroke Pines, FL.',
  offers: { '@type': 'Offer', priceRange: '$100 - $250', priceCurrency: 'USD' },
}

const faqs = [
  {
    question: 'How do I know if my garage door cable is broken?',
    answer:
      'Signs of a broken cable: the door hangs at an angle (one side lower than the other), you can see a loose cable coiled at the bottom of the door, or the door won\'t open at all despite the opener running. A snapped cable is often visible as a loose wire on the floor or side of the track.',
  },
  {
    question: 'Is it safe to use the door with a frayed cable?',
    answer:
      'No. A fraying cable is near failure. If it snaps while the door is open, the door can crash down suddenly. Stop using the door and call for same-day service.',
  },
  {
    question: 'How much does cable replacement cost in Pembroke Pines?',
    answer:
      'Cable replacement typically costs $100–$250 including both cables and labor. We replace both cables simultaneously — if one has failed, the other is near end-of-life.',
  },
  {
    question: 'Why do garage door cables fail in South Florida?',
    answer:
      'South Florida\'s high humidity and salt air accelerate corrosion on steel lift cables. Cables that aren\'t lubricated annually develop surface rust that progressively weakens the strands. Galvanized cables with regular maintenance significantly extend service life.',
  },
  {
    question: 'Do you replace cables on both sides?',
    answer:
      'Yes, always. Cables wear at the same rate. Replacing only the snapped cable leaves the other within weeks of failure. Replacing both ensures balanced tension and saves a second service call.',
  },
]

export default function CableReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Cable Replacement</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Cable Replacement in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Lift cables are the critical link between your springs and door. A snapped or fraying cable means your
            door can crash without warning. Same-day cable replacement available across Pembroke Pines — call now.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">How much does garage door cable replacement cost?</p>
          <p className="text-gray-700 leading-relaxed">
            Cable replacement in Pembroke Pines costs <strong>$100–$250</strong> including both cables and labor. We always replace both lift cables simultaneously and calibrate the full counterbalance system before leaving.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">How Lift Cables Work — and Why They Fail</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Garage door lift cables connect the bottom corner of each door panel to the cable drum mounted on the torsion spring shaft (or to the extension spring directly). When the spring releases tension to open the door, the cables transmit that force through the drums and down to the door, lifting it smoothly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Pembroke Pines and across Broward County, the combination of high humidity, salt air, and temperature cycling creates ideal conditions for cable corrosion. Steel cables that aren&apos;t treated with a protective lubricant develop surface oxidation — visible as reddish-brown discoloration — that progressively weakens individual strands until the cable snaps under load. We recommend inspecting and lubricating cables annually as part of routine garage door maintenance.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Warning Signs Before Cables Snap</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Visible rust or discoloration on the cable</li>
            <li>Frayed or unraveling strands at the end loops or drum</li>
            <li>Door opening unevenly (one side higher than the other)</li>
            <li>Clicking or snapping sounds during door travel</li>
            <li>Cable visible as slack or hanging loose</li>
          </ul>

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

      <CTASection heading="Cable Snapped? We Can Fix It Today." subheading="Same-day cable replacement across all Pembroke Pines neighborhoods." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Galvanized Cables. Proper Calibration. Same Day." subheading="Licensed and insured. Upfront pricing before any work." variant="navy" />
    </>
  )
}
