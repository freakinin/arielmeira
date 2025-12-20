'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { socialLinks } from '@/data/mockData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-evergreen-900 text-wheat-100 py-8 md:py-10">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {/* Brand and Links row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <img
                src="/images/logo.PNG"
                alt="Ariel & Meira"
                className="h-12 w-auto mb-4"
              />
              <p className="text-stone-300 text-sm leading-relaxed mb-2">
                Elegant instrumental music for meditation, relaxation, and
                contemplation.
              </p>
              <p className="text-stone-400 text-sm">
                © {currentYear} Ariel & Meira. All rights reserved.
              </p>
            </div>
            {/* Quick Links in one line */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a
                href="#about"
                className="text-stone-300 hover:text-wheat-100 transition-colors duration-300"
              >
                About
              </a>
              <span className="text-stone-500">|</span>
              <a
                href="#music"
                className="text-stone-300 hover:text-wheat-100 transition-colors duration-300"
              >
                Music
              </a>
              <span className="text-stone-500">|</span>
              <a
                href="#contact"
                className="text-stone-300 hover:text-wheat-100 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

