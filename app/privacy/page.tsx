import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Garage Door Repair of Pembroke Pines FL',
  description: 'Privacy policy for Garage Door Repair of Pembroke Pines. Learn how we collect and use your information.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-2">1. Information We Collect</h2>
            <p>
              When you contact us through our website, phone, or contact form, we may collect your name, phone number,
              email address, and a description of your garage door issue. We use this information solely to respond to
              your service inquiry and to schedule appointments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your service requests and inquiries</li>
              <li>Schedule and confirm appointments</li>
              <li>Follow up on completed work</li>
              <li>Improve our services and customer experience</li>
            </ul>
            <p className="mt-2">We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">3. Contact Form</h2>
            <p>
              Our contact form is processed through Formspree, a third-party form handling service. By submitting
              the form, your information is transmitted to Formspree in accordance with their privacy policy, and then
              forwarded to us. We use this information only to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">4. Cookies and Analytics</h2>
            <p>
              This website may use basic analytics tools to understand how visitors find and use our site. This data
              is aggregated and anonymized — it is not linked to individual users or personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">5. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal information. However, no transmission of data
              over the internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">6. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly collect personal information
              from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated
              date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-2">8. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, contact us:
            </p>
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
