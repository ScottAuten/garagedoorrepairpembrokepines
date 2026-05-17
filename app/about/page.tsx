import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | Garage Door Repair of Pembroke Pines FL',
  description:
    'Licensed garage door company serving Pembroke Pines and Broward County since 2010. Meet our local team. Licensed, insured, and committed to same-day service. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Garage Door Repair of Pembroke Pines
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A local, licensed garage door company serving Pembroke Pines and Broward County since {SITE.founded}.
            Fast response, honest pricing, and technicians who know South Florida garage doors.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Garage Door Repair of Pembroke Pines is a locally owned and operated garage door service company
                serving homeowners throughout Pembroke Pines and Broward County. We were founded in {SITE.founded}
                with a straightforward mission: provide fast, reliable, and fairly priced garage door service to
                the South Florida communities we live and work in.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years we&apos;ve built our reputation one repair at a time — showing up on time, diagnosing
                honestly, and completing the job correctly on the first visit. We serve Silver Lakes, Chapel Trail,
                Pembroke Falls, Pembroke Isles, Grand Palms, Walnut Creek, and every neighborhood in between.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are fully licensed and insured for all residential and light commercial garage door work in
                Broward County. Every technician on our team is background-checked, trained on current Florida
                Building Code requirements, and experienced with the specific climate challenges — humidity, salt air,
                hurricane preparedness — that South Florida garage doors face.
              </p>

              <h2 className="text-2xl font-bold text-navy mb-4">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe in giving homeowners the information they need to make good decisions — not upselling
                parts that aren&apos;t needed or recommending replacement when repair is the right call. When we arrive,
                we inspect the full door system, identify the root cause of the problem, and give you a written quote
                before any work begins. No surprises. No pressure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Same-day service is our standard, not a premium add-on. If you call before noon on most days, we
                can typically get a technician to you by late afternoon. We operate 7 days a week from 7 AM to 8 PM
                to accommodate the schedules of working Pembroke Pines families.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-80">
              <Image
                src="/images/garage-door-home-3.png"
                alt="Garage door repair technician Pembroke Pines FL"
                width={400}
                height={500}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Why Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏅',
                title: 'Licensed & Insured',
                body: 'Fully licensed for all Broward County garage door work. We carry liability insurance on every job — protecting you and your property.',
              },
              {
                icon: '📅',
                title: 'Same-Day Service',
                body: 'Available 7 days a week, 7 AM–8 PM. Most calls scheduled the same day. Emergency response when your situation can\'t wait.',
              },
              {
                icon: '💰',
                title: 'Upfront Pricing',
                body: 'Written quote before we touch anything. The price you approve is the price you pay — no surprise line items at the end.',
              },
              {
                icon: '🔧',
                title: 'Fully Stocked Trucks',
                body: 'Springs, cables, rollers, remotes, logic boards — we carry common parts so most repairs are completed in a single visit.',
              },
              {
                icon: '🌀',
                title: 'Florida Climate Experts',
                body: 'We use galvanized hardware and moisture-resistant materials as standard — not upgrades — because South Florida humidity demands it.',
              },
              {
                icon: '🏠',
                title: 'HOA-Ready',
                body: 'Familiar with HOA requirements across Pembroke Pines communities. We provide documentation and coordinate with community standards.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP / Contact Block */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <p className="text-xl font-bold text-navy mb-1">{SITE.name}</p>
            <p className="text-gray-600 mb-1">{SITE.address}</p>
            <p className="text-gray-600 mb-3">{SITE.city}, {SITE.state} {SITE.zip}</p>
            <a href={`tel:${SITE.phoneRaw}`} className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
              {SITE.phone}
            </a>
            <p className="text-gray-500 text-sm mt-3">{SITE.hours}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a href={`tel:${SITE.phoneRaw}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-lg transition-colors">
                Call Now
              </a>
              <Link href="/contact" className="bg-navy hover:bg-blue-900 text-white font-bold py-3 px-7 rounded-lg transition-colors">
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Schedule Service?"
        subheading="Same-day appointments available 7 days a week across all of Pembroke Pines."
        variant="navy"
      />
    </>
  )
}
