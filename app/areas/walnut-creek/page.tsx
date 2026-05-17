import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Walnut Creek Pembroke Pines FL | Same-Day Service',
  description:
    'Garage door repair in Walnut Creek, Pembroke Pines FL. Springs, openers, off-track repair, new installation. Same-day service. Licensed & insured. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/walnut-creek' },
}

const faqs = [
  {
    question: 'Do you serve Walnut Creek in Pembroke Pines?',
    answer: 'Yes — Walnut Creek is within our core Pembroke Pines service area. Same-day service available 7 days a week, 7 AM–8 PM. Call (754) 314-2244.',
  },
  {
    question: 'What garage door services do you offer in Walnut Creek?',
    answer: 'We provide all garage door services in Walnut Creek: spring replacement, opener repair and installation, cable replacement, off-track repair, roller replacement, sensor repair, emergency service, and full new door installation.',
  },
  {
    question: 'Are you licensed for work in Broward County?',
    answer: 'Yes — fully licensed and insured for all garage door repair and installation work in Pembroke Pines and throughout Broward County.',
  },
  {
    question: 'Do you replace garage doors in Walnut Creek that need hurricane upgrades?',
    answer: 'Yes. We install wind-rated and impact-resistant garage doors that meet Florida Building Code requirements. Many Walnut Creek homeowners have upgraded to full impact doors in recent years for additional storm protection.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'walnut-creek')

export default function WalnutCreekPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'walnut-creek')!

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Walnut Creek, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fast, licensed garage door service for Walnut Creek homeowners. Springs, openers, cables, off-track
              repair, and new installation — same-day appointments available.
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
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
            <Image src={neighborhood.image} alt="Garage door repair in Walnut Creek Pembroke Pines FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Walnut Creek, Pembroke Pines?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Walnut Creek with licensed, same-day service. All services including springs, openers, cables, and new installation. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Repair in Walnut Creek</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Walnut Creek is a well-maintained Pembroke Pines community featuring established single-family homes in the central and eastern portions of the city. Homes here range from move-in-ready starter homes to larger properties, and garage door styles vary considerably — we service everything from standard 9x7 single-car doors to oversized 18x8 double-car configurations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Like all Pembroke Pines neighborhoods, Walnut Creek contends with South Florida&apos;s garage door challenges: humidity-driven spring corrosion, UV degradation of rubber seals and bottom weather strips, and hurricane preparedness requirements. We bring the right parts for most common repairs on the first visit, keeping downtime to a minimum.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Walnut Creek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Walnut Creek &amp; Pembroke Pines</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Other Pembroke Pines Areas We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherNeighborhoods.map((n) => (
              <Link key={n.slug} href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Walnut Creek Garage Door Service" subheading="Same-day appointments. Upfront pricing. Licensed & insured." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Local, Fast, and Fully Insured" subheading="Serving Walnut Creek and all of Pembroke Pines. Call (754) 314-2244." variant="navy" />
    </>
  )
}
