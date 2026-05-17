'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Garage Door Repair of Pembroke Pines</h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Call for the fastest response. For non-urgent estimates, fill out the form below and we&apos;ll follow up
            within a few hours.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy mb-1">Phone — Fastest Response</p>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
                      {SITE.phone}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">{SITE.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy mb-1">Address</p>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      {SITE.address}<br />
                      {SITE.city}, {SITE.state} {SITE.zip}
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy mb-1">Hours</p>
                    <p className="text-gray-600 text-sm">{SITE.hours}</p>
                    <p className="text-gray-500 text-sm mt-1">Same-day service available</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-bold text-navy mb-3">Services</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="text-xs bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-navy px-3 py-1.5 rounded-full transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Request a Free Estimate</h2>
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <p className="text-3xl mb-3">✅</p>
                  <p className="font-bold text-green-800 text-lg mb-2">Message Sent!</p>
                  <p className="text-green-700 text-sm">
                    We&apos;ll follow up within a few hours. For immediate service, call{' '}
                    <a href={`tel:${SITE.phoneRaw}`} className="font-semibold underline">{SITE.phone}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="(754) 000-0000"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                    <select id="service" name="service"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white">
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Describe the Issue *</label>
                    <textarea id="message" name="message" required rows={4}
                      placeholder="What's happening with your garage door? When did it start?"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      Something went wrong. Please call us at{' '}
                      <a href={`tel:${SITE.phoneRaw}`} className="font-semibold">{SITE.phone}</a>.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                    {status === 'sending' ? 'Sending...' : 'Send My Request'}
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    For immediate service, call{' '}
                    <a href={`tel:${SITE.phoneRaw}`} className="text-orange-500 font-semibold">{SITE.phone}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
