'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar — phone prominent */}
      <div className="bg-navy text-white text-sm py-1.5 text-center">
        <a href={`tel:${SITE.phoneRaw}`} className="font-semibold hover:text-orange-300 transition-colors">
          📞 Same-Day Service Available — Call Now: {SITE.phone}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-navy font-bold text-lg leading-tight">
              Garage Door Repair<br className="hidden sm:block" />
              <span className="text-orange-500"> of Pembroke Pines</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="nav-link flex items-center gap-1 py-4">
                Services <span className="text-xs">▼</span>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100 z-50">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-navy hover:text-white transition-colors">
                      {s.icon} {s.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link href="/services" className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="nav-link flex items-center gap-1 py-4">
                Areas <span className="text-xs">▼</span>
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg py-2 w-52 border border-gray-100 z-50">
                  {NEIGHBORHOODS.map((n) => (
                    <Link key={n.slug} href={`/areas/${n.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-navy hover:text-white transition-colors">
                      {n.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link href="/areas" className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors">
                      View All Areas →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>

            <a href={`tel:${SITE.phoneRaw}`}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap">
              {SITE.phone}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-3">
            <a href={`tel:${SITE.phoneRaw}`}
              className="block w-full text-center bg-orange-500 text-white font-bold py-3 rounded-lg mb-3 text-lg">
              Call Now: {SITE.phone}
            </a>
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-2 pt-2">Services</p>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-1.5 text-sm text-gray-700 hover:text-navy">
                  {s.name}
                </Link>
              ))}
              <Link href="/services" onClick={() => setMobileOpen(false)}
                className="block px-2 py-1.5 text-sm font-semibold text-navy">
                All Services →
              </Link>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-2 pt-3">Areas</p>
              {NEIGHBORHOODS.map((n) => (
                <Link key={n.slug} href={`/areas/${n.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-1.5 text-sm text-gray-700 hover:text-navy">
                  {n.name}
                </Link>
              ))}
              <Link href="/areas" onClick={() => setMobileOpen(false)}
                className="block px-2 py-1.5 text-sm font-semibold text-navy">
                All Areas →
              </Link>
              <div className="border-t border-gray-100 pt-2 mt-2 space-y-1">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-2 py-1.5 text-sm text-gray-700">About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-2 py-1.5 text-sm text-gray-700">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
