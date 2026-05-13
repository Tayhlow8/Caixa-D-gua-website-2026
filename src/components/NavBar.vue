<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const scrolled = ref(false);
const menuOpen = ref(false);
const contatoOpen = ref(false);
const route = useRoute();

const darkHero = computed(
  () => route.path === "/impermeabilizacao" && !scrolled.value,
);

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

function closeMob() {
  menuOpen.value = false;
  contatoOpen.value = false;
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="navbar" :class="{ scrolled, 'dark-hero': darkHero }">
    <div class="nav-inner">
      <a href="/" class="logo">
        <img
          src="../assets/logos/logo cx dagua horizontal sem fundo.png"
          alt="Logotipo da Caixa d'Água Revestimentos e Impermeabilizações"
          class="logo-img"
        />
      </a>

      <nav>
        <ul class="nav-links">
          <li>
            <a href="/#hero" :class="{ act: route.path === '/' }">Home</a>
          </li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li><a href="/#servicos">Serviços</a></li>
          <li>
            <a
              href="/impermeabilizacao"
              :class="{ act: route.path === '/impermeabilizacao' }"
              >Impermeabilização</a
            >
          </li>
          <li>
            <a href="/blog" :class="{ act: route.path === '/blog' }">Blog</a>
          </li>
          <li>
            <a href="/faq" :class="{ act: route.path === '/faq' }">FAQ</a>
          </li>
          <li class="has-dropdown">
            <a href="/#contato" class="has-dropdown__trigger">
              Contato
              <svg class="has-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <div class="nav-dropdown" role="list">
              <div class="nav-dropdown__inner">
                <a href="tel:+5551981969303" class="nav-dropdown__item" role="listitem">
                  <span class="nav-dropdown__tag">Cel</span>
                  <span class="nav-dropdown__num">(51) 98196-9303</span>
                </a>
                <a href="tel:+555133481239" class="nav-dropdown__item" role="listitem">
                  <span class="nav-dropdown__tag">Fix</span>
                  <span class="nav-dropdown__num">(51) 3348-1239</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div class="cta-wrap">
        <a
          href="https://api.whatsapp.com/send?phone=5551992145030"
          target="_blank"
          rel="noopener"
          class="btn-wave"
        >
          <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none">
            <g class="g1">
              <path
                class="f1"
                d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
              />
            </g>
            <g class="g2">
              <path
                class="f2"
                d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
              />
            </g>
          </svg>
          <span class="wlbl">Orçamento Grátis</span>
        </a>
      </div>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        :aria-label="
          menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
        "
        :aria-expanded="menuOpen"
        aria-controls="mob-menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div id="mob-menu" class="mob-menu" :class="{ open: menuOpen }">
    <ul>
      <li>
        <a href="/#hero" :class="{ act: route.path === '/' }" @click="closeMob"
          >Home</a
        >
      </li>
      <li><a href="/#quem-somos" @click="closeMob">Quem Somos</a></li>
      <li><a href="/#servicos" @click="closeMob">Serviços</a></li>
      <li>
        <a
          href="/impermeabilizacao"
          :class="{ act: route.path === '/impermeabilizacao' }"
          @click="closeMob"
          >Impermeabilização</a
        >
      </li>
      <li>
        <a
          href="/blog"
          :class="{ act: route.path === '/blog' }"
          @click="closeMob"
          >Blog</a
        >
      </li>
      <li>
        <a href="/faq" :class="{ act: route.path === '/faq' }" @click="closeMob"
          >FAQ</a
        >
      </li>
      <li class="mob-has-sub">
        <button
          class="mob-sub-trigger"
          @click="contatoOpen = !contatoOpen"
          :aria-expanded="contatoOpen"
        >
          Contato
          <svg class="mob-sub-chevron" :class="{ open: contatoOpen }" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
            <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="mob-sub-panel" :class="{ open: contatoOpen }">
          <div>
            <a href="tel:+5551981969303" class="mob-sub-item" @click="closeMob">
              <span class="mob-sub-tag">Cel</span>(51) 98196-9303
            </a>
            <a href="tel:+555133481239" class="mob-sub-item" @click="closeMob">
              <span class="mob-sub-tag">Fix</span>(51) 3348-1239
            </a>
          </div>
        </div>
      </li>
    </ul>
    <a
      href="https://api.whatsapp.com/send?phone=5551992145030"
      target="_blank"
      rel="noopener"
      class="mob-cta"
      @click="closeMob"
    >
      Solicitar Orçamento Grátis
    </a>
  </div>

  <div class="overlay" :class="{ show: menuOpen }" @click="closeMob"></div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: transparent;
  transition:
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.97); /* manter — não tem token pra isso */
  box-shadow: var(--shadow-md);
}

.navbar.scrolled .nav-links a {
  color: var(--text-muted); /* --color-iron #6B82A0 — mais próximo */
}

.navbar.dark-hero .nav-links a {
  color: var(
    --text-on-dark-muted
  ); /* rgba(255,255,255,0.50) — adicionamos hoje */
}

.overlay {
  background: var(--bg-overlay); /* rgba(13,42,82,0.6) — adicionamos hoje */
}

.navbar.scrolled .nav-links a:hover {
  color: var(--color-navy-deep);
}

.navbar.scrolled .nav-links a.act {
  color: var(--color-sky);
}

.navbar.scrolled .hamburger span {
  background: var(--color-navy-deep);
}

/* Navbar sobre hero escuro — página impermeabilização */
.navbar.dark-hero .nav-links a {
  color: rgba(255, 255, 255, 0.75);
}

.navbar.dark-hero .nav-links a:hover {
  color: var(--color-white);
}

.navbar.dark-hero .nav-links a.act {
  color: var(--color-sky);
}

.navbar.dark-hero .hamburger span {
  background: var(--color-white);
}

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 28px;
  /* sem overflow: hidden aqui — cortava o conteúdo em mobile */
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

nav {
  flex: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(13, 42, 82, 0.55);
  padding: 8px 12px;
  border-radius: 2px;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--color-sky);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-spring);
  border-radius: 1px;
}

.nav-links a:hover {
  color: var(--color-navy-deep);
}
.nav-links a:hover::after,
.nav-links a.act::after {
  transform: scaleX(1);
}
.nav-links a.act {
  color: var(--color-sky);
}

/* ── Wave button ── */
.btn-wave {
  position: relative;
  overflow: hidden;
  contain: paint;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-navy-deep);
  border: 2px solid var(--color-sky);
  padding: 11px 20px;
  border-radius: 40px;
  cursor: pointer;
  isolation: isolate;
  transition: color 0.38s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-wave .wsv {
  position: absolute;
  left: -100%;
  top: 0;
  width: 300%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-wave:hover .wsv {
  opacity: 1;
}

.btn-wave .wlbl {
  position: relative;
  z-index: 1;
  transition: color 0.38s;
}

.btn-wave .g1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.btn-wave .g2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.btn-wave:hover .g1 {
  animation:
    waveRise1 0.65s var(--ease-spring) forwards,
    waveBob1 3.2s ease-in-out 0.65s infinite;
}
.btn-wave:hover .g2 {
  animation:
    waveRise2 0.7s var(--ease-spring) 0.05s forwards,
    waveBob2 4s ease-in-out 0.75s infinite;
}

@keyframes waveRise1 {
  from {
    transform: translateY(115%);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes waveRise2 {
  from {
    transform: translateY(125%);
  }
  to {
    transform: translateY(-6%);
  }
}
@keyframes waveBob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes waveBob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

.btn-wave .f1 {
  fill: var(--color-sky);
}
.btn-wave .f2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}
.btn-wave:hover .wlbl {
  color: var(--color-navy-deep);
}

.btn-wave:focus {
  outline: none;
}
.btn-wave:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px var(--color-sky);
}

/* ── Hamburger ── */
.hamburger {
  display: none;
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
  flex-shrink: 0;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-navy-deep);
  border-radius: 1px;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile menu ── */
.mob-menu {
  position: fixed;
  top: 68px;
  right: 0;
  bottom: 0;
  width: min(300px, 85vw);
  background: var(--color-navy-deep);
  border-left: 1px solid rgba(0, 184, 240, 0.15);
  padding: 28px 24px;
  overflow: hidden;
  clip-path: inset(0 0 0 100%);
  transition:
    clip-path 0.35s var(--ease-spring),
    visibility 0.35s;
  z-index: 999;
  visibility: hidden;
}

.mob-menu.open {
  clip-path: inset(0);
  visibility: visible;
}

.mob-menu ul {
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
}

.mob-menu a {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  padding: 14px 0;
  display: block;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s;
}

.mob-menu a:hover {
  color: var(--color-sky);
}

.mob-cta {
  display: block;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-navy-deep) !important;
  background: var(--color-sky);
  padding: 16px 24px;
  border-radius: 2px;
  border-bottom: none !important;
}
.mob-cta:focus {
  outline: none;
}
.mob-cta:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-navy-deep),
    0 0 0 4px var(--color-sky);
}

/* ── Overlay ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 42, 82, 0.6);
  backdrop-filter: blur(2px);
  z-index: 998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.overlay.show {
  opacity: 1;
  pointer-events: all;
}

/* ── Contato dropdown ── */
.has-dropdown { position: relative; }

.has-dropdown__trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.has-dropdown__chevron {
  transition: transform var(--transition-state);
  flex-shrink: 0;
}
.has-dropdown:hover .has-dropdown__chevron {
  transform: rotate(180deg);
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-6px);
  padding-top: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-state), transform var(--transition-state);
  z-index: var(--z-dropdown);
}
.has-dropdown:hover .nav-dropdown {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown__inner {
  background: var(--color-navy-deep);
  border: 1px solid rgba(0, 184, 240, 0.18);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
  padding: var(--space-2) 0;
  min-width: 172px;
}

.nav-dropdown__item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  text-decoration: none;
  transition: background var(--transition-hover);
}
.nav-dropdown__item:hover { background: rgba(0, 184, 240, 0.08); }

.nav-dropdown__tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--color-sky);
  min-width: 24px;
}

.nav-dropdown__num {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: var(--weight-bold);
  color: var(--color-white);
  white-space: nowrap;
}

/* ── Mobile sub-menu ── */
.mob-sub-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  padding: 14px 0;
  background: none;
  border: none;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: color 0.2s;
}
.mob-sub-trigger:hover { color: var(--color-sky); }

.mob-sub-chevron {
  color: rgba(255, 255, 255, 0.4);
  transition: transform var(--transition-state);
  flex-shrink: 0;
}
.mob-sub-chevron.open { transform: rotate(180deg); }

.mob-sub-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition-state);
}
.mob-sub-panel.open { grid-template-rows: 1fr; }
.mob-sub-panel > div { overflow: hidden; }

.mob-sub-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  padding: 11px 0 11px var(--space-4);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.05);
  text-decoration: none;
  transition: color 0.2s;
}
.mob-sub-item:hover { color: var(--color-sky); }
.mob-sub-item:last-child { border-bottom: none; }

.mob-sub-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--color-sky);
  min-width: 24px;
}

@media (max-width: 767px) {
  nav,
  .cta-wrap {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
  nav {
    display: block;
  }
  .cta-wrap {
    display: flex;
  }
}
</style>
