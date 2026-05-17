import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service | Garage Door Repair of Pembroke Pines FL',
  description: 'Terms of service for Garage Door Repair of Pembroke Pines. Read our service terms and conditions.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/terms' },
}

export default function TermsPage() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-2">1. Services</h2>
            <p>
              Garage Door Repair of Pembroke Pines provides residential and light commercial garage door repair,
              maintenance, and installation services in Pembroke Pines, FL and surrounding Broward County communities.
              Services are subject to availability, and we reserve the right to decline service at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">2. Estimates and Pricing</h2>
            <p>
              We provide written estimates before any work begins. Estimates are based on information available at
              the time of assessment. If additional issues are discovered during the repair, we will communicate
              any changes to the estimate and obtain your approval before proceeding with additional work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">3. Payment</h2>
            <p>
              Payment is due upon completion of service unless alternative arrangements have been made in advance.
              We accept cash, check, and major credit cards. Returned checks are subject to a returned check fee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">4. Warranty</h2>
            <p>
              We warranty our labor and parts for periods specified at the time of service. Warranty claims must
              be reported promptly. Warranty does not cover damage resulting from misuse, accidents, storm damage,
              or failure to perform routine maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">5. Cancellations and Rescheduling</h2>
            <p>
              We ask for reasonable notice when canceling or rescheduling appointments. Repeated no-shows may result
              in a service call fee for future appointments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">6. Limitation of Liability</h2>
            <p>
              Our liability is limited to the cost of the services provided. We are not responsible for pre-existing
              conditions, incidental damages, or losses resulting from garage door failure outside of our direct work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">7. Website Use</h2>
            <p>
              The content on this website is provided for informational purposes. Pricing ranges are estimates only
              and actual costs depend on specific conditions assessed on-site. We make no guarantees about the
              accuracy or completeness of information on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in
              Broward County, Florida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">9. Contact</h2>
            <address className="not-italic mt-2 space-y-1 text-sm">
              <p className="font-semibold">{SITE.name}</p>
              <p>{SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}</p>
              <p>
                Phone:{' '}
                <a href={`tel:${SITE.phoneRaw}`} className="text-orange-500 hover:underline">{SITE.phone}</a>
              </p>
            </address>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
