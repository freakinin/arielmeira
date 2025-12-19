'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { socialLinks } from '@/data/mockData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300 section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-stone-50 mb-4">
              Ariel & Meira
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Elegant instrumental music for meditation, relaxation, and
              contemplation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-stone-50 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-stone-400 hover:text-stone-50 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#music"
                  className="text-stone-400 hover:text-stone-50 transition-colors duration-300"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="text-stone-400 hover:text-stone-50 transition-colors duration-300"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-stone-400 hover:text-stone-50 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div>
              <h4 className="font-semibold text-stone-50 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-50 transition-colors duration-300"
                    >
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500"
        >
          <p>© {currentYear} Ariel & Meira. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

