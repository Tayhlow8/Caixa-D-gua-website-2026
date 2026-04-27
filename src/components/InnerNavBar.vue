<script setup>
import { ref } from 'vue'
import logoImg from '../assets/logos/logo cx dagua horizontal sem fundo.png'

defineProps({
  activePage: { type: String, default: '' }
})

const menuOpen = ref(false)
function closeMob() { menuOpen.value = false }

const WPP = 'https://api.whatsapp.com/send?phone=5551992145030'
</script>

<template>
  <header class="navbar" role="banner">
    <div class="nav-inner">
      <a href="/" class="logo" aria-label="Caixa d'Água Revestimentos — ir para a home">
        <img :src="logoImg" alt="Caixa d'Água Revestimentos" class="logo-img" />
      </a>

      <nav aria-label="Navegação principal">
        <ul class="nav-links" role="list">
          <li><a href="/" :class="{ active: activePage === 'home' }">Home</a></li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li><a href="/impermeabilizacao" :class="{ active: activePage === 'impermeabilizacao' }">Impermeabilização</a></li>
          <li><a href="/#servicos">Serviços</a></li>
        </ul>
      </nav>

      <div class="cta-wrap">
        <a :href="WPP" target="_blank" rel="noopener noreferrer" class="btn-wave" aria-label="Solicitar orçamento pelo WhatsApp">
          <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            <g class="g1"><path class="f1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/></g>
            <g class="g2"><path class="f2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/></g>
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

  <div class="mob-menu" :class="{ open: menuOpen }" role="navigation" aria-label="Menu mobile">
    <ul>
      <li><a href="/" @click="closeMob">Home</a></li>
      <li><a href="/#quem-somos" @click="closeMob">Quem Somos</a></li>
      <li><a href="/impermeabilizacao" @click="closeMob" :class="{ active: activePage === 'impermeabilizacao' }">Impermeabilização</a></li>
      <li><a href="/#servicos" @click="closeMob">Serviços</a></li>
    </ul>
    <a :href="WPP" target="_blank" rel="noopener noreferrer" class="mob-cta" @click="closeMob">
      Solicitar Orçamento Grátis
    </a>
  </div>

  <div class="overlay" :class="{ show: menuOpen }" @click="closeMob" aria-hidden="true"></div>
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

.logo { display: flex; align-items: center; flex-shrink: 0; }

.logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
}

nav { flex: 1; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-links a {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px 12px;
  border-radius: 2px;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--color-sky); }
.nav-links a.active { color: var(--color-sky); }

.btn-wave {
  position: relative;
  overflow: hidden;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-navy-deep);
  background: var(--color-lacre);
  padding: 9px 18px;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  white-space: nowrap;
  flex-shrink: 0;
  isolation: isolate;
  transition: background 0.2s;
  border: none;
}

.btn-wave:hover { background: #00efc0; }

.btn-wave .wsv {
  display: none;
}

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
  transition: transform 0.3s, opacity 0.3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mob-menu {
  position: fixed;
  top: 64px;
  right: 0;
  bottom: 0;
  width: min(300px, 85vw);
  background: var(--color-navy-deep);
  border-left: 1px solid rgba(0, 184, 240, 0.15);
  padding: 28px 24px;
  transform: translateX(100%);
  transition: transform 0.35s var(--ease-spring);
  z-index: 300;
}

.mob-menu.open { transform: translateX(0); }

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
.mob-menu a.active { color: var(--color-sky); }

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
  transition: background 0.2s;
}

.mob-cta:hover { background: var(--color-cyan); }

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

.overlay.show { opacity: 1; pointer-events: all; }

@media (max-width: 767px) {
  nav, .cta-wrap { display: none; }
  .hamburger { display: flex; }
}

@media (min-width: 768px) {
  .hamburger { display: none; }
  nav { display: block; }
  .cta-wrap { display: flex; }
}
</style>
