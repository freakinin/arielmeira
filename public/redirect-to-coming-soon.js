// Production redirect script
// This will only redirect in production, not locally
(function() {
  if (typeof window === 'undefined') return;
  
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Only redirect in production
  if (!isLocalhost && window.location.pathname === '/') {
    const isProduction = 
      hostname.includes('vercel.app') ||
      hostname.includes('arielandmeira.com');
    
    if (isProduction) {
      window.location.href = '/coming-soon';
    }
  }
})();

