<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMob() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
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
          <li><a href="/#hero" :class="{ act: route.path === '/' }">Home</a></li>
          <li><a href="/#quem-somos">Quem Somos</a></li>
          <li><a href="/#servicos">Serviços</a></li>
          <li><a href="/impermeabilizacao" :class="{ act: route.path === '/impermeabilizacao' }">Impermeabilização</a></li>
          <li><a href="/#contato">Contato</a></li>
        </ul>
      </nav>

      <div class="cta-wrap">
        <a href="https://api.whatsapp.com/send?phone=5551981969303" target="_blank" rel="noopener" class="btn-wave">
          <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none">
            <g class="g1"><path class="f1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/></g>
            <g class="g2"><path class="f2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/></g>
          </svg>
          <span class="wlbl">Orçamento Grátis</span>
        </a>
      </div>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        :aria-label="menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mob-menu" :class="{ open: menuOpen }">
    <ul>
      <li><a href="/#hero" :class="{ act: route.path === '/' }" @click="closeMob">Home</a></li>
      <li><a href="/#quem-somos" @click="closeMob">Quem Somos</a></li>
      <li><a href="/#servicos" @click="closeMob">Serviços</a></li>
      <li><a href="/impermeabilizacao" :class="{ act: route.path === '/impermeabilizacao' }" @click="closeMob">Impermeabilização</a></li>
      <li><a href="/#contato" @click="closeMob">Contato</a></li>
    </ul>
    <a
      href="https://api.whatsapp.com/send?phone=5551981969303"
      target="_blank"
      rel="noopener"
      class="mob-cta"
      @click="closeMob"
    >
      <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
        <g class="g1"><path class="f1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/></g>
        <g class="g2"><path class="f2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/></g>
      </svg>
      <span class="wlbl">
        <svg class="wico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.853L.054 23.94l6.267-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
        Solicitar Orçamento Grátis
      </span>
    </a>
  </div>

  <div class="overlay" :class="{ show: menuOpen }" @click="closeMob"></div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 999;
  background: transparent;
  transition: background .35s ease, box-shadow .35s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, .97);
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 28px rgba(0, 0, 0, .10);
}

.navbar.scrolled .nav-links a {
  color: rgba(13, 42, 82, .65);
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

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 28px;
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

nav { flex: 1; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  color: rgba(13, 42, 82, .55);
  padding: 8px 12px;
  border-radius: 2px;
  transition: color .2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 12px; right: 12px;
  height: 2px;
  background: var(--color-sky);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .25s var(--ease-spring);
  border-radius: 1px;
}

.nav-links a:hover { color: var(--color-navy-deep); }
.nav-links a:hover::after,
.nav-links a.act::after { transform: scaleX(1); }
.nav-links a.act { color: var(--color-sky); }

/* ── Wave button ── */
.btn-wave {
  position: relative;
  overflow: hidden;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-navy-deep);
  border: 2px solid var(--color-sky);
  padding: 11px 20px;
  border-radius: 40px;
  cursor: pointer;
  isolation: isolate;
  transition: color .38s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-wave .wsv {
  position: absolute;
  left: -100%; top: 0;
  width: 300%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity .4s ease;
}

.btn-wave:hover .wsv { opacity: 1; }

.btn-wave .wlbl {
  position: relative;
  z-index: 1;
  transition: color .38s;
}

/* Resting: waves off-screen. Transition handles smooth exit on unhover. */
.btn-wave .g1 { transform: translateY(115%); transition: transform .55s ease-in; }
.btn-wave .g2 { transform: translateY(125%); transition: transform .55s ease-in .04s; }

/* Hover: 1) rise from bottom once  2) bob forever after rise completes */
.btn-wave:hover .g1 {
  animation:
    waveRise1 .65s var(--ease-spring) forwards,
    waveBob1  3.2s ease-in-out .65s infinite;
}
.btn-wave:hover .g2 {
  animation:
    waveRise2 .7s  var(--ease-spring) .05s forwards,
    waveBob2  4s   ease-in-out .75s   infinite;
}

@keyframes waveRise1 { from { transform: translateY(115%); } to { transform: translateY(-10%); } }
@keyframes waveRise2 { from { transform: translateY(125%); } to { transform: translateY(-6%);  } }
@keyframes waveBob1  { 0%,100% { transform: translateY(-10%); } 50% { transform: translateY(-14%); } }
@keyframes waveBob2  { 0%,100% { transform: translateY(-6%);  } 50% { transform: translateY(-11%); } }

.btn-wave .f1 { fill: var(--color-sky); }
.btn-wave .f2 { fill: var(--color-cyan-light); opacity: .5; }
.btn-wave:hover .wlbl { color: var(--color-navy-deep); }

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px; height: 40px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-navy-deep);
  border-radius: 1px;
  transition: transform .3s, opacity .3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile menu ── */
.mob-menu {
  position: fixed;
  top: 68px; right: 0; bottom: 0;
  width: min(300px, 85vw);
  background: var(--color-navy-deep);
  border-left: 1px solid rgba(0, 184, 240, .15);
  padding: 28px 24px;
  transform: translateX(100%);
  transition: transform .35s var(--ease-spring);
  z-index: 999;
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
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .6);
  padding: 14px 0;
  display: block;
  border-bottom: .5px solid rgba(255, 255, 255, .08);
  transition: color .2s;
}

.mob-menu a:hover { color: var(--color-sky); }

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
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff !important;
  background: var(--color-navy-deep);
  border: 2px solid var(--color-sky) !important;
  padding: 16px 24px;
  border-radius: 40px;
  border-bottom: none !important;
  transition: color .38s ease;
}

.mob-cta .wsv {
  position: absolute;
  left: -100%; top: 0;
  width: 300%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity .4s ease;
}

.mob-cta:hover .wsv { opacity: 1; }

.mob-cta .wlbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: color .38s;
}

.mob-cta .wico { width: 16px; height: 16px; flex-shrink: 0; }

.mob-cta .g1 { transform: translateY(115%); transition: transform .55s ease-in; }
.mob-cta .g2 { transform: translateY(125%); transition: transform .55s ease-in .04s; }

.mob-cta:hover .g1 {
  animation:
    mobRise1 .65s var(--ease-spring) forwards,
    mobBob1 3.2s ease-in-out .65s infinite;
}
.mob-cta:hover .g2 {
  animation:
    mobRise2 .7s var(--ease-spring) .05s forwards,
    mobBob2 4s ease-in-out .75s infinite;
}

@keyframes mobRise1 { from { transform: translateY(115%); } to { transform: translateY(-10%); } }
@keyframes mobRise2 { from { transform: translateY(125%); } to { transform: translateY(-6%); } }
@keyframes mobBob1 { 0%,100% { transform: translateY(-10%); } 50% { transform: translateY(-14%); } }
@keyframes mobBob2 { 0%,100% { transform: translateY(-6%); } 50% { transform: translateY(-11%); } }

.mob-cta .f1 { fill: var(--color-sky); }
.mob-cta .f2 { fill: var(--color-cyan-light); opacity: .5; }
.mob-cta:hover .wlbl { color: var(--color-navy-deep) !important; }

/* ── Overlay ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 42, 82, .6);
  backdrop-filter: blur(2px);
  z-index: 998;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s;
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
