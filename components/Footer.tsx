import Link from 'next/link'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* NAP block */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3 text-orange-400">{SITE.name}</h3>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p>{SITE.address}</p>
              <p>{SITE.city}, {SITE.state} {SITE.zip}</p>
              <p>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-orange-400 transition-colors font-semibold">
                  {SITE.phone}
                </a>
              </p>
              <p className="text-gray-400 text-xs mt-2">{SITE.hours}</p>
            </address>
            <a href={`tel:${SITE.phoneRaw}`}
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
              Call Now
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-3">Our Services</h4>
            <ul className="space-y-1.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-3">Areas We Serve</h4>
            <ul className="space-y-1.5">
              {NEIGHBORHOODS.map((n) => (
                <li key={n.slug}>
                  <Link href={`/areas/${n.slug}`}
                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-3">Company</h4>
            <ul className="space-y-1.5">
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 Garage Door Repair of Pembroke Pines. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
