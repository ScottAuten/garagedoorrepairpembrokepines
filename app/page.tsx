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
      name: 'How quickly can you repair my garage door in Pembroke Pines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer same-day garage door repair service throughout Pembroke Pines and surrounding Broward County communities. In most cases, our licensed technicians can arrive the same day you call, 7 days a week from 7 AM to 8 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do garage door springs last in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Florida's high humidity and salt air accelerate corrosion on torsion and extension springs. While garage door springs are typically rated for 10,000 cycles (7–10 years of normal use), South Florida homeowners often see springs fail sooner due to the coastal climate. Using galvanized or zinc-coated springs can extend spring life significantly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a hurricane-rated garage door in Pembroke Pines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many communities in Broward County, including gated neighborhoods like Pembroke Falls and Silver Lakes, require garage doors to meet minimum wind load ratings. Homes built after the 2002 Florida Building Code updates are especially likely to need Miami-Dade NOA approved products. We install hurricane-impact doors and can help you determine what wind load rating applies to your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my garage door reverse before it fully closes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This is usually a photoelectric sensor issue. The two sensors at the base of your garage door tracks must be perfectly aligned and unobstructed. In South Florida, geckos and lizards commonly block sensor eyes, triggering the auto-reverse safety feature. Dirt, humidity, and direct afternoon sunlight can also cause sensor interference. We diagnose and repair sensor issues quickly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use my garage door if a spring is broken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — never attempt to operate a garage door with a broken torsion or extension spring. The springs counterbalance the full weight of the door (often 200–400 lbs). Without functional springs, the door is unsafe and can fall suddenly, causing serious injury or damage to your vehicle. Call us immediately for same-day spring replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does garage door repair cost in Pembroke Pines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repair costs vary depending on the type of service. Spring replacement typically runs $150–$500 in Pembroke Pines. Opener repair or replacement ranges from $150–$600 including parts and labor. Cable replacement typically costs $100–$250. We provide free estimates on all repairs before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do HOAs in Pembroke Pines regulate garage door replacements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — many Pembroke Pines HOAs, including those in Silver Lakes, Chapel Trail, Pembroke Falls, and Grand Palms, require pre-approval before replacing a garage door. Your HOA may have specific requirements for door color, panel style, and material. Our technicians are familiar with common HOA guidelines across Pembroke Pines and can advise you before ordering a new door.',
      },
    },
  ],
}

const homepageFAQs = [
  {
    question: 'How quickly can you repair my garage door in Pembroke Pines?',
    answer: 'We offer same-day garage door repair service throughout Pembroke Pines and surrounding Broward County communities. In most cases, our licensed technicians can arrive the same day you call, 7 days a week from 7 AM to 8 PM.',
  },
  {
    question: 'How long do garage door springs last in Florida?',
    answer: "Florida's high humidity and salt air accelerate corrosion on torsion and extension springs. While garage door springs are typically rated for 10,000 cycles (7–10 years of normal use), South Florida homeowners often see springs fail sooner due to the coastal climate. Galvanized or zinc-coated springs can extend spring life significantly.",
  },
  {
    question: 'Do I need a hurricane-rated garage door in Pembroke Pines?',
    answer: 'Many communities in Broward County require garage doors to meet minimum wind load ratings. Homes built after 2002 Florida Building Code updates are especially likely to need Miami-Dade NOA approved products. We install hurricane-impact doors and can determine what rating applies to your property.',
  },
  {
    question: 'Why does my garage door reverse before it fully closes?',
    answer: 'This is usually a photoelectric sensor issue. In South Florida, geckos and lizards commonly block sensor eyes, triggering the auto-reverse safety feature. Dirt, humidity, and direct afternoon sunlight can also cause sensor interference. We diagnose and repair sensor issues quickly.',
  },
  {
    question: 'Is it safe to use my garage door if a spring is broken?',
    answer: 'No — never attempt to operate a garage door with a broken torsion or extension spring. The springs counterbalance the full weight of the door (200–400 lbs). Without functional springs, the door is unsafe and can fall suddenly. Call us immediately for same-day spring replacement.',
  },
  {
    question: 'How much does garage door repair cost in Pembroke Pines?',
    answer: 'Spring replacement typically runs $150–$500. Opener repair or replacement ranges from $150–$600 including parts and labor. Cable replacement typically costs $100–$250. We provide free estimates on all repairs before any work begins.',
  },
  {
    question: 'Do HOAs in Pembroke Pines regulate garage door replacements?',
    answer: 'Yes — many Pembroke Pines HOAs require pre-approval before replacing a garage door, with specific requirements for door color, panel style, and material. Our technicians are familiar with common HOA guidelines across Pembroke Pines and can advise you before ordering a new door.',
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
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Fast, Affordable &amp; Reliable — Serving Silver Lakes, Chapel Trail,<br className="hidden md:block" />
            Pembroke Falls &amp; All of West Broward
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-navy group-hover:text-orange-500 transition-colors text-sm">{s.name}</h3>
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
              <h2 className="section-heading">See the Difference We Make</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A properly functioning garage door does more than keep your car safe — it protects your family, your
                belongings, and adds real value to your home. When a torsion spring snaps, a cable frays, or an opener
                motor fails, the door becomes a liability.
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
          <h2 className="section-heading text-center">Why South Florida Garage Doors Need Special Attention</h2>
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
        heading="Ready to Fix Your Garage Door?"
        subheading="Free estimates. Same-day service. Licensed & insured across Pembroke Pines and Broward County."
        variant="navy"
      />
    </>
  )
}
