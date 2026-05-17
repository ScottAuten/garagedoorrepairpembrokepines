import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'New Garage Door Installation Pembroke Pines FL | All Styles & Brands',
  description:
    'New garage door installation in Pembroke Pines, FL. Hurricane-rated, HOA-compliant options. All major brands. Free estimate, same-week installation. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/services/new-installation' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Installation',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Pembroke Pines', containedIn: 'Broward County, FL' },
  description: 'Professional new garage door installation in Pembroke Pines, FL. Hurricane-rated and HOA-compliant options.',
  offers: { '@type': 'Offer', priceRange: '$800 - $3500', priceCurrency: 'USD' },
}

const faqs = [
  {
    question: 'How much does new garage door installation cost in Pembroke Pines?',
    answer:
      'New garage door installation in Pembroke Pines typically costs $800–$3,500 depending on door size, material, style, and whether you need a new opener. A standard single-car steel door installed is $800–$1,500. A premium double-car carriage-house door with opener runs $2,000–$3,500+.',
  },
  {
    question: 'Do I need a hurricane-rated door in Pembroke Pines?',
    answer:
      'Florida Building Code requires wind-load rated garage doors in all of Broward County. Any door we install meets FL product approval standards. We also offer fully impact-rated doors for maximum storm protection beyond the minimum code requirement.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Standard installation of a pre-ordered door takes 4–6 hours. If we need to order your specific door, lead time is 1–3 weeks depending on the model and supplier. Doors we stock locally can often be installed within days.',
  },
  {
    question: 'Can you help me choose a door that my Silver Lakes HOA will approve?',
    answer:
      'Yes. We\'re familiar with HOA requirements across Pembroke Pines communities including Silver Lakes, Pembroke Isles, and Grand Palms. We can provide product spec sheets and assist with HOA submission before ordering.',
  },
  {
    question: 'Do you install the opener as well, or just the door?',
    answer:
      'We handle complete installation — door, springs, cables, tracks, hardware, and opener if needed. We also carry smart openers with WiFi and battery backup, which are particularly useful in South Florida during power outages.',
  },
]

export default function NewInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">New Installation</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            New Garage Door Installation in Pembroke Pines, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Ready to upgrade? We help Pembroke Pines homeowners select the right door for their home, HOA, and
            budget — then handle the full installation from removing the old door to final tuning.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">How much does new garage door installation cost in Pembroke Pines?</p>
          <p className="text-gray-700 leading-relaxed">
            New installation costs <strong>$800–$3,500+</strong> depending on door size, material, and opener. Single-car steel doors start around $800 installed. Premium double-car carriage-house doors with smart opener run $2,000–$3,500. Free estimate — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Door Styles for Pembroke Pines Homes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                name: 'Raised Panel Steel',
                price: '$800 – $1,800',
                desc: 'The most popular choice in Pembroke Pines. Durable, low-maintenance, and available in dozens of colors. Works with virtually all HOA guidelines.',
              },
              {
                name: 'Carriage-House Style',
                price: '$1,200 – $2,800',
                desc: 'The premium look for upscale communities like Silver Lakes and Pembroke Isles. Overlay or full carriage design in steel or composite.',
              },
              {
                name: 'Contemporary Flush',
                price: '$1,500 – $3,500+',
                desc: 'Clean modern lines for newer construction. Aluminum frames with glass sections or solid steel panels. Increasingly popular in Pembroke Falls.',
              },
            ].map((style) => (
              <div key={style.name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-navy mb-1">{style.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mb-2">{style.price} installed</p>
                <p className="text-gray-600 text-sm leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Hurricane-Rated Doors — Required in Broward County</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every door we install in Pembroke Pines meets Florida Building Code wind-load requirements. But code minimum is not the same as maximum protection. For homeowners in flood zones or those who want full storm confidence, we install FL-approved impact-rated doors with reinforced panels, heavier gauge steel, and wind-rated hardware throughout.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            These doors can withstand the wind loads of a Category 3 hurricane — a meaningful upgrade in a community that has seen direct hurricane impacts in the past. Many homeowners in Grand Palms and Walnut Creek have upgraded to impact-rated doors in recent years, and some insurance carriers offer premium discounts for wind-rated improvements.
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

      <CTASection heading="Ready to Upgrade? Get a Free Estimate." subheading="New garage door installation across Pembroke Pines. Hurricane-rated options available." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="All Styles. All Brands. Full Installation." subheading="Licensed and insured. HOA-compliant options. Same-week installs available." variant="navy" />
    </>
  )
}
