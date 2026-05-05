<script setup>
function scrollToNext() {
  document.getElementById("quem-somos")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <!-- SVG clip-path para gota d'água — objectBoundingBox = responsivo -->
  <svg width="0" height="0" style="position:absolute;pointer-events:none" aria-hidden="true">
    <defs>
      <clipPath id="drop-clip" clipPathUnits="objectBoundingBox">
        <path d="M0.5,0.023 C0.5,0.023 0.05,0.346 0.05,0.615 C0.05,0.808 0.25,0.977 0.5,0.977 C0.75,0.977 0.95,0.808 0.95,0.615 C0.95,0.346 0.5,0.023 0.5,0.023Z" />
      </clipPath>
    </defs>
  </svg>

  <section class="hero" id="hero">
    <div class="hero-orbs" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    <div class="hero-grid" aria-hidden="true"></div>

    <div class="hero-inner">
      <!-- TEXTO -->
      <div class="hero-content">
        <div class="eyebrow">
          <span class="badge-pat">
            <span class="bdot"></span>
            Produto Patenteado — Exclusivo no Mercado
          </span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">Sua caixa d'água está</span>
          <span class="title-line">
            <span class="tacc">rachando</span>,<span class="tacc">vazando</span>
            ou a água chegou <em class="suja">suja</em>?
          </span>
        </h1>

        <p class="hero-sub">
          Esses são sinais de alerta — a caixa pode estar deteriorada por dentro,
          <strong>contaminando a água</strong> que sua família consome. Nosso
          revestimento com tecnologia <strong>patenteada</strong> e
          <strong>exclusiva</strong> resolve em
          <span class="sub-blue">1 dia</span>, com garantia e aprovação da
          vigilância sanitária.
        </p>

        <div class="hero-ctas">
          <a
            href="https://api.whatsapp.com/send?phone=5551992145030"
            target="_blank"
            rel="noopener"
            class="btn-hero"
          >
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
            Faça seu orçamento pelo Whatsapp
          </a>
        </div>
      </div>

      <!-- IMAGEM GOTA -->
      <div class="hero-image-col">
        <div class="drop-container">
          <div class="drop-wrap">
            <img
              src="../assets/revestimento1.jpg"
              alt="Interior de caixa d'água com revestimento de PVC concluído — paredes lisas e impermeáveis para armazenamento de água potável"
              class="hero-img"
              loading="eager"
            />
          </div>
          <svg
            class="drop-ring"
            viewBox="0 0 400 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M200,12 C200,12 20,180 20,320 C20,420 100,508 200,508 C300,508 380,420 380,320 C380,180 200,12 200,12 Z"
              stroke="rgba(0,184,240,0.4)"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>

    <button
      class="scroll-ind"
      aria-label="Rolar para próxima seção"
      @click="scrollToNext"
    >
      <svg
        class="drop-ico"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1 C10 1, 1 13, 1 18.5 C1 23.75 5.03 27 10 27 C14.97 27 19 23.75 19 18.5 C19 13 10 1 10 1 Z"
          fill="rgba(0,184,240,0.15)"
          stroke="rgba(0,184,240,0.75)"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
      <span class="slbl">ROLE</span>
    </button>
  </section>

  <!-- Wave break: animated — light hero → dark navy abaixo -->
  <div class="wave-break" aria-hidden="true">
    <div class="wv-layer wv-navy">
      <div class="wv-track">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 C360,30 720,110 1080,70 C1260,50 1380,80 1440,70 L1440,200 L0,200 Z" fill="#0D2A52"/>
        </svg>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 C360,30 720,110 1080,70 C1260,50 1380,80 1440,70 L1440,200 L0,200 Z" fill="#0D2A52"/>
        </svg>
      </div>
    </div>
    <div class="wv-layer wv-blue">
      <div class="wv-track">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,110 C320,75 640,145 960,110 C1200,80 1380,125 1440,110 L1440,200 L0,200 Z" fill="#1a3a6b"/>
        </svg>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,110 C320,75 640,145 960,110 C1200,80 1380,125 1440,110 L1440,200 L0,200 Z" fill="#1a3a6b"/>
        </svg>
      </div>
    </div>
    <div class="wv-layer wv-cyan">
      <div class="wv-track">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 C280,115 560,175 840,150 C1120,115 1320,165 1440,150 L1440,200 L0,200 Z" fill="#00B8F0"/>
        </svg>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 C280,115 560,175 840,150 C1120,115 1320,165 1440,150 L1440,200 L0,200 Z" fill="#00B8F0"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  background: #f2f6fb;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 68px 24px 120px;
}

/* Orbs — muito sutis no fundo claro (opacity 0.16 = Figma) */
.hero-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.16;
  animation: orbDrift ease-in-out infinite alternate;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: #00b8f0;
  left: -120px;
  top: -60px;
  animation-duration: 13s;
}
.orb-2 {
  width: 350px;
  height: 350px;
  background: #1a6bc4;
  right: -60px;
  bottom: 60px;
  animation-duration: 16s;
  animation-delay: -5s;
}
.orb-3 {
  width: 280px;
  height: 280px;
  background: #00c8f0;
  left: 38%;
  top: 25%;
  animation-duration: 11s;
  animation-delay: -8s;
}

@keyframes orbDrift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(25px, 18px) scale(1.07);
  }
}

/* Grid */
.hero-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(0, 184, 240, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 184, 240, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(
    ellipse 90% 90% at 30% 50%,
    black 0%,
    transparent 100%
  );
}

/* Layout */
.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: center;
}

/* Coluna de texto */
.hero-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* Badge */
.eyebrow {
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.05s forwards;
}

.badge-pat {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4285f4;
  background: rgba(0, 200, 240, 0.07);
  border: 1px solid #4285f4;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  padding: 6px 12px;
  border-radius: 2px;
}

.bdot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4285f4;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* H1 — Playfair Display, escuro, highlights coloridos */
.hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: clamp(32px, 5.5vw, 80px);
  line-height: 1.5;
  color: #0d1b2a;
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.12s forwards;
  display: flex;
  flex-direction: column;
}

.title-line {
  display: block;
}

.tacc {
  color: #1e90e8;
}

.suja {
  font-style: italic;
  font-weight: 500;
}

/* Subtítulo */
.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(14px, 1.6vw, 24px);
  font-weight: 400;
  line-height: 1.5;
  color: #0d2a52;
  max-width: 640px;
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.2s forwards;
}

.hero-sub strong {
  font-weight: 700;
}

.sub-blue {
  color: #1a6bc4;
}

/* CTA */
.hero-ctas {
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.28s forwards;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0d2a52;
  color: #fff;
  border: 1px solid #00b8f0;
  border-radius: 40px;
  padding: 18px 30px;
  min-height: 56px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}

.btn-hero:hover {
  background: #1a4a8a;
  box-shadow: 0 4px 20px rgba(0, 184, 240, 0.25);
}

.wico {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Coluna imagem */
.hero-image-col {
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.drop-container {
  position: relative;
  width: min(280px, 75vw);
  aspect-ratio: 400 / 520;
}

/* clip-path usa ID do SVG definido no topo do template */
.drop-wrap {
  width: 100%;
  height: 100%;
  clip-path: url(#drop-clip);
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Contorno da gota sobreposto à imagem */
.drop-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Scroll indicator */
.scroll-ind {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 2;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.drop-ico {
  width: 20px;
  height: 28px;
  animation: dropFloat 2s ease-in-out infinite;
}

@keyframes dropFloat {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.55;
  }
  50% {
    transform: translateY(7px);
    opacity: 1;
  }
}

.slbl {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #0d2a52;
}

/* Animação de entrada */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Wave break: animated — sits on top of the next section */
.wave-break {
  position: relative;
  z-index: 2;
  margin-top: -2px;
  margin-bottom: calc(clamp(90px, 15vw, 200px) * -1);
  overflow: hidden;
  height: clamp(90px, 15vw, 200px);
  background: linear-gradient(to bottom, #f2f6fb 0%, #0d2a52 100%);
}

.wv-layer {
  position: absolute;
  inset: 0;
}

.wv-track {
  display: flex;
  width: 200%;
  height: 100%;
}

.wv-track svg {
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  display: block;
}

.wv-navy .wv-track {
  animation: wvScroll 18s linear infinite;
}

.wv-blue .wv-track {
  animation: wvScroll 14s linear infinite reverse;
}

.wv-cyan .wv-track {
  animation: wvScroll 22s linear infinite;
}

@keyframes wvScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .wv-track { animation: none; }
}

/* ── Desktop ── */
@media (min-width: 900px) {
  .hero {
    padding: 68px 0 120px max(24px, calc((100vw - 1280px) / 2));
  }

  .hero-inner {
    max-width: none;
    margin: 0;
    padding: 72px 0 0;
    grid-template-columns: min(640px, 55%) 1fr;
    gap: 48px;
    min-height: calc(100vh - 68px);
    align-items: center;
  }

  .hero-title {
    font-size: clamp(40px, 4.5vw, 80px);
  }

  .hero-sub {
    font-size: clamp(16px, 1.5vw, 24px);
    max-width: none;
  }

  .hero-content {
    justify-content: center;
    padding: 48px 0;
  }

  .hero-image-col {
    height: 100%;
    min-height: 520px;
    align-self: stretch;
    margin-top: 0;
    overflow: visible;
  }

  .drop-container {
    width: min(480px, 42vw);
    height: 100%;
    aspect-ratio: unset;
  }

  .drop-wrap {
    height: 100%;
  }
}

@media (min-width: 1024px) {
  .hero-inner {
    gap: 64px;
  }

  .hero-title {
    font-size: clamp(48px, 4vw, 80px);
  }
}

@media (max-width: 479px) {
  .btn-hero {
    width: 100%;
    justify-content: center;
    padding: 14px 18px;
    font-size: 13px;
    min-height: 48px;
  }
}
</style>
