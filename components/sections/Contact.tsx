'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import ContactForm from '@/components/utility/ContactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-stone-50"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-sage-900 text-center mb-6"
          >
            Contact
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-stone-600 text-lg mb-12"
          >
            For booking inquiries, collaborations, or press requests, please get
            in touch.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

