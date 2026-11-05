// src/composables/useAnalytics.js
// Injeta o Google Analytics 4 + Google Ads apenas após consentimento do usuário (LGPD)

const GA_ID = 'G-ZGWTK4ECT3'
const ADS_ID = 'AW-18146418540' // Google Ads (tag de conversão)

let initialized = false

export function useAnalytics() {
  /**
   * Inicializa o GA4 injetando os scripts dinamicamente no <head>.
   * Chamado somente após o usuário aceitar os cookies.
   */
  function initGA() {
    if (initialized || typeof window === 'undefined') return
    initialized = true

    // 1. Injeta o script externo do gtag.js
    const scriptSrc = document.createElement('script')
    scriptSrc.async = true
    scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(scriptSrc)

    // 2. Injeta o script de configuração inline
    const scriptInit = document.createElement('script')
    scriptInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true });
      gtag('config', '${ADS_ID}');
    `
    document.head.appendChild(scriptInit)

    console.log('[Analytics] GA4 + Google Ads inicializados:', GA_ID, ADS_ID)
  }

  /**
   * Envia um evento customizado para o GA4.
   * Use após o consentimento e depois que initGA() foi chamado.
   *
   * @param {string} eventName  - Nome do evento (ex: 'click_whatsapp')
   * @param {object} params     - Parâmetros extras (ex: { section: 'hero' })
   */
  function trackEvent(eventName, params = {}) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  }

  return { initGA, trackEvent }
}
