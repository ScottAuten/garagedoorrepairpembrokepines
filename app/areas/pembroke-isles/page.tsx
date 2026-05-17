import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Pembroke Isles Pembroke Pines FL | Same-Day',
  description:
    'Garage door repair in Pembroke Isles, Pembroke Pines FL. Premium service for upscale Pembroke Isles homes. Springs, openers, new installation. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/pembroke-isles' },
}

const faqs = [
  {
    question: 'Do you service premium and high-end garage doors in Pembroke Isles?',
    answer: 'Yes. We work on all residential door types including higher-end carriage-house, custom wood, and contemporary aluminum-and-glass doors common in Pembroke Isles. We carry parts for all major premium brands.',
  },
  {
    question: 'Do you offer same-day service in Pembroke Isles?',
    answer: 'Yes — same-day service is available in Pembroke Isles 7 days a week, 7 AM–8 PM. Call (754) 314-2244.',
  },
  {
    question: 'Can you help with HOA compliance for a new garage door in Pembroke Isles?',
    answer: 'Yes. We are familiar with the aesthetic standards in Pembroke Isles and can provide door samples, color swatches, and product documentation for HOA approval before any installation.',
  },
  {
    question: 'Are you insured to work in gated communities like Pembroke Isles?',
    answer: 'Yes — we are fully licensed and insured for all residential garage door work in Broward County, including gated and guard-gated communities.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'pembroke-isles')

export default function PembrokeIslesPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'pembroke-isles')!

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Pembroke Isles, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Premium garage door service for Pembroke Isles homeowners. Springs, openers, cables, and new door
              installation — same-day availability, licensed and fully insured.
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
            <Image src={neighborhood.image} alt="Garage door repair in Pembroke Isles Pembroke Pines FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Pembroke Isles?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Pembroke Isles with licensed, same-day service. We handle all door types including premium carriage-house and contemporary styles. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Serving Pembroke Isles</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pembroke Isles is one of Pembroke Pines&apos; most prestigious gated communities, featuring upscale homes on manicured lots with lake views throughout the community. The neighborhood is known for its strong HOA, high property values, and architectural standards that extend to garage door appearance and quality.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Homes in Pembroke Isles typically feature larger double-car or three-car garage configurations with premium door styles. We&apos;re experienced working in gated communities — we coordinate access, arrive professionally, and deliver the same quality of work whether the home is in Pembroke Isles or anywhere else in Pembroke Pines.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services in Pembroke Isles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Pembroke Isles &amp; Pembroke Pines</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Other Areas We Serve</h2>
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

      <CTASection heading="Premium Service for Pembroke Isles Homes" subheading="Same-day appointments. Licensed, insured, and professionally presented." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Pembroke Isles' Trusted Garage Door Experts" subheading="Same-day service. Upfront pricing. Fully licensed and insured." variant="navy" />
    </>
  )
}
