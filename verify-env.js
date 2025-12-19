// Quick script to verify environment variables
// Run this locally: node verify-env.js

console.log('Environment Variables Check:')
console.log('============================')
console.log('NEXT_PUBLIC_EMAILJS_SERVICE_ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'NOT SET')
console.log('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'NOT SET')
console.log('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'SET (hidden)' : 'NOT SET')
console.log('============================')

