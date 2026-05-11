<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import imgSlide1 from "../assets/revestimento1.jpg";
import imgSlide2 from "../assets/revestimento2.jpg";
import imgSlide3 from "../assets/revestimento8.jpg";
import imgSlide4 from "../assets/Revestimento9.jpg";
import imgImpermeabilizacao from "../assets/foto chapa.jpg";
import imgTampas from "../assets/tampa nova.jpg";
import imgLimpeza from "../assets/antes3.JPG";

const SLIDES = [
  {
    label:
      "Interior de caixa d'água antes do revestimento — paredes com deterioração e manchas",
    img: imgLimpeza,
  },
  {
    label:
      "Técnico aplicando revestimento de PVC em caixa d'água durante o processo de instalação",
    img: imgSlide2,
  },
  {
    label:
      "Detalhe do sistema de ancoragem do revestimento de PVC fixado nas paredes do reservatório",
    img: imgSlide3,
  },
  {
    label:
      "Caixa d'água com revestimento de PVC finalizado — paredes lisas, impermeáveis e prontas para uso",
    img: imgSlide1,
  },
];

const APP_TAGS = [
  "Caixas d'água",
  "Reservatórios",
  "Cisternas",
  "Esterqueiras",
  "Tanques aquicultura",
  "Biodigestores",
  "Lagoas",
  "Agronegócio",
  "Construção civil",
];

const current = ref(0);
const trackEl = ref(null);
let timer = null;

function goTo(n) {
  current.value = ((n % SLIDES.length) + SLIDES.length) % SLIDES.length;
  if (trackEl.value)
    trackEl.value.style.transform = `translateX(-${current.value * 100}%)`;
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current.value + 1), 4000);
}

function prev() {
  goTo(current.value - 1);
  resetTimer();
}
function next() {
  goTo(current.value + 1);
  resetTimer();
}
function jumpTo(i) {
  goTo(i);
  resetTimer();
}

let tx = 0;
const onTouchStart = (e) => {
  tx = e.touches[0].clientX;
};
const onTouchEnd = (e) => {
  const d = tx - e.changedTouches[0].clientX;
  if (Math.abs(d) > 40) {
    goTo(d > 0 ? current.value + 1 : current.value - 1);
    resetTimer();
  }
};

const onKeydown = (e) => {
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
};

onMounted(() => {
  resetTimer();
  document.addEventListener("keydown", onKeydown);
});
onUnmounted(() => {
  clearInterval(timer);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <section class="services" id="servicos">
    <!-- HEADER — inside max-width container -->
    <div class="services-inner">
      <span class="sec-eyebrow">06 · Serviços</span>
      <h2 class="sec-title">
        Soluções completas para<br /><span>seu reservatório</span>
      </h2>
      <p class="sec-sub">
        Do diagnóstico ao acabamento — tecnologia exclusiva e mão de obra
        especializada para garantir água limpa, estrutura protegida e zero
        infiltração.
      </p>
    </div>

    <!-- ══ FEATURED CARD — outside services-inner to bleed right on desktop ══ -->
    <div class="feat-card">
      <!-- COLUNA ESQUERDA: pitch principal -->
      <div class="feat-left">
        <span class="feat-eyebrow">
          <span class="feat-dot"></span>
          Produto exclusivo · Registro de Propriedade
        </span>

        <h3 class="feat-title">
          Revestimento Interno<br />em <span>PVC Flexível</span>
        </h3>

        <p class="feat-desc">
          Impermeabilização da caixa d'água com revestimento em geomembrana de
          PVC flexível e atóxico, fabricado sob medida para o seu reservatório.
          Instalada em um único dia, sem obras e sem deixar a edificação sem
          água.
        </p>

        <ul class="feat-list">
          <li>Não descasca, não deforma, não solta resíduos na água</li>
          <li>Solda de alta frequência — fusão do PVC, sem emendas</li>
          <li>Material inoxidável e fixação com parafusos de aço inox</li>
          <li>
            Flexibilidade total — se molda a qualquer formato de reservatório
          </li>
          <li>Elimina a umidade nas paredes da caixa d'água</li>
          <li>Fácil manutenção — furos e rasgos reparáveis sem substituição</li>
          <li>
            Serviço inclui sanitização e Certificado de Limpeza da Vigilância
            Sanitária Municipal
          </li>
        </ul>

        <a href="/impermeabilizacao" class="feat-cta">
          <svg
            class="feat-cta__wave"
            viewBox="0 0 600 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g class="fcwg1">
              <path
                class="fcwf1"
                d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
              />
            </g>
            <g class="fcwg2">
              <path
                class="fcwf2"
                d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
              />
            </g>
          </svg>
          <span class="feat-cta__label">
            Saiba mais sobre impermeabilização
          </span>
        </a>
      </div>

      <!-- COLUNA DIREITA: carrossel de fotos -->
      <!-- Substituir .slide-ph por <img :src="..." :alt="slide.label" /> quando as fotos estiverem disponíveis -->
      <div class="feat-carousel-col">
        <div
          class="carousel"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <div class="carousel-track" ref="trackEl">
            <div v-for="(slide, i) in SLIDES" :key="i" class="carousel-slide">
              <img v-if="slide.img" :src="slide.img" :alt="slide.label" />
              <div v-else class="slide-ph">
                <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span>{{ slide.label }}</span>
              </div>
              <div class="slide-overlay"></div>
              <span class="slide-caption">{{ slide.label }}</span>
            </div>
          </div>

          <button
            class="carousel-btn carousel-btn--prev"
            @click="prev"
            aria-label="Ver foto anterior do processo de revestimento"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            class="carousel-btn carousel-btn--next"
            @click="next"
            aria-label="Ver próxima foto do processo de revestimento"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div class="carousel-dots">
          <button
            v-for="(_, i) in SLIDES"
            :key="i"
            class="carousel-dot"
            :class="{ active: i === current }"
            @click="jumpTo(i)"
            :aria-label="`Exibir foto ${i + 1} do processo de revestimento`"
          ></button>
        </div>

        <span class="carousel-counter"
          >{{ current + 1 }} / {{ SLIDES.length }}</span
        >
      </div>

      <!-- SPECS STRIP — spans full card width below both columns -->
      <div class="feat-specs">
        <div class="tech-block">
          <div class="tech-label">Prazo de execução</div>
          <div class="tech-value"><span>1 dia</span></div>
          <div class="tech-sub">Sem obras. Edificação não fica sem água.</div>
        </div>

        <div class="tech-block tech-block--guarantee">
          <div class="tech-label">Garantia contratual</div>
          <div class="tech-value"><span>5 anos</span></div>
          <div class="tech-sub">
            Manta reparável em caso de danos acidentais.
          </div>
        </div>

        <div class="tech-block">
          <div class="tech-label">Material</div>
          <div class="tech-value">Geo membrana <span>PVC Flexível</span></div>
          <div class="tech-sub">
            Atóxico · Sem porosidade · Cor cinza claro · Inox
          </div>
        </div>

        <div class="tech-block">
          <div class="tech-label">Certificação</div>
          <div class="tech-value">LIMPEZA <span>·</span> INPI</div>
          <div class="tech-sub">
            Certificado de limpeza pela Vigilância Sanitária Municipal. Registro
            de propriedade industrial.
          </div>
        </div>

        <div class="tech-block">
          <div class="tech-label">Orçamento</div>
          <div class="tech-value">Vistoria <span>gratuita</span></div>
          <div class="tech-sub">
            Sob medida. Técnico avalia no local sem custo.
          </div>
        </div>

        <div class="tech-block tech-block--apps">
          <span class="apps-label">Aplicações</span>
          <div class="apps-tags">
            <span v-for="tag in APP_TAGS" :key="tag" class="app-tag">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- /feat-card -->

    <!-- ══ SECONDARY GRID: 3 serviços complementares ══ -->
    <div class="services-inner services-inner--grid">
      <div class="sec-grid">
        <!-- 02 · Impermeabilização Externa -->
        <article class="svc-card">
          <span class="card-index">02 · Impermeabilização</span>

          <div class="card-photo">
            <img
              :src="imgImpermeabilizacao"
              alt="Manta asfáltica com película de alumínio aplicada sobre a laje externa do reservatório — proteção contra infiltração, umidade e variação térmica"
            />
          </div>

          <h3 class="card-title">Impermeabilização<br />Externa</h3>

          <p class="card-desc">
            Aplicação de manta asfáltica com película de alumínio diretamente
            sobre a laje superior externa da caixa d'água. Protege a estrutura
            contra infiltração vinda de fora — umidade, chuva e variação
            térmica.
          </p>

          <div class="card-meta">
            <span class="card-badge card-badge--guarantee"
              >Garantia 5 anos</span
            >
            <span class="card-badge card-badge--material">Manta asfáltica</span>
            <span class="card-badge card-badge--material">Película alum.</span>
          </div>

          <a href="#contato" class="card-link">
            Solicitar orçamento
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </article>

        <!-- 03 · Tampas -->
        <article class="svc-card">
          <span class="card-index">03 · Tampas</span>

          <div class="card-photo">
            <img
              :src="imgTampas"
              alt="Tampa de alumínio sob medida com presilha de fixação instalada em caixa d'água — vedação total contra contaminação externa e entrada de luz"
            />
          </div>

          <h3 class="card-title">Tampas de Vedação<br />sob Medida</h3>

          <p class="card-desc">
            Tampas em alumínio com presilha de fixação, produzidas sob medida
            para caixas d'água e reservatórios. Vedação total contra
            contaminação externa e entrada de luz.
          </p>

          <div class="card-meta">
            <span class="card-badge card-badge--time">Pronto em 2–3 dias</span>
            <span class="card-badge card-badge--guarantee">Garantia 1 ano</span>
            <span class="card-badge card-badge--material">Alumínio</span>
          </div>

          <a href="#contato" class="card-link">
            Solicitar orçamento
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </article>

        <!-- 04 · Limpeza -->
        <article class="svc-card">
          <span class="card-index">04 · Limpeza</span>

          <div class="card-photo">
            <img
              :src="imgLimpeza"
              alt="Técnico realizando higienização e sanitização interna de caixa d'água com hipoclorito de sódio — inclui certificado de limpeza ANVISA"
            />
          </div>

          <h3 class="card-title">Limpeza e<br />Higienização</h3>

          <p class="card-desc">
            Esvaziamento, escovação interna com hipoclorito de sódio e enxágue
            completo sem uso de sabão ou químicos agressivos. Ao final,
            sanitização e emissão de Certificado de Limpeza com validade de 1
            ano para residências e 6 meses em comércios.
          </p>

          <div class="card-meta">
            <span class="card-badge card-badge--guarantee"
              >Certificado 1 ano</span
            >
            <span class="card-badge card-badge--material">ANVISA</span>
            <span class="card-badge card-badge--material"
              >Hipoclorito NaOH</span
            >
          </div>

          <a href="#contato" class="card-link">
            Solicitar orçamento
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </article>
      </div>
    </div>
    <!-- /sec-grid -->
  </section>
</template>

<style scoped>
<style scoped>
/* ══════════════════════════════════════════
   SECTION WRAPPER
══════════════════════════════════════════ */
.services {
  background: var(--color-white);
  padding: var(--space-16) var(--space-5);
  position: relative;
  overflow: hidden;
}

.services::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.06) 1px,
    transparent 1px
  );
  background-size: 32px 32px;
  pointer-events: none;
}

.services::after {
  content: "";
  position: absolute;
  top: -120px;
  right: -160px;
  width: 480px;
  height: 480px;
  background: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
}

.services-inner {
  position: relative;
  max-width: var(--container-xl);
  margin: 40px auto;
  padding-inline: 16px;
}

.services-inner--grid {
  margin-top: var(--space-3);
}

/* ══ HEADER ══ */
.sec-eyebrow {
  font-family: var(--font-mono);
  font-size: 14px; /* era var(--text-xs) = 14px — ok, mas explícito */
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  display: block;
  margin-bottom: 10px;
}

.sec-title {
  font-family: var(--font-wave);
  font-size: clamp(24px, 6vw, 40px);
  font-weight: 300;
  color: var(--color-navy-deep);
  letter-spacing: 0.01em;
  line-height: var(--leading-tight);
  margin-bottom: 12px;
}

.sec-title span {
  color: var(--color-sky);
}

.sec-sub {
  font-family: var(--font-body);
  font-size: 17px; /* era 15px */
  font-weight: 500; /* era var(--weight-light) = 300 */
  color: var(--color-steel);
  line-height: var(--leading-relaxed);
  max-width: 520px;
  margin-bottom: var(--space-10);
}

/* ══════════════════════════════════════════
   FEATURED CARD
══════════════════════════════════════════ */
.feat-card {
  background: var(--color-navy-deep);
  border-radius: var(--radius-sm);
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-bottom: var(--space-3);
  position: relative;
  overflow: hidden;
}

.feat-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 184, 240, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 184, 240, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.feat-card::after {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 320px;
  height: 320px;
  background: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.1) 0%,
    transparent 65%
  );
  border-radius: 50%;
  pointer-events: none;
}

/* ── esquerda ── */
.feat-left {
  position: relative;
  z-index: 1;
}

.feat-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 14px; /* era 12px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-sky);
  background: rgba(0, 184, 240, 0.08);
  border: 0.5px solid rgba(0, 184, 240, 0.28);
  padding: 5px 12px;
  border-radius: var(--radius-xs);
  margin-bottom: var(--space-5);
}

.feat-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-sky);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

.feat-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 5vw, 32px); /* era clamp(20px, 5vw, 30px) */
  font-weight: var(--weight-black);
  color: var(--color-white);
  letter-spacing: -0.025em;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.feat-title span {
  color: var(--color-sky);
}

.feat-desc {
  font-family: var(--font-body);
  font-size: 16px; /* era 15px */
  font-weight: 500; /* era var(--weight-light) = 300 */
  color: rgba(255, 255, 255, 0.75); /* era 0.65 — mais contraste */
  line-height: 1.75;
  margin-bottom: var(--space-6);
}

.feat-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.feat-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 16px; /* era 15px */
  font-weight: 500; /* era var(--weight-light) = 300 */
  color: rgba(255, 255, 255, 0.82); /* era 0.72 — mais contraste */
  line-height: 1.5;
}

.feat-list li::before {
  content: "";
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(0, 184, 240, 0.12);
  border: 1px solid rgba(0, 184, 240, 0.35);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%2300B8F0' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  flex-shrink: 0;
  margin-top: 1px;
}

.feat-cta {
  position: relative;
  overflow: hidden;
  contain: paint;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: 13px; /* era 12px */
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-navy-deep);
  background: var(--color-sky);
  padding: 14px 22px;
  border-radius: 40px;
  text-decoration: none;
  width: fit-content;
  min-height: 48px;
}

.feat-cta__wave {
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

.feat-cta:hover .feat-cta__wave {
  opacity: 1;
}

.fcwf1 {
  fill: var(--color-cyan);
}
.fcwf2 {
  fill: rgba(255, 255, 255, 0.35);
}

.fcwg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.fcwg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.feat-cta:hover .fcwg1 {
  animation:
    fcRise1 0.65s var(--ease-spring) forwards,
    fcBob1 3.2s ease-in-out 0.65s infinite;
}
.feat-cta:hover .fcwg2 {
  animation:
    fcRise2 0.7s var(--ease-spring) 0.05s forwards,
    fcBob2 4s ease-in-out 0.75s infinite;
}

.feat-cta:focus { outline: none; }
.feat-cta:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-sky);
}

.feat-cta__label {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.feat-cta__label svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@keyframes fcRise1 {
  from {
    transform: translateY(115%);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes fcRise2 {
  from {
    transform: translateY(125%);
  }
  to {
    transform: translateY(-6%);
  }
}
@keyframes fcBob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes fcBob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

/* ── carrossel ── */
.feat-carousel-col {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.carousel {
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 16/9;
  cursor: pointer;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.48s var(--ease-spring);
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
}

.slide-ph {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px dashed rgba(0, 184, 240, 0.18);
}

.slide-ph svg {
  width: 28px;
  height: 28px;
  stroke: rgba(0, 184, 240, 0.3);
  stroke-width: 1;
}

.slide-ph span {
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(0, 184, 240, 0.3);
  text-align: center;
  line-height: 1.6;
  padding: 0 12px;
}

.carousel-slide img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: linear-gradient(
    to top,
    rgba(13, 42, 82, 0.7) 0%,
    transparent 100%
  );
  pointer-events: none;
}

.slide-caption {
  position: absolute;
  bottom: 10px;
  left: 12px;
  right: 12px;
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65); /* era 0.55 */
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  background: rgba(13, 42, 82, 0.7);
  border: 0.5px solid rgba(0, 184, 240, 0.28);
  border-radius: var(--radius-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition:
    background var(--dur-fast),
    border-color var(--dur-fast);
}

.carousel-btn:hover {
  background: rgba(0, 184, 240, 0.18);
  border-color: var(--color-sky);
}

.carousel-btn svg {
  width: 12px;
  height: 12px;
}
.carousel-btn--prev {
  left: 8px;
}
.carousel-btn--next {
  right: 8px;
}

.carousel-dots {
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
}

.carousel-dot {
  width: 18px;
  height: 3px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  border: none;
  padding: 0;
  flex-shrink: 0;
  transition:
    background var(--dur-base),
    width var(--dur-base) var(--ease-spring);
}

.carousel-dot.active {
  background: var(--color-sky);
  width: 28px;
}

.carousel-counter {
  font-family: var(--font-mono);
  font-size: 12px; /* era 9px */
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.45); /* era 0.30 */
  text-align: center;
}

/* ── specs strip ── */
.feat-specs {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.tech-block {
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-sm);
  padding: 18px 16px;
}

.tech-block--guarantee {
  background: rgba(0, 212, 170, 0.07);
  border-color: rgba(0, 212, 170, 0.2);
}

.tech-block--apps {
  grid-column: 1 / -1;
}

.tech-label {
  font-family: var(--font-mono);
  font-size: 14px; /* era 12px */
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: 6px;
}

.tech-value {
  font-family: var(--font-display);
  font-size: 18px; /* era 17px */
  font-weight: var(--weight-bold);
  color: var(--color-white);
  line-height: 1.3;
}

.tech-value span {
  color: var(--color-sky);
}
.tech-block--guarantee .tech-value span {
  color: var(--color-lacre);
}

.tech-sub {
  font-family: var(--font-body);
  font-size: 14px; /* era 15px — aqui pode ser menor, é detalhe técnico */
  font-weight: 500; /* era var(--weight-light) = 300 */
  color: rgba(255, 255, 255, 0.65); /* era 0.55 */
  margin-top: 4px;
  line-height: 1.5;
}

.apps-label {
  font-family: var(--font-mono);
  font-size: 14px; /* era 12px */
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: var(--space-2);
  display: block;
}

.apps-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.app-tag {
  font-family: var(--font-mono);
  font-size: 12px; /* era 12px — ok, é tag pequena mesmo */
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.8); /* era 0.7 */
  background: rgba(255, 255, 255, 0.06);
  border: 0.5px solid rgba(255, 255, 255, 0.14);
  padding: 5px 11px;
  border-radius: var(--radius-xs);
}

/* ══════════════════════════════════════════
   SECONDARY GRID
══════════════════════════════════════════ */
.sec-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.svc-card {
  background: var(--color-fog);
  border: 0.5px solid var(--color-mist);
  border-radius: var(--radius-sm);
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: default;
  transition:
    transform var(--dur-base) var(--ease-spring),
    border-color var(--dur-fast),
    box-shadow var(--dur-base);
}

.svc-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-cyan-light);
  box-shadow: var(--shadow-lg);
}

.svc-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-sky), var(--color-cyan));
  opacity: 0;
  transition: opacity var(--dur-fast);
}

.svc-card:hover::before {
  opacity: 1;
}

.card-index {
  font-family: var(--font-mono);
  font-size: 14px; /* era 9px — absurdo */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: var(--space-4);
  display: block;
}

.card-photo {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--radius-xs);
  overflow: hidden;
  margin-bottom: var(--space-4);
  background: var(--color-mist);
  border: 0.5px dashed var(--color-cyan-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-ph {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.photo-ph svg {
  width: 22px;
  height: 22px;
  stroke: var(--color-cyan-light);
  stroke-width: 1;
}

.photo-ph span {
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-iron);
  text-align: center;
  line-height: 1.6;
  padding: 0 8px;
}

.card-title {
  font-family: var(--font-wave);
  font-size: clamp(20px, 2.5vw, 24px); /* era clamp(18px, 2.5vw, 22px) */
  font-weight: 300;
  color: var(--color-navy-deep);
  letter-spacing: 0.01em;
  line-height: var(--leading-snug);
  margin-bottom: 10px;
}

.card-desc {
  font-family: var(--font-body);
  font-size: 16px; /* era 15px */
  font-weight: 500; /* era var(--weight-light) = 300 */
  color: var(--color-steel);
  line-height: 1.7;
  flex: 1;
  margin-bottom: var(--space-4);
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.card-badge {
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 8px; /* era 3px 7px */
  border-radius: var(--radius-xs);
}

.card-badge--time {
  background: var(--color-cyan-ghost);
  color: var(--color-cobalt);
  border: 0.5px solid var(--color-cyan-pale);
}
.card-badge--guarantee {
  background: var(--color-lacre-light);
  color: #085041;
  border: 0.5px solid rgba(0, 212, 170, 0.25);
}
.card-badge--material {
  background: var(--color-fog);
  color: var(--color-iron);
  border: 0.5px solid var(--color-mist);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 14px; /* era 9px */
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-cobalt);
  text-decoration: none;
  padding-top: var(--space-4);
  border-top: 0.5px solid var(--color-mist);
  transition:
    color var(--dur-fast),
    gap var(--dur-fast);
  margin-top: auto;
}

.card-link:hover {
  color: var(--color-sky);
  gap: 10px;
}
.card-link:focus { outline: none; }
.card-link:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-fog), 0 0 0 4px var(--color-navy-deep);
  border-radius: 2px;
}

.card-link svg {
  width: 14px; /* era 12px */
  height: 14px;
  stroke: currentColor;
  fill: none;
  flex-shrink: 0;
}

/* ══════════════════════════════════════════
   480px
══════════════════════════════════════════ */
@media (min-width: 480px) {
  .sec-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* ══════════════════════════════════════════
   768px
══════════════════════════════════════════ */
@media (min-width: 768px) {
  .services {
    padding: 80px 32px;
  }

  .services-inner {
    padding-inline: 0;
  }

  .sec-sub {
    margin-bottom: var(--space-12);
  }

  .feat-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    padding: 0;
    gap: 0;
  }

  .feat-left {
    grid-column: 1;
    grid-row: 1;
    padding: 36px 28px 32px 32px;
  }

  .feat-carousel-col {
    grid-column: 2;
    grid-row: 1;
    padding: 20px 20px 16px;
    border-left: 0.5px solid rgba(255, 255, 255, 0.1);
  }

  .carousel {
    aspect-ratio: 3/4;
  }

  .feat-specs {
    grid-column: 1 / -1;
    grid-row: 2;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 0.5px solid rgba(255, 255, 255, 0.08);
  }

  .feat-specs .tech-block {
    border-radius: 0;
    border: none;
    border-right: 0.5px solid rgba(255, 255, 255, 0.07);
    padding: 16px 18px;
    background: rgba(255, 255, 255, 0.025);
  }

  .feat-specs .tech-block--guarantee {
    background: rgba(0, 212, 170, 0.04);
  }
  .feat-specs .tech-block:nth-child(3n) {
    border-right: none;
  }

  .feat-specs .tech-block--apps {
    grid-column: 1 / -1;
    border-top: 0.5px solid rgba(255, 255, 255, 0.08);
    border-right: none;
    padding: 12px 18px;
  }
}

/* ══════════════════════════════════════════
   1024px
══════════════════════════════════════════ */
@media (min-width: 1024px) {
  .services {
    padding: 96px 0 96px 24px;
  }
  .services-inner {
    padding-right: 24px;
  }

  .feat-card {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    border-radius: var(--radius-sm) 0 0 var(--radius-sm);
    margin-bottom: 0;
  }

  .feat-left {
    grid-column: 1;
    grid-row: 1;
    padding: 52px 48px 44px max(24px, calc((100% - 1304px) / 2));
  }

  .feat-carousel-col {
    grid-column: 2;
    grid-row: 1;
    padding: 0;
    gap: 0;
    border-left: 0.5px solid rgba(255, 255, 255, 0.12);
  }

  .carousel {
    flex: 1;
    min-height: 480px;
    border-radius: 0;
    border: none;
    aspect-ratio: unset;
  }

  .carousel-dots {
    display: none;
  }
  .carousel-counter {
    display: none;
  }

  .feat-specs {
    grid-column: 1 / -1;
    grid-row: 2;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    border-top: 0.5px solid rgba(255, 255, 255, 0.1);
    padding-left: max(24px, calc((100% - 1304px) / 2));
  }

  .feat-specs .tech-block:nth-child(3n) {
    border-right: 0.5px solid rgba(255, 255, 255, 0.07);
  }

  .feat-specs .tech-block {
    border-radius: 0;
    border: none;
    border-right: 0.5px solid rgba(255, 255, 255, 0.07);
    padding: 20px;
    background: rgba(255, 255, 255, 0.02);
  }

  .feat-specs .tech-block--guarantee {
    background: rgba(0, 212, 170, 0.04);
  }
  .feat-specs .tech-block:nth-child(5) {
    border-right: none;
  }

  .feat-specs .tech-block--apps {
    grid-column: 1 / -1;
    border-top: 0.5px solid rgba(255, 255, 255, 0.07);
    border-right: none;
    padding: 14px 20px;
  }

  .sec-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .services-inner--grid {
    margin-top: var(--space-6);
  }
}
</style>
