'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Contact() {
  const email = 'arielandmeira@gmail.com'
  const phone = '+972 502188228'

  return (
    <section
      id="contact"
      className="section-padding bg-wheat-100"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-evergreen-900 text-center mb-6"
          >
            Contact
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-stone-700 text-lg mb-12 leading-relaxed"
          >
            We&apos;d love to hear from you! For booking inquiries, collaborations, or press requests, please reach out to us directly.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-evergreen-700 hover:text-evergreen-900 transition-colors text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="break-all">{email}</span>
              </a>
              
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-evergreen-700 hover:text-evergreen-900 transition-colors text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{phone}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

