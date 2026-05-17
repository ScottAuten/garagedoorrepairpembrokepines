import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Garage Door Repair of Pembroke Pines FL',
  description:
    'Contact Garage Door Repair of Pembroke Pines. Call (754) 314-2244 for same-day service or submit our online form for a free estimate. Serving all Pembroke Pines neighborhoods.',
  alternates: { canonical: 'https://garagedoorrepairpembrokepines.us/contact' },
}

export default function ContactPage() {
  return <ContactForm />
}
