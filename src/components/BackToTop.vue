<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function getThreshold() {
  return window.innerWidth < 768 ? 0.20 : 0.35;
}

function onScroll() {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  visible.value = total > 0 && scrolled / total >= getThreshold();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <button
    class="btt"
    :class="{ 'btt--visible': visible }"
    aria-label="Voltar ao topo"
    @click="scrollToTop"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  </button>
</template>

<style scoped>
.btt {
  position: fixed;
  bottom: 28px;
  right: 24px;
  z-index: 999;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--color-cyan);
  color: var(--color-navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 200, 240, 0.35);
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.btt--visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.btt:hover {
  background: var(--color-sky);
  box-shadow: 0 6px 20px rgba(0, 200, 240, 0.5);
}

.btt svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 767px) {
  .btt {
    bottom: 20px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
}
</style>
