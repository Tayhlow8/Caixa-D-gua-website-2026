<script setup>
import CookieBanner from "@/components/CookieBanner.vue";
import { useAnalytics } from "@/components/useAnalytics";

const { trackEvent } = useAnalytics();

function trackWhatsAppClick(event) {
  if (localStorage.getItem("cookie_consent") !== "true") return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest("a[href]");
  if (!link) return;

  const url = new URL(link.href);
  if (!["api.whatsapp.com", "wa.me", "www.whatsapp.com"].includes(url.hostname)) {
    return;
  }

  trackEvent("click_whatsapp", {
    link_url: `${url.origin}${url.pathname}`,
    page_path: window.location.pathname,
  });
}
</script>

<template>
  <div @click="trackWhatsAppClick">
    <router-view />
    <CookieBanner />
  </div>
</template>
