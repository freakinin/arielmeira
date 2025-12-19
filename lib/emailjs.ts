import emailjs from '@emailjs/browser'
import { ContactFormData } from '@/types'

// EmailJS configuration
// These will be set via environment variables
// IMPORTANT: For static export, these must be set at BUILD TIME in Vercel

// Access environment variables - Next.js embeds NEXT_PUBLIC_ vars at build time
// Using getEnvVar helper to ensure we get the value
function getEnvVar(key: string): string {
  if (typeof window !== 'undefined') {
    // Client-side: check multiple possible locations
    return (window as any).__NEXT_DATA__?.env?.[key] || 
           (process as any).env?.[key] || 
           process.env[key] || 
           ''
  }
  // Server-side
  return process.env[key] || ''
}

const SERVICE_ID = getEnvVar('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
const TEMPLATE_ID = getEnvVar('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
const PUBLIC_KEY = getEnvVar('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')

// Debug: Always log in browser to help troubleshoot
if (typeof window !== 'undefined') {
  console.log('🔍 EmailJS Environment Variables Debug:', {
    SERVICE_ID: SERVICE_ID || '❌ MISSING',
    TEMPLATE_ID: TEMPLATE_ID || '❌ MISSING',
    PUBLIC_KEY: PUBLIC_KEY ? '✅ SET' : '❌ MISSING',
    'process.env check': {
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'NOT FOUND',
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'NOT FOUND',
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT FOUND',
    },
    'window.__NEXT_DATA__ check': typeof window !== 'undefined' ? (window as any).__NEXT_DATA__?.env : 'N/A'
  })
  
  // Show alert if missing (for easier debugging)
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('⚠️ EmailJS variables are missing! Check Vercel environment variables.')
  }
}

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
  } catch (error: any) {
    console.error('EmailJS error:', error)
    console.error('Error details:', {
      serviceId: SERVICE_ID,
      templateId: TEMPLATE_ID,
      publicKey: PUBLIC_KEY ? 'Set' : 'Missing',
      errorMessage: error?.text || error?.message || 'Unknown error',
      status: error?.status,
    })
    
    // Provide more helpful error messages
    let errorMessage = 'Sorry, there was an error sending your message. Please try again later.'
    
    if (error?.status === 400) {
      errorMessage = 'Invalid request. Please check your EmailJS template configuration.'
    } else if (error?.status === 401) {
      errorMessage = 'Authentication failed. Please check your EmailJS public key.'
    } else if (error?.status === 404) {
      errorMessage = 'Service or template not found. Please verify your EmailJS IDs.'
    } else if (error?.text) {
      errorMessage = `Error: ${error.text}`
    }
    
    return {
      success: false,
      message: errorMessage,
    }
  }
}

