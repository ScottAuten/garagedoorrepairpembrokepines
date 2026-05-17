import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Silver Lakes Pembroke Pines FL | Fast Local Service',
  description:
    'Garage door repair in Silver Lakes, Pembroke Pines FL. Springs, openers, cable replacement & more. Same-day service for Silver Lakes homeowners. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/silver-lakes' },
}

const LOCAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  telephone: SITE.phoneRaw,
  url: 'https://garagedoorrepairpembrokepines.us',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
  },
  areaServed: [
    { '@type': 'Neighborhood', name: 'Silver Lakes', containedIn: 'Pembroke Pines, FL' },
    { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Silver Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day service in Silver Lakes and throughout Pembroke Pines, Monday through Sunday 7 AM–8 PM. Call (754) 314-2244 and we\'ll do our best to get a technician to you the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you match the HOA-approved garage door styles in Silver Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We work with Silver Lakes HOA requirements and can source doors that match the community\'s aesthetic standards — raised panel, carriage-house, and flush designs in colors and finishes that meet HOA approval. We handle the paperwork coordination if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your technicians licensed and insured for work in Pembroke Pines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are fully licensed and insured for all garage door work in Pembroke Pines and Broward County. Our technicians carry their credentials on every job.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most common garage door repair needed in Silver Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring replacement is the most common repair in Silver Lakes and across Pembroke Pines. South Florida\'s humidity and salt air accelerate spring corrosion, and springs on heavily used doors can wear out after 7–10 years. Opener repairs and cable replacement are also frequent service calls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated garage doors in Silver Lakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Florida Building Code requires wind-load rated doors in Broward County, and many Silver Lakes homeowners opt for full wind-rated impact-resistant doors for maximum protection. We install and service hurricane-rated doors that meet FL-approved product standards.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Silver Lakes?',
    answer:
      'Yes. We offer same-day service in Silver Lakes and all of Pembroke Pines, 7 days a week, 7 AM–8 PM. Call (754) 314-2244 and we\'ll dispatch a technician as quickly as possible.',
  },
  {
    question: 'Can you match Silver Lakes HOA-approved garage door styles?',
    answer:
      'Absolutely. We work with HOA requirements and can source raised-panel, carriage-house, and flush door styles in colors and finishes that meet Silver Lakes standards. We coordinate with your HOA approval process if needed.',
  },
  {
    question: 'Are your technicians licensed and insured?',
    answer:
      'Yes — fully licensed and insured for all garage door work in Pembroke Pines and Broward County. Credentials are carried on every service call.',
  },
  {
    question: 'What is the most common repair needed in Silver Lakes?',
    answer:
      "Spring replacement leads the list. South Florida's humidity and salt air accelerate spring corrosion, and springs on busy doors wear out after 7–10 years. Opener repairs and cable replacement are also frequent calls.",
  },
  {
    question: 'Do you install hurricane-rated garage doors in Silver Lakes?',
    answer:
      'Yes. Florida Building Code requires wind-load rated doors in Broward County. Many Silver Lakes homeowners choose full impact-resistant doors for maximum storm protection — we install and service all FL-approved wind-rated door products.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'silver-lakes')

export default function SilverLakesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Silver Lakes, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Silver Lakes homeowners trust us for fast, professional garage door service. Springs, openers, cables,
              off-track doors, and full new installations — same-day availability, licensed and insured technicians.
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
              src="/images/silver-lakes.png"
              alt="Garage door repair in Silver Lakes Pembroke Pines FL"
              width={480}
              height={320}
              className="rounded-xl shadow-lg w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* AEO Direct Answer */}
      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            Who repairs garage doors in Silver Lakes, Pembroke Pines?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Silver Lakes with same-day spring, opener, cable, and
            off-track repairs. We are locally based, licensed, and insured. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">
              {SITE.phone}
            </a>{' '}
            — most Silver Lakes calls are handled the same day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Serving Silver Lakes Since Day One</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Silver Lakes is one of Pembroke Pines&apos; most recognizable waterfront communities — a master-planned
            neighborhood of lakes, wide streets, and well-maintained single-family homes where curb appeal matters.
            The community&apos;s active HOA sets appearance standards that extend to garage doors, which means
            homeowners here need a garage door company that understands both the technical and aesthetic requirements
            of a high-end South Florida neighborhood.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We&apos;ve been repairing and installing garage doors for Silver Lakes homeowners long enough to know the
            community&apos;s common door models, the HOA&apos;s style preferences, and the specific challenges that
            come with lakefront humidity and salt air. When your door fails — whether it&apos;s a snapped spring at
            6 AM or an opener that won&apos;t respond on a Sunday — we&apos;re typically available the same day.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Why Silver Lakes Doors Need Special Attention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Proximity to water in Silver Lakes creates conditions that accelerate garage door wear faster than
            inland communities. The combination of high humidity, salt-laden air from the Intracoastal and Atlantic,
            and temperature cycling takes a measurable toll on:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Springs:</strong> Ungalvanized springs corrode faster here. We install galvanized springs as
              standard and recommend high-cycle (25,000-cycle) upgrades for Silver Lakes homes with double-car doors
              and high daily use.
            </li>
            <li>
              <strong>Cables:</strong> Steel lift cables develop surface rust in high-humidity environments.
              Annual inspection and lubrication extend cable life significantly. We check cables on every service call.
            </li>
            <li>
              <strong>Bottom seals and weatherstripping:</strong> South Florida&apos;s sun and heat degrade rubber
              seals faster than in northern climates. A failed bottom seal lets rain, insects, and garage-level
              humidity inside — a real issue in Silver Lakes during summer afternoon storms.
            </li>
            <li>
              <strong>Door panels:</strong> Steel doors without proper factory finishing can develop surface rust,
              especially near the bottom panels. We advise on the best panel materials (galvanized steel, aluminum,
              fiberglass) for lakefront or near-water locations.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">HOA Compliance — We Make It Easy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Silver Lakes HOA guidelines typically specify acceptable door profiles, colors, and finishes. Replacing a
            door without prior approval can result in fines and mandatory re-replacement — an expensive mistake. Our
            process for Silver Lakes HOA projects:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
            <li>Confirm your current door specifications and HOA guidelines before selecting a replacement</li>
            <li>Provide door samples, color swatches, and product spec sheets for HOA submission</li>
            <li>Schedule installation only after HOA approval is confirmed</li>
            <li>Document the installation for your HOA records</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            Popular HOA-compliant door styles we install in Silver Lakes include raised-panel steel doors in
            sandtone and almond finishes, carriage-house overlay designs in white or beige, and contemporary
            flush-panel aluminum doors for modern homes.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Hurricane Preparedness for Silver Lakes Doors</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida Building Code requires all garage doors in Broward County to meet wind-load resistance standards.
            Silver Lakes, located in the interior of Pembroke Pines, falls under the same requirements as coastal
            communities — a wind-rated door is not optional, it&apos;s code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many Silver Lakes homeowners who haven&apos;t replaced their door in the last 15 years are operating with
            pre-code doors that may not withstand a direct hurricane. We install FL-approved wind-rated doors and
            perform brace and retrofit services for existing doors that need upgraded hardware. Before hurricane season
            each year, we recommend a structural inspection of your garage door — it&apos;s the largest opening in your
            home and the point of highest hurricane vulnerability.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">All Garage Door Services in Silver Lakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Silver Lakes &amp; Pembroke Pines</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need Garage Door Service in Silver Lakes?"
        subheading="Same-day appointments available. Call now for fast, local service."
        variant="orange"
      />

      <FAQSection faqs={faqs} />

      {/* Other Neighborhoods */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">
            We Also Serve These Pembroke Pines Communities
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Fast, local garage door service across all of Pembroke Pines
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherNeighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Pembroke Pines, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Silver Lakes&apos; Trusted Garage Door Team"
        subheading="Licensed, insured, and locally based. Available 7 days a week."
        variant="navy"
      />
    </>
  )
}
