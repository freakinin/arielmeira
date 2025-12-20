'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { sendEmail } from '@/lib/emailjs'
import { ContactFormData } from '@/types'
import { fadeIn } from '@/lib/animations'

const inquiryTypes = [
  { value: 'booking', label: 'Booking Inquiry' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'press', label: 'Press Request' },
  { value: 'general', label: 'General Inquiry' },
] as const

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: 'test@example.com', // Default for debugging
    message: 'Test message', // Default for debugging
    inquiryType: 'general', // Default for debugging
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await sendEmail(formData)
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message,
      })

      if (result.success) {
        setFormData({
          name: '',
          email: 'test@example.com', // Reset to default for debugging
          message: 'Test message', // Reset to default for debugging
          inquiryType: 'general', // Reset to default for debugging
        })
      }
    } catch (error: any) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error?.message || 'An unexpected error occurred. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <motion.form
      variants={fadeIn}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-sm"
    >
      <div className="space-y-6">
        {/* DEBUG MODE: Only showing name field for easier debugging */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-yellow-800">
            <strong>Debug Mode:</strong> Only name field visible. Other fields use default test values.
          </p>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-sage-900 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-300"
            placeholder="Your name"
          />
        </div>

        {/* Hidden fields for debugging - using defaults */}
        {/* Email - hidden */}
        {/* <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-sage-900 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div> */}

        {/* Inquiry Type - hidden */}
        {/* <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-medium text-sage-900 mb-2"
          >
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-300"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div> */}

        {/* Message - hidden */}
        {/* <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-sage-900 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors duration-300 resize-none"
            placeholder="Tell us about your inquiry..."
          />
        </div> */}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-evergreen-500 text-white rounded-lg font-medium hover:bg-evergreen-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Status Message */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="text-sm">{submitStatus.message}</p>
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}

