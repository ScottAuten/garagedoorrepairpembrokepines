import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Pembroke Falls Pembroke Pines FL | Same-Day',
  description:
    'Garage door repair in Pembroke Falls, Pembroke Pines FL. Springs, openers, cables, new installation. Same-day service. Licensed & insured. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/pembroke-falls' },
}

const faqs = [
  {
    question: 'Do you offer same-day service in Pembroke Falls?',
    answer: 'Yes — same-day service is available in Pembroke Falls 7 days a week, 7 AM–8 PM. Call (754) 314-2244.',
  },
  {
    question: 'Can you match HOA-approved garage door styles in Pembroke Falls?',
    answer: 'Yes. We are familiar with HOA requirements in Pembroke Falls and can provide door samples and spec sheets for HOA approval before installation.',
  },
  {
    question: 'Do you install hurricane-rated doors in Pembroke Falls?',
    answer: 'Yes — all doors we install meet Florida Building Code wind-load requirements. We also offer fully impact-rated doors for maximum storm protection.',
  },
  {
    question: 'How quickly can you respond to an emergency in Pembroke Falls?',
    answer: 'We target same-day response for all emergency calls in Pembroke Falls received before 6 PM. Call (754) 314-2244 for current availability.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'pembroke-falls')

export default function PembrokeFallsPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'pembroke-falls')!

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Pembroke Falls, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Expert garage door repair for Pembroke Falls homeowners. All services — springs, openers, cables,
              off-track, new installation — with same-day availability and upfront pricing.
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
            <Image src={neighborhood.image} alt="Garage door repair in Pembroke Falls Pembroke Pines FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who services garage doors in Pembroke Falls?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Pembroke Falls with licensed, same-day spring, opener, cable, and installation service. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> — most calls scheduled same day.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Pembroke Falls</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pembroke Falls is a well-established gated community in the northern part of Pembroke Pines, known for its large single-family homes, resort-style amenities, and strong HOA standards. Homes in Pembroke Falls feature predominantly double-car garages with higher-end door styles — carriage-house designs and raised-panel steel doors are common throughout the community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We regularly service Pembroke Falls for spring replacement, opener upgrades, and full door installations. The community&apos;s larger and heavier doors — common on the 3,000+ square foot homes that line Pembroke Falls Drive — require correctly sized torsion springs and properly calibrated cable drums to operate safely. We bring the right parts on the first visit.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services in Pembroke Falls</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Pembroke Falls &amp; Pembroke Pines</p>
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

      <CTASection heading="Garage Door Help in Pembroke Falls?" subheading="Same-day service. Upfront pricing. Licensed & insured." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Pembroke Falls' Trusted Garage Door Team" subheading="Local, licensed, same-day service across Pembroke Pines." variant="navy" />
    </>
  )
}
