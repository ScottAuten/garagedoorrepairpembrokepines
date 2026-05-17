import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Spring Replacement Pembroke Pines FL | Same-Day Service',
  description:
    'Expert garage door spring replacement in Pembroke Pines, FL. Torsion & extension springs replaced same day. Licensed technicians, upfront pricing. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/spring-replacement' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Spring Replacement',
  provider: {
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
    },
  },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description:
    'Professional torsion and extension garage door spring replacement in Pembroke Pines, FL. Same-day service available.',
  offers: {
    '@type': 'Offer',
    priceRange: '$150 - $500',
    priceCurrency: 'USD',
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does garage door spring replacement cost in Pembroke Pines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Garage door spring replacement in Pembroke Pines typically costs $150–$350 for a single torsion spring and $200–$500 for a double-spring system or heavy commercial door. We provide upfront pricing before any work begins — no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does garage door spring replacement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most spring replacements take 1–2 hours. Our technicians arrive fully stocked with torsion and extension springs in common sizes, so the job is usually completed in a single visit with no back-ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to replace a garage door spring myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Garage door springs are under extreme tension — a snapped spring can cause serious injury or death. This is one repair that should always be handled by a trained, insured professional with the correct winding bars and torque knowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I replace both springs at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your door has two torsion springs and one breaks, we strongly recommend replacing both simultaneously. They share equal wear cycles, so the second spring typically fails within weeks of the first — replacing both now saves a second service call and keeps the door balanced.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do new garage door springs last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard springs are rated for 10,000 cycles (about 7–10 years with typical use). We also install high-cycle springs rated for 25,000–50,000 cycles for homeowners who want longer service life — especially valuable in South Florida\'s humid, salt-air environment that can accelerate metal fatigue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the signs my garage door spring is failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warning signs include: the door feels extremely heavy when lifting manually, the door only opens a few inches before stopping, you hear a loud bang from the garage (a snapped spring), the door hangs crooked or uneven, or the opener strains and runs slower than normal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you replace springs on all garage door brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work on all major brands including Clopay, CHI, Wayne Dalton, Amarr, Raynor, and custom doors. Our trucks carry a full inventory of torsion and extension springs in standard and heavy-gauge sizes to handle residential single-car, double-car, and commercial doors.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'How much does garage door spring replacement cost in Pembroke Pines?',
    answer:
      'Spring replacement typically costs $150–$350 for a single torsion spring and $200–$500 for a double-spring system or heavy door. We give you upfront pricing before any work begins — no surprise charges.',
  },
  {
    question: 'How long does the repair take?',
    answer:
      'Most spring replacements are completed in 1–2 hours. Our trucks are fully stocked with springs in common sizes, so same-day, single-visit completion is the norm.',
  },
  {
    question: 'Is it safe to replace a garage door spring myself?',
    answer:
      'No. Springs store enormous tension — a sudden release can cause serious injury. This repair requires trained professionals with proper winding bars and torque technique. Please do not attempt this yourself.',
  },
  {
    question: 'Should I replace both springs even if only one broke?',
    answer:
      'Yes. If your door has two springs and one fails, we replace both. They wear at the same rate, so the second spring typically fails within weeks. Replacing both now saves a second call and keeps the door balanced.',
  },
  {
    question: 'How long will new springs last?',
    answer:
      "Standard springs last 7–10 years (10,000 cycles). We also offer high-cycle springs (25,000–50,000 cycles) — a smart upgrade given South Florida's humidity and salt air, which can accelerate metal fatigue.",
  },
  {
    question: 'What are warning signs of a failing spring?',
    answer:
      'Watch for: door feels extremely heavy when lifted manually, door only opens a few inches, a loud bang from the garage, door hanging crooked, or the opener running slower and straining more than usual.',
  },
  {
    question: 'Do you replace springs on all garage door brands?',
    answer:
      'Yes — Clopay, CHI, Wayne Dalton, Amarr, Raynor, and custom doors. Our trucks carry torsion and extension springs in standard and heavy-gauge sizes for single-car, double-car, and commercial applications.',
  },
]

export default function SpringReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Spring Replacement</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Spring Replacement in Pembroke Pines, FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A broken spring means your door isn&apos;t going anywhere — and neither are you. Our licensed technicians
              replace torsion and extension springs the same day you call, restoring your door to safe, balanced
              operation fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
                Call {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
                Free Estimate
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
            <Image
              src="/images/garage-door-spring-replacement.png"
              alt="Garage door spring replacement in Pembroke Pines FL"
              width={480}
              height={320}
              className="rounded-xl shadow-lg w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* AEO Direct Answer Block */}
      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            How much does spring replacement cost in Pembroke Pines?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Garage door spring replacement in Pembroke Pines costs <strong>$150–$500</strong> depending on spring
            type (torsion vs. extension), door weight, and whether you replace one or both springs. Same-day service is
            available — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> for an exact quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-navy mb-4">Torsion vs. Extension Springs: What&apos;s the Difference?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every residential garage door relies on a counterbalance system — either torsion springs mounted on a shaft
            above the door opening, or extension springs running along the horizontal tracks on each side. Understanding
            which type you have matters because they fail differently and require different replacement techniques.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Torsion springs</strong> store energy by winding tight when the door closes and unwinding to lift
            the door. They&apos;re the gold standard for modern double-car garage doors in Pembroke Pines communities
            like Silver Lakes and Pembroke Falls — more durable, safer when they snap, and easier to balance precisely.
            A single torsion spring replacement costs $150–$280; a double torsion setup runs $220–$400.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Extension springs</strong> stretch and contract along the track. They&apos;re common on older and
            lighter single-car doors. When an extension spring snaps, it can fly across the garage — a serious hazard
            unless safety cables are installed. We always add safety cables during extension spring replacement if they
            aren&apos;t already present. Extension spring replacement runs $150–$300 depending on door size.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Why Springs Break — Especially in South Florida</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard garage door springs are rated for 10,000 open/close cycles — roughly 7–10 years for a household
            using the door four times per day. But in Pembroke Pines and the broader Broward County area, three
            environmental factors accelerate spring fatigue significantly:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>High humidity (85%+ in summer):</strong> Metal springs oxidize faster in South Florida&apos;s
              coastal air. Without galvanized hardware and regular lubrication, springs can lose 20–30% of their
              service life.
            </li>
            <li>
              <strong>Salt air from the Atlantic and Gulf:</strong> Properties within 20 miles of the coast — which
              covers all of Pembroke Pines — see accelerated corrosion on ungalvanized springs and cables.
            </li>
            <li>
              <strong>Temperature cycling:</strong> While South Florida avoids freezing temperatures, the 40–50°F
              swing between winter nights and summer days causes metal fatigue in springs that are not properly
              maintained.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            We address these issues by using galvanized springs as our default — not an upgrade — and applying a
            lithium-grease treatment to every spring we install. For homeowners in Chapel Trail and other communities
            near the Everglades buffer, where moisture is a near-constant factor, we also recommend our high-cycle
            25,000-cycle springs as a long-term investment.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Can I DIY My Garage Door Spring? (Why You Shouldn&apos;t)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Torsion springs are wound under 100–200 ft-lbs of torque. Improper winding — using a screwdriver instead
            of proper winding bars, losing grip during the process, or miscounting turns — can send a steel bar flying
            across your garage at dangerous speed. The Consumer Product Safety Commission documents dozens of serious
            injuries annually from DIY spring replacement attempts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond the safety risk, incorrect tension will leave your door off-balance: the opener strains to compensate,
            shortening its motor life by years. Sensors go out of alignment. Cables unspool unevenly and fray. A
            $30 spring purchase can cascade into a $600 repair bill. Our licensed technicians carry proper calibration
            tools, correct the full counterbalance system, and test the door through 10 complete open/close cycles
            before leaving.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">What Happens if You Ignore a Broken Spring?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most garage door openers will attempt to lift a door even with a broken spring — but they&apos;re not
            designed for it. Running a standard residential opener against an unbalanced or fully manual-weight door
            burns out the motor within days. You&apos;ll also risk:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Cables snapping under the extra load — expensive secondary failure</li>
            <li>Door rollers jumping the track</li>
            <li>Opener trolley and carriage damage</li>
            <li>In worst cases, the door crashing down if the opener disengages</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The moment you notice any of the warning signs — loud bang, door barely lifting, uneven hanging — call us.
            Same-day response is available across Pembroke Pines including Silver Lakes, Pembroke Isles, Grand Palms,
            and Walnut Creek.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Our Spring Replacement Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
            <li><strong>Arrive within the scheduled window</strong> — we call 30 minutes before arrival</li>
            <li><strong>Full door inspection</strong> — springs, cables, drums, rollers, hardware, opener</li>
            <li><strong>Upfront written quote</strong> — you approve pricing before we touch anything</li>
            <li><strong>Spring replacement</strong> — torsion or extension, correct size and cycle rating for your door</li>
            <li><strong>Full counterbalance calibration</strong> — proper turns, cable tension, and balance check</li>
            <li><strong>Safety cable installation</strong> (extension springs only, if not present)</li>
            <li><strong>Lubrication</strong> of all moving parts — springs, hinges, rollers, cables</li>
            <li><strong>10-cycle test</strong> — door fully operational before we leave</li>
          </ol>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Spring Replacement Pricing Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow border border-gray-200 text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3 font-semibold">Service</th>
                  <th className="text-left px-5 py-3 font-semibold">Typical Range</th>
                  <th className="text-left px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-5 py-3 font-medium text-gray-800">Single torsion spring</td>
                  <td className="px-5 py-3 text-gray-700">$150 – $280</td>
                  <td className="px-5 py-3 text-gray-500">Single-car or lighter double-car doors</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">Double torsion spring set</td>
                  <td className="px-5 py-3 text-gray-700">$220 – $400</td>
                  <td className="px-5 py-3 text-gray-500">Recommended: replace both when one breaks</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium text-gray-800">Extension spring pair</td>
                  <td className="px-5 py-3 text-gray-700">$150 – $300</td>
                  <td className="px-5 py-3 text-gray-500">Includes safety cable installation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">High-cycle upgrade (25K)</td>
                  <td className="px-5 py-3 text-gray-700">+$50 – $80</td>
                  <td className="px-5 py-3 text-gray-500">Worth it for high-use or commercial doors</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium text-gray-800">Heavy/commercial door</td>
                  <td className="px-5 py-3 text-gray-700">$300 – $500</td>
                  <td className="px-5 py-3 text-gray-500">Larger springs, heavier gauge wire</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            All prices include parts, labor, and calibration. Call for exact quote — we don&apos;t charge a diagnostic fee.
          </p>
        </div>
      </section>

      <CTASection
        heading="Spring Broken? We Can Fix It Today."
        subheading="Same-day spring replacement across all Pembroke Pines neighborhoods."
        variant="orange"
      />

      {/* Areas We Serve */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Spring Replacement Across Pembroke Pines</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Pembroke Pines, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        heading="Ready to Get Your Door Working Again?"
        subheading="Licensed, insured technicians. Same-day appointments. Upfront pricing."
        variant="navy"
      />
    </>
  )
}
