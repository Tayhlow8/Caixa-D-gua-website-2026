<script setup>
function scrollToNext() {
  document.getElementById("quem-somos")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
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
          Sua caixa d'água está
          <span class="tacc">rachando,</span>
          <span class="tacc">vazando</span>
          ou a água chegou suja?
        </h1>

        <p class="hero-sub">
          Esses são sinais de alerta — a caixa pode estar deteriorada por
          dentro, contaminando a água que sua família consome. Nosso
          revestimento com <strong>tecnologia patenteada e exclusiva</strong>
          resolve em 1 dia, com garantia e aprovação ANVISA.
        </p>

        <div class="hero-ctas">
          <a
            href="https://api.whatsapp.com/send?phone=5551992145030"
            target="_blank"
            rel="noopener"
            class="btn-hero btn-p"
          >
            <svg class="wsv2" viewBox="0 0 600 60" preserveAspectRatio="none">
              <g class="hg1">
                <path
                  class="hf1"
                  d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                />
              </g>
              <g class="hg2">
                <path
                  class="hf2"
                  d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                />
              </g>
            </svg>
            <span class="hl">
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
            </span>
          </a>
        </div>

        <div class="hero-trust">
          <div class="titem">
            <span class="tnum">30<span class="tplus">+</span></span>
            <span class="tlbl">anos de<br />experiência</span>
          </div>
          <div class="titem">
            <span class="tnum">1</span>
            <span class="tlbl">dia para<br />instalação</span>
          </div>
          <div class="titem">
            <span class="tnum">RS<span class="tplus"> · </span>SC</span>
            <span class="tlbl">estados<br />atendidos</span>
          </div>
          <div class="titem">
            <svg
              style="width: 20px; height: 20px"
              viewBox="0 0 24 24"
              fill="#00B8F0"
              aria-hidden="true"
            >
              <path
                d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
              />
            </svg>
            <span class="tlbl">aprovado<br />ANVISA</span>
          </div>
        </div>

        <div class="hero-pain">
          <p class="ptitle">Você identificou algum desses sinais?</p>
          <ul class="plist">
            <li class="pitem">
              <span class="pcheck">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path
                    d="M1 3l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Rachadura ou trinca na caixa d'água
            </li>
            <li class="pitem">
              <span class="pcheck">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path
                    d="M1 3l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Água com gosto, cor ou cheiro estranho
            </li>
            <li class="pitem">
              <span class="pcheck">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path
                    d="M1 3l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Umidade no teto ou paredes do imóvel
            </li>
            <li class="pitem">
              <span class="pcheck">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path
                    d="M1 3l2 2 4-4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Reservatório antigo sem manutenção
            </li>
          </ul>
        </div>
      </div>

      <!-- IMAGEM -->
      <div class="hero-image-col">
        <img
          src="../assets/caixa dagua new.png"
          alt="Reservatório deteriorado com rachaduras e infiltração"
          class="hero-img"
          loading="eager"
        />
        <span class="img-label">Reservatório depois do revestimento</span>
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
      <span class="slbl">rolar</span>
    </button>
  </section>

  <!-- Wave break -->
  <div class="wave-break">
    <svg
      viewBox="0 0 1440 160"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <!-- Horizontal gradient matching the hero bottom edge exactly:
             155deg gradient means bottom-left=#1A4A8A, center=#0D2A52, right=#0A1E35 -->
        <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1A4A8A" />
          <stop offset="45%" stop-color="#0D2A52" />
          <stop offset="100%" stop-color="#0A1E35" />
        </linearGradient>
      </defs>
      <!-- Layer 1 — light grey-blue, deepest/back, widest coverage -->
      <path
        d="M0,100 C220,155 440,55 660,108 C880,161 1060,48 1260,105 C1380,140 1430,88 1440,100 L1440,0 L0,0 Z"
        fill="rgba(180,205,230,0.28)"
      />
      <!-- Layer 2 — dark navy, middle depth -->
      <path
        d="M0,80 C180,138 380,25 580,82 C780,139 980,20 1180,78 C1330,120 1410,58 1440,80 L1440,0 L0,0 Z"
        fill="#0D2A52"
      />
      <!-- Layer 3 — hero gradient, front/top, seamless continuation of hero bg -->
      <path
        d="M0,52 C150,105 320,6 480,55 C640,104 800,10 960,56 C1120,102 1300,14 1440,50 L1440,0 L0,0 Z"
        fill="url(#wg1)"
      />
    </svg>
  </div>
</template>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(
      ellipse 100% 70% at 15% 110%,
      rgba(26, 106, 196, 0.5) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse 70% 50% at 92% -5%,
      rgba(0, 184, 240, 0.25) 0%,
      transparent 50%
    ),
    linear-gradient(155deg, #0a1e35 0%, #0d2a52 45%, #1a4a8a 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 68px 24px 120px;
}

/* Orbs */
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
  background: var(--color-sky);
  left: -120px;
  top: -60px;
  animation-duration: 13s;
}
.orb-2 {
  width: 350px;
  height: 350px;
  background: var(--color-cobalt);
  right: -60px;
  bottom: 60px;
  animation-duration: 16s;
  animation-delay: -5s;
}
.orb-3 {
  width: 280px;
  height: 280px;
  background: var(--color-cyan);
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
  color: var(--color-cyan);
  background: rgba(0, 200, 240, 0.07);
  border: 1px solid rgba(0, 200, 240, 0.22);
  padding: 6px 12px;
  border-radius: 2px;
}

.bdot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-cyan);
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

/* H1 */
.hero-title {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: clamp(28px, 7.5vw, 42px);
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: #fff;
  margin-bottom: 22px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.12s forwards;
  font-synthesis: none;
}

.tacc {
  color: var(--color-sky);
  display: inline;
}

/* Subtítulo */
.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(
    14px,
    3.5vw,
    16px
  ); /* mobile: proporcional; desktop override abaixo */
  font-weight: 300;
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.58);
  max-width: 100%;
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.2s forwards;
}

.hero-sub strong {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
}

/* CTAs */
.hero-ctas {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.28s forwards;
}

@media (min-width: 480px) {
  .hero-ctas {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.btn-hero {
  position: relative;
  overflow: hidden;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 2px;
  cursor: pointer;
  isolation: isolate;
  padding: 17px 28px;
  min-height: 56px;
  white-space: normal;
  max-width: 100%;
}

.btn-p {
  background: var(--color-navy-deep);
  color: #fff;
  border: 2px solid var(--color-sky);
}
.btn-s {
  background: transparent;
  color: #fff;
  border: 2px solid var(--color-sky);
}

/* Wave SVG container */
.btn-hero .wsv2 {
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

.btn-hero:hover .wsv2 {
  opacity: 1;
}

/* Both buttons: same sky fills as the navbar CTA */
.btn-hero .hf1 {
  fill: var(--color-sky);
}
.btn-hero .hf2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}

/* Label: fast return to white on exit */
.btn-hero .hl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: color 0.15s ease;
}

/* On hover: start darkening text immediately so it's dark before wave covers it */
.btn-hero:hover .hl {
  color: var(--color-navy-deep);
  transition: color 0.4s ease 0s;
}

/* Resting: waves off-screen. Transition handles smooth exit on unhover. */
.btn-hero .hg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.btn-hero .hg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

/* Hover: 1) rise from bottom once  2) bob forever after rise completes */
.btn-hero:hover .hg1 {
  animation:
    waveRise1 0.65s var(--ease-spring) forwards,
    waveBob1 3.2s ease-in-out 0.65s infinite;
}
.btn-hero:hover .hg2 {
  animation:
    waveRise2 0.7s var(--ease-spring) 0.05s forwards,
    waveBob2 4s ease-in-out 0.75s infinite;
}

.wico {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Trust strip */
.hero-trust {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 12px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.36s forwards;
}

.titem {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 16px;
  border-right: 0.5px solid rgba(255, 255, 255, 0.1);
}

.titem:first-child {
  padding-left: 0;
}
.titem:last-child {
  border-right: none;
}

.tnum {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
  color: var(--color-sky);
  line-height: 1;
}

.tplus {
  font-size: 14px;
}

.tlbl {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.4;
}

/* Pain points */
.hero-pain {
  display: block;
  margin-top: 28px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(0, 184, 240, 0.1);
  border-radius: 4px;
  padding: 18px 20px;
  opacity: 0;
  animation: fadeUp 0.7s var(--ease-spring) 0.44s forwards;
}

.ptitle {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-sky);
  margin-bottom: 12px;
}

.plist {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pitem {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-body);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  line-height: 1.4;
}

.pcheck {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  flex-shrink: 0;
  background: rgba(0, 184, 240, 0.12);
  border: 1px solid rgba(0, 184, 240, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-sky);
}

/* Coluna imagem */
.hero-image-col {
  position: relative;
  margin-top: 40px;
  height: 260px;
  border-radius: 4px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Máscara mobile */
.hero-image-col::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    var(--color-navy-deep) 0%,
    rgba(13, 42, 82, 0.5) 25%,
    transparent 65%,
    rgba(13, 42, 82, 0.3) 100%
  );
}

.img-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(13, 42, 82, 0.55);
  padding: 4px 10px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
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
  color: rgba(255, 255, 255, 0.75);
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

/* Wave break */
.wave-break {
  position: relative;
  margin-top: -2px;
  line-height: 0;
  background: linear-gradient(to bottom, #1a4a8a 0%, #ffffff 55%);
}

.wave-break svg {
  display: block;
  width: 100%;
  height: clamp(70px, 10vw, 130px);
}

/* ── Desktop ── */
@media (min-width: 900px) {
  .hero {
    padding-right: 0;
  }

  .hero-inner {
    max-width: none;
    margin: 0;
    grid-template-columns: min(640px, calc(50% - 24px)) 1fr;
    gap: 48px;
    padding: 72px 0 0;
    min-height: calc(100vh - 68px);
    align-items: center;
  }

  /* H1: menor para caber na coluna de 50% sem quebrar demais */
  .hero-title {
    font-size: clamp(30px, 3.2vw, 44px);
  }

  /* Subtítulo: tamanho fixo, sem max-width artificial */
  .hero-sub {
    font-size: 15px;
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
    border-radius: 4px 0 0 4px;
  }

  /* Máscara desktop: dissolve apenas da esquerda, sem escurecer a borda direita */
  .hero-image-col::before {
    background: linear-gradient(
      to right,
      var(--color-navy-deep) 0%,
      rgba(13, 42, 82, 0.55) 28%,
      transparent 65%
    );
  }

  .hero-pain {
    display: block;
  }
}

@media (min-width: 1024px) {
  .hero-inner {
    padding: 80px 0 0;
    gap: 64px;
  }

  .hero-title {
    font-size: clamp(36px, 3.2vw, 46px);
  }
}

@media (max-width: 479px) {
  .btn-hero {
    width: 100%;
    padding: 14px 18px;
    font-size: 13px;
    min-height: 48px;
  }
  .hero-ctas {
    flex-direction: column;
  }
}

@media (min-width: 900px) {
  .btn-hero {
    white-space: nowrap;
  }
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
</style>
