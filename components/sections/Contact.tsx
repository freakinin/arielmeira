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
            We'd love to hear from you! For booking inquiries, collaborations, or press requests, please reach out to us directly.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 mb-2 text-center">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-evergreen-700 hover:text-evergreen-900 transition-colors break-all text-center block"
                >
                  {email}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-stone-500 mb-2 text-center">Phone</p>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-evergreen-700 hover:text-evergreen-900 transition-colors text-center block"
                >
                  {phone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

