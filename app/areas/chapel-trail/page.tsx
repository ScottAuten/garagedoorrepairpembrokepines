import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Chapel Trail Pembroke Pines FL | Same-Day Service',
  description:
    'Garage door repair in Chapel Trail, Pembroke Pines FL. Springs, openers, cables & more. Same-day service available. Licensed & insured. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/chapel-trail' },
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Chapel Trail?',
    answer: 'Yes — same-day service is available in Chapel Trail 7 days a week, 7 AM–8 PM. Call (754) 314-2244 for an appointment.',
  },
  {
    question: 'What is the most common garage door issue in Chapel Trail?',
    answer: 'Spring replacement leads the list in Chapel Trail. The community\'s proximity to the Everglades creates consistently high humidity that accelerates spring corrosion. We install galvanized springs as standard for all Chapel Trail homes.',
  },
  {
    question: 'Are you familiar with Chapel Trail HOA guidelines?',
    answer: 'Yes. We work with HOA communities throughout Pembroke Pines and can help you choose replacement doors or colors that meet Chapel Trail\'s standards. We provide product spec sheets for HOA submission if needed.',
  },
  {
    question: 'Do you install hurricane-rated doors in Chapel Trail?',
    answer: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. We install FL-approved doors that meet and exceed code requirements, including fully impact-rated options for maximum storm protection.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'chapel-trail')

export default function ChapelTrailPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'chapel-trail')!

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Chapel Trail, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fast, professional garage door repair for Chapel Trail homeowners. Springs, openers, cables, off-track
              doors — same-day service, licensed and insured.
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
            <Image src={neighborhood.image} alt="Garage door repair in Chapel Trail Pembroke Pines FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Chapel Trail?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Chapel Trail with same-day spring, opener, cable, and off-track repairs. Licensed, insured, locally based. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>{' '}
            for same-day service.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Chapel Trail</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chapel Trail is one of Pembroke Pines&apos; larger master-planned communities, featuring a mix of single-family homes and townhouses across a well-landscaped western corridor of the city. The community sits adjacent to the Everglades buffer, which means consistently high ambient humidity — a factor that directly affects garage door spring and cable lifespan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Homeowners in Chapel Trail frequently contact us for spring replacement, where ungalvanized springs have corroded prematurely due to moisture exposure. We install galvanized springs as standard — not an upgrade — and treat all springs with lithium grease at installation to extend service life in Chapel Trail&apos;s conditions.
          </p>
          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Chapel Trail</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Chapel Trail &amp; Pembroke Pines</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-4">Other Pembroke Pines Communities We Serve</h2>
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

      <CTASection heading="Need Garage Door Service in Chapel Trail?" subheading="Same-day appointments available. Call now." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Chapel Trail's Local Garage Door Team" subheading="Licensed, insured, same-day service." variant="navy" />
    </>
  )
}
