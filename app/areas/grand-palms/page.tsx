import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Grand Palms Pembroke Pines FL | Same-Day Service',
  description:
    'Garage door repair in Grand Palms, Pembroke Pines FL. Spring replacement, opener repair, new installation & more. Same-day service. Licensed. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/areas/grand-palms' },
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Grand Palms?',
    answer: 'Yes — same-day service available in Grand Palms Monday through Sunday, 7 AM–8 PM. Call (754) 314-2244.',
  },
  {
    question: 'Is Grand Palms in your service area?',
    answer: 'Yes. Grand Palms is one of our core Pembroke Pines service areas. We serve all streets and sections within Grand Palms.',
  },
  {
    question: 'Do you handle garage door installation in Grand Palms?',
    answer: 'Yes — full installation including door removal, new door, springs, cables, tracks, and opener. We can work within HOA guidelines and provide spec sheets for community approval.',
  },
  {
    question: 'What is the most common garage door repair in Grand Palms?',
    answer: 'Spring replacement is the leading service call, followed by opener repair. Grand Palms homes with active families and busy garages tend to wear through springs faster than the average — high-cycle spring upgrades are worth considering.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'grand-palms')

export default function GrandPalmsPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'grand-palms')!

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Pembroke Pines, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Grand Palms, Pembroke Pines FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Local garage door repair for Grand Palms families. Springs, openers, cables, new doors — all services
              available same day from licensed Pembroke Pines technicians.
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
            <Image src={neighborhood.image} alt="Garage door repair in Grand Palms Pembroke Pines FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who fixes garage doors in Grand Palms?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Pembroke Pines serves Grand Palms with licensed same-day service. Springs, openers, cables, off-track, and new installation. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service for Grand Palms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Grand Palms is a family-friendly Pembroke Pines community popular with active households — which means garage doors that get used heavily throughout the day. Busy families with two or more cars moving in and out multiple times daily can cycle through spring life in 5–7 years rather than the typical 7–10, making spring inspection and timely replacement especially important for Grand Palms homeowners.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We recommend high-cycle spring upgrades (25,000 cycles vs. standard 10,000) for Grand Palms homes with high daily usage. The modest additional cost pays back quickly in avoided service calls over a 10–15 year spring life vs. two standard replacement cycles in the same period.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services in Grand Palms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Grand Palms &amp; Pembroke Pines</p>
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

      <CTASection heading="Grand Palms Garage Door Service" subheading="Same-day appointments. Upfront pricing. Licensed & insured." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Fast, Local, Reliable" subheading="Grand Palms and all of Pembroke Pines. Call (754) 314-2244." variant="navy" />
    </>
  )
}
