import emailjs from '@emailjs/browser'
import { ContactFormData } from '@/types'

// EmailJS configuration
// These will be set via environment variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

export interface EmailJSResponse {
  success: boolean
  message: string
}

export const sendEmail = async (
  formData: ContactFormData
): Promise<EmailJSResponse> => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing')
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      inquiry_type: formData.inquiryType,
      to_name: 'Ariel & Meira',
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    return {
      success: false,
      message:
        'Sorry, there was an error sending your message. Please try again later.',
    }
  }
}

