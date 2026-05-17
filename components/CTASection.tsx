import Link from 'next/link'
import { SITE } from '@/lib/constants'

interface CTASectionProps {
  heading?: string
  subheading?: string
  variant?: 'orange' | 'navy'
}

export default function CTASection({
  heading = 'Need Garage Door Help Today?',
  subheading = 'Same-day service available 7 days a week across Pembroke Pines.',
  variant = 'orange',
}: CTASectionProps) {
  const bg = variant === 'orange' ? 'bg-orange-500' : 'bg-navy'

  return (
    <section className={`${bg} py-12`}>
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-lg mb-6 opacity-90">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${SITE.phoneRaw}`}
            className={`${variant === 'orange' ? 'bg-white text-orange-600' : 'bg-orange-500 text-white'} font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity`}>
            Call Now: {SITE.phone}
          </a>
          <Link href="/contact"
            className={`${variant === 'orange' ? 'border-2 border-white text-white' : 'border-2 border-white text-white'} font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-navy transition-colors`}>
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
