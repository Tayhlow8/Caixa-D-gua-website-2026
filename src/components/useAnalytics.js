// src/components/useAnalytics.js
// GA4 + Google Ads com Consent Mode v2 (LGPD).
// A tag gtag.js é carregada no index.html com todos os consentimentos negados.
// Aqui só liberamos o consentimento quando o usuário aceita os cookies.

export function useAnalytics() {
  /**
   * Libera os cookies de Analytics e Ads.
   * Chamado somente após o usuário aceitar os cookies.
   */
  function initGA() {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  }

  /**
   * Envia um evento customizado para o GA4 / Google Ads.
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
