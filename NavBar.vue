<template>
  <header
    class="navbar"
    :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }"
  >
    <div class="navbar__inner">
      <router-link
        to="/"
        class="navbar__logo"
        aria-label="Caixa d'Água Revestimentos — Página inicial"
      >
        <img
          src="../assets/images/logo cx dagua horizontal sem fundo.png"
          alt="Caixa d'Água Revestimentos"
          width="160"
          height="48"
        />
      </router-link>

      <nav class="navbar__nav" aria-label="Navegação principal">
        <ul class="navbar__links">
          <li>
            <router-link to="/" exact-active-class="is-active"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/quem-somos" active-class="is-active"
              >Quem Somos</router-link
            >
          </li>
          <li>
            <router-link to="/servicos" active-class="is-active"
              >Serviços</router-link
            >
          </li>
          <li>
            <router-link to="/revestimentos" active-class="is-active"
              >Revestimento</router-link
            >
          </li>
          <li>
            <router-link to="/fale-conosco" active-class="is-active"
              >Contato</router-link
            >
          </li>
        </ul>
      </nav>

      <a
        class="navbar__cta btn-wave"
        href="https://api.whatsapp.com/send?phone=5551992145030&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento via WhatsApp"
      >
        <svg
          class="wave-svg"
          viewBox="0 0 600 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g class="wg1">
            <path
              class="wf1"
              d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
            />
          </g>
          <g class="wg2">
            <path
              class="wf2"
              d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
            />
          </g>
        </svg>
        <span class="label">Orçamento Grátis</span>
      </a>

      <button
        class="navbar__hamburger"
        :class="{ 'is-open': menuOpen }"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="navbar__mobile"
      id="mobile-menu"
      :class="{ 'is-open': menuOpen }"
      role="dialog"
      aria-label="Menu mobile"
    >
      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              @click="closeMenu"
              exact-active-class="is-active"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/quem-somos"
              @click="closeMenu"
              active-class="is-active"
              >Quem Somos</router-link
            >
          </li>
          <li>
            <router-link
              to="/servicos"
              @click="closeMenu"
              active-class="is-active"
              >Serviços</router-link
            >
          </li>
          <li>
            <router-link
              to="/revestimentos"
              @click="closeMenu"
              active-class="is-active"
              >Revestimento</router-link
            >
          </li>
          <li>
            <router-link
              to="/fale-conosco"
              @click="closeMenu"
              active-class="is-active"
              >Contato</router-link
            >
          </li>
        </ul>
        <a
          class="mobile-cta"
          href="https://api.whatsapp.com/send?phone=5551992145030&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          Solicitar Orçamento Grátis
        </a>
      </nav>
    </div>
  </header>

  <!-- Overlay -->
  <div
    class="navbar__overlay"
    :class="{ 'is-visible': menuOpen }"
    @click="closeMenu"
    aria-hidden="true"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
}

function closeMenu() {
  menuOpen.value = false;
  document.body.style.overflow = "";
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
/* ── Base ── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: var(--color-navy-deep);
  border-bottom: 1px solid rgba(0, 184, 240, 0.12);
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.navbar--scrolled {
  background: rgba(13, 42, 82, 0.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 24px rgba(13, 42, 82, 0.4);
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ── Logo ── */
.navbar__logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navbar__logo img {
  height: 40px;
  width: auto;
}

/* ── Desktop Nav ── */
.navbar__nav {
  flex: 1;
  display: none;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar__links a {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  padding: 8px 14px;
  border-radius: 2px;
  transition: color 0.2s ease;
  position: relative;
}

.navbar__links a::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: var(--color-sky);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-spring);
  border-radius: 1px;
}

.navbar__links a:hover {
  color: var(--color-white);
}
.navbar__links a:hover::after {
  transform: scaleX(1);
}
.navbar__links a.is-active {
  color: var(--color-sky);
}
.navbar__links a.is-active::after {
  transform: scaleX(1);
}

/* ── CTA Wave Button ── */
.navbar__cta {
  flex-shrink: 0;
  display: none;
}

/* ── Wave button base (inline, sem import do button.css) ── */
.btn-wave {
  position: relative;
  overflow: hidden;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--color-navy);
  border: 2px solid var(--color-sky);
  padding: 12px 22px;
  border-radius: 2px;
  cursor: pointer;
  isolation: isolate;
  transition: color 0.38s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
}

.btn-wave .wave-svg {
  position: absolute;
  left: -100%;
  top: 0;
  width: 300%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.btn-wave:hover .wave-svg {
  opacity: 1;
}

.btn-wave .label {
  position: relative;
  z-index: 1;
  transition: color 0.38s ease;
}

.btn-wave .wg1 {
  transform: translateY(115%);
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-wave .wg2 {
  transform: translateY(125%);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s;
}

@keyframes bob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes bob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

.btn-wave:hover .wg1 {
  animation: bob1 3.2s ease-in-out infinite;
}
.btn-wave:hover .wg2 {
  animation: bob2 4s ease-in-out 0.4s infinite;
}
.btn-wave:not(:hover) .wg1 {
  transform: translateY(115%);
}
.btn-wave:not(:hover) .wg2 {
  transform: translateY(125%);
}

.btn-wave .wf1 {
  fill: var(--color-sky);
}
.btn-wave .wf2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}
.btn-wave:hover .label {
  color: var(--color-navy-deep);
}

/* ── Hamburger ── */
.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.navbar__hamburger span {
  display: block;
  height: 2px;
  background: var(--color-white);
  border-radius: 1px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: center;
}

.navbar__hamburger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger.is-open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.navbar__hamburger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Menu ── */
.navbar__mobile {
  display: none;
  position: fixed;
  top: 68px;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--color-navy-deep);
  border-left: 1px solid rgba(0, 184, 240, 0.15);
  padding: 32px 24px;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  overflow-y: auto;
}

.navbar__mobile.is-open {
  transform: translateX(0);
}

.navbar__mobile ul {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 32px;
}

.navbar__mobile a {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  padding: 14px 0;
  display: block;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s ease;
}

.navbar__mobile a:hover,
.navbar__mobile a.is-active {
  color: var(--color-sky);
}

.mobile-cta {
  display: block;
  text-align: center;
  font-family: var(--font-body) !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: var(--color-navy-deep) !important;
  background: var(--color-sky);
  padding: 16px 24px !important;
  border-radius: 2px;
  border-bottom: none !important;
  transition: background 0.2s ease !important;
}

.mobile-cta:hover {
  background: var(--color-cyan) !important;
  color: var(--color-navy-deep) !important;
}

/* ── Overlay ── */
.navbar__overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(13, 42, 82, 0.6);
  backdrop-filter: blur(2px);
  z-index: 998;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.navbar__overlay.is-visible {
  opacity: 1;
}

/* ── Responsive ── */
@media (min-width: 768px) {
  .navbar__mobile {
    display: block;
  }
  .navbar__overlay {
    display: block;
  }
  .navbar__hamburger {
    display: none;
  }
  .navbar__nav {
    display: block;
  }
  .navbar__cta {
    display: inline-flex;
  }
}

@media (max-width: 767px) {
  .navbar__mobile {
    display: block;
  }
  .navbar__overlay {
    display: block;
  }
}
</style>
