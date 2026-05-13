<script setup>
import { ref } from "vue";
import logoImg from "../assets/logos/logo cx dagua horizontal sem fundo.png";

defineProps({
  activePage: { type: String, default: "" },
});

const menuOpen = ref(false);
const contatoOpen = ref(false);
function closeMob() {
  menuOpen.value = false;
  contatoOpen.value = false;
}

const WPP = "https://api.whatsapp.com/send?phone=5551981969303";
</script>

<template>
  <header class="navbar" role="banner">
    <div class="nav-inner">
      <a
        href="/"
        class="logo"
        aria-label="Caixa d'Água Revestimentos — ir para a home"
      >
        <img :src="logoImg" alt="Caixa d'Água Revestimentos" class="logo-img" />
      </a>

      <nav aria-label="Navegação principal">
        <ul class="nav-links" role="list">
          <li>
            <a href="/" :class="{ active: activePage === 'home' }">Home</a>
          </li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li>
            <a
              href="/impermeabilizacao"
              :class="{ active: activePage === 'impermeabilizacao' }"
              >Impermeabilização</a
            >
          </li>
          <li><a href="/#servicos">Serviços</a></li>
          <li>
            <a href="/blog" :class="{ active: activePage === 'blog' }">Blog</a>
          </li>
          <li>
            <a href="/faq" :class="{ active: activePage === 'faq' }">FAQ</a>
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
          :href="WPP"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-wave"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          <svg
            class="wsv"
            viewBox="0 0 600 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
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
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div
    class="mob-menu"
    :class="{ open: menuOpen }"
    role="navigation"
    aria-label="Menu mobile"
  >
    <ul>
      <li><a href="/" @click="closeMob">Home</a></li>
      <li><a href="/#quem-somos" @click="closeMob">Quem Somos</a></li>
      <li>
        <a
          href="/impermeabilizacao"
          @click="closeMob"
          :class="{ active: activePage === 'impermeabilizacao' }"
          >Impermeabilização</a
        >
      </li>
      <li><a href="/#servicos" @click="closeMob">Serviços</a></li>
      <li>
        <a href="/blog" @click="closeMob" :class="{ active: activePage === 'blog' }">Blog</a>
      </li>
      <li>
        <a href="/faq" @click="closeMob" :class="{ active: activePage === 'faq' }">FAQ</a>
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
      :href="WPP"
      target="_blank"
      rel="noopener noreferrer"
      class="mob-cta"
      @click="closeMob"
    >
      <svg
        class="wsv"
        viewBox="0 0 600 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
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
      <span class="wlbl">
        <svg
          class="wico"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.853L.054 23.94l6.267-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
          />
        </svg>
        Solicitar Orçamento Grátis
      </span>
    </a>
  </div>

  <div
    class="overlay"
    :class="{ show: menuOpen }"
    @click="closeMob"
    aria-hidden="true"
  ></div>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 200;
  background: var(--color-navy-deep);
  border-bottom: 1px solid rgba(0, 184, 240, 0.12);
  height: 64px;
}

.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-img {
  height: 36px;
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
  gap: 4px;
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
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

.nav-links a:hover,
.nav-links a.active {
  color: var(--color-sky);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
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
  padding: 9px 18px;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  white-space: nowrap;
  flex-shrink: 0;
  isolation: isolate;
  transition: color 0.38s ease;
  cursor: pointer;
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
  background: rgba(255, 255, 255, 0.7);
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
  top: 64px;
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
  z-index: 300;
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

.mob-menu a:hover,
.mob-menu a.active {
  color: var(--color-sky);
}

.mob-cta {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff !important;
  background: var(--color-navy-deep);
  border: 2px solid var(--color-sky) !important;
  padding: 16px 24px;
  border-radius: 40px;
  border-bottom: none !important;
  transition: color 0.38s ease;
}

.mob-cta .wsv {
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

.mob-cta:hover .wsv {
  opacity: 1;
}

.mob-cta .wlbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: color 0.38s;
}

.mob-cta .wico {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.mob-cta .g1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.mob-cta .g2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.mob-cta:hover .g1 {
  animation:
    mobRise1 0.65s var(--ease-spring) forwards,
    mobBob1 3.2s ease-in-out 0.65s infinite;
}
.mob-cta:hover .g2 {
  animation:
    mobRise2 0.7s var(--ease-spring) 0.05s forwards,
    mobBob2 4s ease-in-out 0.75s infinite;
}

@keyframes mobRise1 {
  from {
    transform: translateY(115%);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes mobRise2 {
  from {
    transform: translateY(125%);
  }
  to {
    transform: translateY(-6%);
  }
}
@keyframes mobBob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes mobBob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

.mob-cta .f1 {
  fill: var(--color-sky);
}
.mob-cta .f2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}
.mob-cta:hover .wlbl {
  color: var(--color-navy-deep) !important;
}

/* ── Overlay ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 42, 82, 0.6);
  backdrop-filter: blur(2px);
  z-index: 250;
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
