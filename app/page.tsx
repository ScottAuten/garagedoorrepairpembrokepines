import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair in Pembroke Pines, FL | Same-Day Service',
  description:
    'Need garage door repair in Pembroke Pines, FL? Licensed technicians, same-day service, free estimates. Serving Silver Lakes, Chapel Trail & all Broward County. Call (754) 314-2244.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'My garage door made a loud bang and won\'t open — what happened?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loud bang followed by a door that won\'t open almost always means a broken torsion spring. Torsion springs are wound tightly above the door and store the energy needed to lift it. When one snaps, it releases with a loud crack and the door becomes too heavy to lift safely — by you or the opener. Do not attempt to operate the door. Call us for same-day spring replacement in Pembroke Pines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use my garage door with a broken spring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — never operate a garage door with a broken torsion or extension spring. The springs counterbalance the full weight of the door, which can be 200–400 lbs. Without functional springs, the door can fall suddenly and without warning, causing serious injury or crushing your vehicle. Forcing the opener to lift the door without spring support can also burn out the opener motor. Call us immediately for emergency spring repair.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you get to Pembroke Pines for an emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer same-day service throughout Pembroke Pines, 7 days a week from 7 AM to 8 PM. In most cases, a technician can arrive within a few hours of your call. We prioritize emergency situations — stuck doors, broken springs, and doors that won\'t close are treated as urgent calls. Call (754) 314-2244 and we\'ll give you an estimated arrival window right away.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my HOA approve my new garage door?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Pembroke Pines HOAs — including Silver Lakes, Chapel Trail, Pembroke Falls, and Grand Palms — require written pre-approval before replacing a garage door. HOAs typically specify allowable colors, panel styles, and materials. Our technicians are familiar with the common requirements across Pembroke Pines communities and can walk you through the approval process before we order your door, saving you from costly rejections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my garage door reverse right before it closes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is almost always a photoelectric sensor problem. The two sensors at the base of your door tracks send an invisible beam across the opening — if anything breaks that beam, the door reverses as a safety measure. In South Florida, geckos and anoles love to perch on sensor eyes, blocking the beam. Afternoon sunlight hitting sensors directly can also interfere with the signal. Misalignment, dirt buildup, and humidity can cause the same problem. We clean, realign, and replace sensors quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do garage door springs last in South Florida\'s humidity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard torsion springs are rated for 10,000 cycles — roughly 7 to 10 years under normal use. But South Florida\'s salt air, high humidity, and heat significantly accelerate spring corrosion and metal fatigue. Homeowners in Pembroke Pines often see spring failure in 5 to 7 years with standard springs. We recommend galvanized or zinc-coated springs rated for coastal climates, which can add years of life. High-cycle springs (25,000+ cycles) are also available for high-traffic garages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lizards really cause my garage door sensor to malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and it\'s one of the most common sensor complaints we hear in Pembroke Pines. Florida\'s geckos, green anoles, and brown anoles are attracted to warm surfaces and the glow of sensor LEDs. When a lizard sits on or directly in front of a sensor eye, it breaks the photoelectric beam and triggers the auto-reverse safety feature. The fix is usually as simple as gently clearing the sensor and checking for obstructions. If the problem keeps recurring, we can reposition or replace the sensors.',
      },
    },
  ],
}

const homepageFAQs = [
  {
    question: "My garage door made a loud bang and won't open — what happened?",
    answer: "A loud bang followed by a door that won't open almost always means a broken torsion spring. When one snaps, it releases with a loud crack and the door becomes too heavy to lift safely. Do not attempt to operate the door. Call us for same-day spring replacement in Pembroke Pines.",
  },
  {
    question: 'Is it safe to use my garage door with a broken spring?',
    answer: "No — never operate a garage door with a broken torsion or extension spring. The springs counterbalance the full weight of the door (200–400 lbs). Without functional springs, the door can fall suddenly, causing serious injury or crushing your vehicle. Call us immediately for emergency spring repair.",
  },
  {
    question: 'How quickly can you get to Pembroke Pines for an emergency?',
    answer: "We offer same-day service throughout Pembroke Pines, 7 days a week from 7 AM to 8 PM. In most cases, a technician arrives within a few hours. We prioritize emergency situations — stuck doors, broken springs, and doors that won't close are treated as urgent calls.",
  },
  {
    question: 'Will my HOA approve my new garage door?',
    answer: "Many Pembroke Pines HOAs — including Silver Lakes, Chapel Trail, Pembroke Falls, and Grand Palms — require written pre-approval before replacing a garage door. Our technicians know the common requirements across Pembroke Pines communities and can walk you through the approval process before we order your door.",
  },
  {
    question: 'Why does my garage door reverse right before it closes?',
    answer: "This is almost always a photoelectric sensor problem. In South Florida, geckos and anoles love to perch on sensor eyes, breaking the beam and triggering the auto-reverse. Afternoon sunlight, misalignment, and humidity buildup cause the same issue. We clean, realign, and replace sensors quickly.",
  },
  {
    question: "How long do garage door springs last in South Florida's humidity?",
    answer: "Standard torsion springs are rated for 10,000 cycles — roughly 7 to 10 years. But South Florida's salt air, humidity, and heat significantly accelerate spring corrosion. Pembroke Pines homeowners often see spring failure in 5 to 7 years. We recommend galvanized or zinc-coated springs rated for coastal climates.",
  },
  {
    question: 'Can lizards really cause my garage door sensor to malfunction?',
    answer: "Yes — and it's one of the most common sensor complaints in Pembroke Pines. Florida's geckos and anoles are attracted to the warm surface and LED glow of sensor eyes. When one sits in front of a sensor, it breaks the photoelectric beam and triggers the auto-reverse. Usually a quick clear fixes it — if the problem recurs, we can reposition the sensors.",
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[560px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/garage-door-hero.png"
            alt="Garage door repair technician servicing a home in Pembroke Pines, FL"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Garage Door Repair in<br />Pembroke Pines, FL
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-95 font-medium">
            Broken spring? Door off track? We fix it same day.
          </p>
          <p className="text-base md:text-lg mb-8 opacity-80">
            Serving Silver Lakes, Chapel Trail, Pembroke Falls &amp; All of West Broward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">
              Call Now: {SITE.phone}
            </a>
            <Link href="/contact"
              className="bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">
              Get a Free Estimate
            </Link>
          </div>
          {/* Improvement 2: Hero trust badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { icon: '⚡', label: 'Same-Day Service' },
              { icon: '🛡️', label: 'Licensed & Insured' },
              { icon: '⭐', label: '15+ Years Experience' },
              { icon: '🔧', label: 'Free Estimates' },
            ].map((b) => (
              <span key={b.label}
                className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy text-white py-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '⚡', label: 'Same-Day Service Available' },
              { icon: '🛡️', label: 'Licensed & Insured Technicians' },
              { icon: '📅', label: `Serving Pembroke Pines Since ${SITE.founded}` },
              { icon: '💰', label: 'Free Estimates on All Repairs' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-sm font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO direct answer block */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-navy rounded-r-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-3">
              Expert Garage Door Repair Throughout Pembroke Pines, FL
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Garage Door Repair of Pembroke Pines is a licensed, locally operated garage door company serving homeowners
              across Broward County since 2010. We repair broken springs, malfunctioning openers, off-track doors, worn
              cables, and faulty sensors — typically the same day you call. Our technicians carry parts for every major
              brand including LiftMaster, Chamberlain, and Genie, so most repairs are completed in a single visit.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              South Florida&apos;s heat, humidity, and salt air are uniquely hard on garage door hardware. Galvanized cables
              corrode faster than in drier climates. Torsion springs weaken sooner. Nylon rollers expand and bind in
              summer heat. Our technicians understand the South Florida climate and recommend hardware designed to last
              in Broward County conditions — not just generic national-brand recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading text-center">Our Garage Door Services</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From urgent spring replacements to complete new door installations, our licensed technicians handle every type
            of garage door problem across all of Pembroke Pines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all group flex sm:flex-col items-start sm:items-center gap-3 sm:gap-0 sm:text-center">
                <div className="text-3xl sm:mb-2 flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-navy group-hover:text-orange-500 transition-colors text-sm mb-1">{s.name}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/services" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              View All Garage Door Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTASection
        heading="Garage Door Problem? Call Us Today."
        subheading="Same-day service available across Pembroke Pines, 7 days a week."
        variant="orange"
      />

      {/* About snippet with image */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading">Pembroke Pines' Trusted Garage Door Team</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since 2010, our technicians have repaired thousands of garage doors across Pembroke Pines and the greater
                Broward County area. We&apos;re not a national franchise — we&apos;re a local team that knows the specific
                challenges of South Florida homeownership. From the HOA regulations in Silver Lakes and Chapel Trail to the
                hurricane-rated door requirements common throughout Broward County, we bring local expertise that national
                call centers simply can&apos;t match.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every technician on our team is licensed and insured in the state of Florida. We work on all major garage
                door brands — LiftMaster, Chamberlain, Genie, Amarr, Clopay, and Wayne Dalton — and we stock the most
                common replacement parts on our service vehicles so your door is repaired on the first visit whenever
                possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Florida&apos;s climate demands quality hardware. We recommend galvanized springs and stainless steel cables
                specifically designed for coastal environments. In communities like Pembroke Falls, Grand Palms, and Walnut
                Creek, where HOAs maintain high standards, getting the right door and the right hardware the first time
                matters.
              </p>
              <div className="flex gap-4">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
                <Link href="/about" className="btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/garage-door-home-3.png"
                alt="Garage door repair technician working on a residential door in Pembroke Pines, FL"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/garage-door-home-2.png"
                alt="Before and after garage door repair — Pembroke Pines, FL"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-heading">The South Florida Difference — Rust, Humidity &amp; Salt Air Destroy Garage Doors. We Restore Them.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Florida&apos;s coastal climate is uniquely harsh on garage door hardware. Salt air corrodes springs and
                cables. Humidity warps panels and seals. Heat causes rollers to bind. Our technicians use galvanized and
                stainless hardware specifically rated for South Florida conditions — not generic parts that fail within a year.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our technicians don&apos;t just patch problems. We perform a full safety inspection on every visit —
                checking the counterbalance system, testing the photoelectric sensors and safety reverse function,
                lubricating the track and rollers, and inspecting the bottom seal and weatherstripping for Florida storm
                readiness. You get a door that works right and is safe for your family.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you&apos;re in a sectional door home in Pembroke Isles, a roll-up commercial door on Pines Blvd,
                or a newer construction in Chapel Trail, our work is guaranteed. We explain exactly what needs repair and
                why, provide honest pricing before we start, and don&apos;t leave until you&apos;re satisfied.
              </p>
              <Link href="/contact" className="btn-primary">Schedule Same-Day Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods grid */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-heading text-center">Serving All Pembroke Pines Communities</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From upscale waterfront homes in Silver Lakes to the golf community at Grand Palms, our technicians serve
            every neighborhood across Pembroke Pines.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {NEIGHBORHOODS.map((n) => (
              <Link key={n.slug} href={`/areas/${n.slug}`}
                className="group relative h-44 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={n.image}
                  alt={`Garage door repair in ${n.name}, Pembroke Pines FL`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-3">
                  <span className="font-bold text-lg">{n.name}</span>
                  <span className="text-xs opacity-80 mt-1">Pembroke Pines, FL</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/areas" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Florida-specific section */}
      <section className="py-14 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-heading text-center">Why Pembroke Pines Homeowners Need a LOCAL Garage Door Expert</h2>
          <p className="text-center text-gray-600 text-lg mb-2">National call centers don&apos;t know South Florida. We do.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: '☀️',
                title: 'Heat and Humidity',
                body: "Pembroke Pines averages over 60 inches of rainfall and brutal summer humidity. Steel parts corrode faster, nylon rollers expand and cause binding, and rubber bottom seals degrade quickly. We use hardware rated for South Florida's coastal climate.",
              },
              {
                icon: '🌀',
                title: 'Hurricane Wind Load Requirements',
                body: 'Broward County requires garage doors to meet Florida Wind Load Standards. Many Pembroke Pines communities require Miami-Dade NOA approved products. Our technicians install hurricane-rated sectional doors that meet or exceed these requirements.',
              },
              {
                icon: '🦎',
                title: 'Lizards & Sensor Interference',
                body: "Florida's geckos and anoles love to perch on garage door sensor eyes — blocking the photoelectric beam and triggering the auto-reverse feature. If your door stops and reverses for no apparent reason, a lizard may be the culprit. We'll clean and realign your sensors.",
              },
              {
                icon: '🏘️',
                title: 'HOA Pre-Approval Requirements',
                body: 'Silver Lakes, Chapel Trail, Pembroke Falls, Grand Palms, and other community HOAs often require written pre-approval before you replace a garage door. We know the common requirements and can help you avoid HOA violations before ordering a new door.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homepageFAQs} />

      {/* Final CTA */}
      <CTASection
        heading="Garage Door Emergency in Pembroke Pines? We're Ready."
        subheading="Same-day service. Licensed & insured. Free estimates. Call (754) 314-2244 now — we answer 7 days a week."
        variant="navy"
      />
    </>
  )
}
