<template>
  <Transition name="cookie-slide">
    <div
      v-if="visible"
      class="cookie-banner"
      role="alertdialog"
      aria-label="Aviso de cookies"
    >
      <div class="cookie-banner__inner">
        <div class="cookie-banner__text">
          <span class="cookie-banner__icon">🍪</span>
          <p>
            Este site utiliza cookies para melhorar sua experiência e analisar o
            tráfego. Ao continuar navegando, você concorda com nossa
            <a href="/politica-de-privacidade" class="cookie-banner__link"
              >Política de Privacidade</a
            >.
          </p>
        </div>
        <button class="cookie-banner__btn" @click="accept">Entendi</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAnalytics } from "@/components/useAnalytics";

const visible = ref(false);
const { initGA } = useAnalytics();

onMounted(() => {
  const consent = localStorage.getItem("cookie_consent");
  if (consent === "true") {
    initGA();
  } else {
    visible.value = true;
  }
});

function accept() {
  localStorage.setItem("cookie_consent", "true");
  visible.value = false;
  initGA();
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--navy-deep, #0d2a52);
  border-top: 1px solid rgba(0, 184, 240, 0.2);
  padding: 16px 24px;
}

.cookie-banner__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.cookie-banner__text {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 240px;
}

.cookie-banner__icon {
  font-size: 20px;
  flex-shrink: 0;
}

.cookie-banner__text p {
  font-family: var(--font-body, "Lato", sans-serif);
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.55;
  margin: 0;
}

.cookie-banner__link {
  color: var(--sky, #00b8f0);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.cookie-banner__link:hover {
  color: var(--cyan, #00c8f0);
}

.cookie-banner__btn {
  font-family: var(--font-body, "Lato", sans-serif);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--navy-deep, #0d2a52);
  background: var(--sky, #00b8f0);
  border: none;
  border-radius: 2px;
  padding: 10px 24px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
  flex-shrink: 0;
}

.cookie-banner__btn:hover {
  background: var(--cyan, #00c8f0);
  transform: translateY(-1px);
}

.cookie-banner__btn:active {
  transform: translateY(0);
}

.cookie-slide-enter-active {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease;
}

.cookie-slide-leave-active {
  transition:
    transform 0.25s ease-in,
    opacity 0.25s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 600px) {
  .cookie-banner__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .cookie-banner__btn {
    width: 100%;
    text-align: center;
  }
}
</style>
