<script setup>
import { ref, onMounted } from "vue";
import imgBefore from "../assets/antes.jpg";
import imgAfter from "../assets/revestimento5.jpg";
import imgBefore2 from "../assets/infestação de baratas em caixa d'água.jpg";
import imgAfter2 from "../assets/revestimento8.jpg";
import imgBefore3 from "../assets/antes2.jpg";
import imgAfter3 from "../assets/Revestimento9.jpg";

const WPP = "https://api.whatsapp.com/send?phone=5551981969303";

const bg = (url) => ({ backgroundImage: `url("${url}")` });
const card1Before = bg(imgBefore);
const card1After = bg(imgAfter);
const card2Before = bg(imgBefore2);
const card2After = bg(imgAfter2);
const card3Before = bg(imgBefore3);
const card3After = bg(imgAfter3);
const root = ref(null);

function initSlider(card) {
  const wrap = card.querySelector(".compare-wrap");
  const divider = card.querySelector(".compare-divider");
  const after = card.querySelector(".img-after");
  if (!wrap || !divider || !after) return;

  let active = false;

  const setPos = (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    let pct = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    divider.style.left = pct + "%";
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
  };

  divider.addEventListener("mousedown", (e) => {
    active = true;
    e.preventDefault();
  });
  divider.addEventListener(
    "touchstart",
    () => {
      active = true;
    },
    { passive: true },
  );
  wrap.addEventListener("mousemove", (e) => {
    if (active) setPos(e);
  });
  wrap.addEventListener(
    "touchmove",
    (e) => {
      if (active) setPos(e);
    },
    { passive: true },
  );
  document.addEventListener("mouseup", () => {
    active = false;
  });
  document.addEventListener("touchend", () => {
    active = false;
  });

  let t = 0;
  const intro = setInterval(() => {
    t += 0.04;
    const pct = 50 + Math.sin(t) * 12;
    divider.style.left = pct + "%";
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    if (t > Math.PI * 2) clearInterval(intro);
  }, 30);
}

onMounted(() => {
  root.value?.querySelectorAll(".compare-card").forEach(initSlider);
});
</script>

<template>
  <section class="gallery-section" id="revestimento" ref="root">
    <div class="container">
      <div class="gallery-header">
        <div class="section-eyebrow">Resultados comprovados</div>
        <h2 class="gallery-title">A diferença que <span>você vê</span></h2>
        <p class="gallery-desc">
          Cada projeto entregue é prova de um serviço feito com precisão técnica
          e produto exclusivo. Arraste para comparar o antes e o depois.
        </p>
      </div>

      <div class="gallery-grid">
        <!-- Card 1 — Featured -->
        <div class="compare-card compare-card--featured">
          <div class="compare-wrap">
            <div class="img-before img-before--1" :style="card1Before"></div>
            <div class="img-after img-after--1" :style="card1After"></div>

            <div class="before-icon">
              <div class="before-icon-ring">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(180,140,60,.7)"
                  stroke-width="1.5"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  />
                  <path d="M8 12h8M12 8v8" opacity=".4" />
                  <circle cx="12" cy="12" r="3" stroke-dasharray="2 2" />
                </svg>
              </div>
              <div class="before-label">Antes</div>
            </div>

            <div class="after-icon">
              <div class="after-icon-ring">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-sky)"
                  stroke-width="1.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div class="after-label">Depois</div>
            </div>

            <div class="badge-antes">Antes do revestimento</div>
            <div class="badge-depois">Após aplicação</div>

            <div class="compare-divider">
              <div class="compare-handle">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 10l-4 0M14 10l4 0M8 7l-2 3 2 3M12 7l2 3-2 3"
                    stroke="#0D2A52"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>

            <div class="card-caption">
              <div class="card-caption__type">
                Revestimento interno · Condomínio residencial
              </div>
              <div class="card-caption__title">
                Caixa 5.000 L — Porto Alegre, RS
              </div>
            </div>

            <div class="drag-hint">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 7H1M9 7h4M3 5l-2 2 2 2M11 5l2 2-2 2"
                  stroke="rgba(255,255,255,.4)"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
              Arraste para comparar
            </div>
          </div>
        </div>

        <!-- Card 2 — Small -->
        <div class="compare-card compare-card--sm">
          <div class="compare-wrap">
            <div class="img-before img-before--2" :style="card2Before"></div>
            <div class="img-after img-after--2" :style="card2After"></div>
            <div class="badge-antes">Antes</div>
            <div class="badge-depois">Depois</div>
            <div class="compare-divider compare-divider--sm">
              <div class="compare-handle compare-handle--sm">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7H1M9 7h4M3 5l-2 2 2 2M11 5l2 2-2 2"
                    stroke="#0D2A52"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div class="card-caption">
              <div class="card-caption__type">
                Impermeabilização · Comercial
              </div>
              <div class="card-caption__title">
                Reservatório 10.000 L — Florianópolis
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 — Small -->
        <div class="compare-card compare-card--sm">
          <div class="compare-wrap">
            <div class="img-before img-before--3" :style="card3Before"></div>
            <div class="img-after img-after--3" :style="card3After"></div>
            <div class="badge-antes">Antes</div>
            <div class="badge-depois">Depois</div>
            <div class="compare-divider compare-divider--sm">
              <div class="compare-handle compare-handle--sm">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7H1M9 7h4M3 5l-2 2 2 2M11 5l2 2-2 2"
                    stroke="#0D2A52"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div class="card-caption">
              <div class="card-caption__type">
                Limpeza + Revestimento · Industrial
              </div>
              <div class="card-caption__title">
                Cisterna 20.000 L — Caxias do Sul
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="gallery-stats">
        <div class="gallery-stat">
          <div class="gallery-stat__num">+10<span>mil.</span></div>
          <div class="gallery-stat__label">Projetos entregues</div>
        </div>
        <div class="gallery-stat">
          <div class="gallery-stat__num">30<span>+</span></div>
          <div class="gallery-stat__label">Anos de experiência</div>
        </div>
        <div class="gallery-stat">
          <div class="gallery-stat__num">1<span>dia</span></div>
          <div class="gallery-stat__label">Prazo de instalação</div>
        </div>
        <div class="gallery-stat">
          <div class="gallery-stat__num"><span>#</span>2561</div>
          <div class="gallery-stat__label">Cadastro Vigil. Sanitária</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="gallery-cta">
        <a
          :href="WPP"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            <g class="wg1"><path class="wf1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/></g>
            <g class="wg2"><path class="wf2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/></g>
          </svg>
          <span class="wlbl">
            <svg class="wico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.853L.054 23.94l6.267-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Solicitar orçamento grátis
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section wrapper ── */
.gallery-section {
  background: var(--color-white);
  padding: 64px 0 80px;
  position: relative;
  overflow: hidden;
}

.gallery-section::before {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.gallery-section::after {
  content: "";
  position: absolute;
  bottom: -60px;
  left: -60px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}

@media (min-width: 768px) {
  .gallery-section {
    padding: 96px 0 112px;
  }
}

/* ── Container ── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

/* ── Header ── */
.gallery-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .gallery-header {
    margin-bottom: 64px;
  }
}

.section-eyebrow {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-sky);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-eyebrow::before,
.section-eyebrow::after {
  content: "";
  width: 32px;
  height: 1px;
  background: var(--color-sky);
  opacity: 0.4;
}

.gallery-title {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: clamp(28px, 5vw, 52px);
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: var(--color-navy-deep);
  margin-bottom: 16px;
}

.gallery-title span {
  color: var(--color-sky);
}

.gallery-desc {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: var(--color-steel);
  line-height: 1.7;
  max-width: 560px;
}

/* ── Gallery grid ── */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  margin-bottom: 48px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 32px rgba(13, 42, 82, 0.08);
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ── Compare card ── */
.compare-card {
  position: relative;
  background: var(--color-navy-deep);
  overflow: hidden;
  cursor: pointer;
  height: 260px;
}

@media (min-width: 768px) {
  .compare-card--featured {
    grid-column: 1 / -1;
    height: 420px;
  }
  .compare-card--sm {
    height: 280px;
  }
}

.compare-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  overflow: hidden;
}

/* ── Before / After images ── */
.img-before,
.img-after {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Card 1 — before (real photo) */
.img-before--1 {
  background-size: cover;
  background-position: center;
  z-index: 1;
}

/* Card 2 — before (real photo) */
.img-before--2 {
  background-size: cover;
  background-position: center;
  z-index: 1;
}

/* Card 3 — before (real photo) */
.img-before--3 {
  background-size: cover;
  background-position: center;
  z-index: 1;
}

/* Card 1 — after (real photo) */
.img-after--1 {
  background-size: cover;
  background-position: center;
  clip-path: inset(0 0 0 50%);
  transition: clip-path 0.05s linear;
  z-index: 2;
}

/* Card 2 — after (real photo) */
.img-after--2 {
  background-size: cover;
  background-position: center;
  clip-path: inset(0 0 0 50%);
  transition: clip-path 0.05s linear;
  z-index: 2;
}

/* Card 3 — after (real photo) */
.img-after--3 {
  background-size: cover;
  background-position: center;
  clip-path: inset(0 0 0 50%);
  transition: clip-path 0.05s linear;
  z-index: 2;
}

/* ── Before/After icons ── */
.before-icon,
.after-icon {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  pointer-events: none;
  text-align: center;
}

.before-icon {
  left: 25%;
}
.after-icon {
  left: 75%;
}

.before-icon-ring,
.after-icon-ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  backdrop-filter: blur(4px);
}

.before-icon-ring {
  border: 2px dashed rgba(180, 140, 60, 0.5);
  background: rgba(13, 42, 82, 0.5);
}

.before-icon-ring svg {
  width: 28px;
  height: 28px;
  opacity: 0.7;
}

.after-icon-ring {
  border: 2px solid rgba(0, 184, 240, 0.5);
  background: rgba(0, 184, 240, 0.1);
}

.after-icon-ring svg {
  width: 28px;
  height: 28px;
}

.before-label,
.after-label {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.before-label {
  color: rgba(180, 140, 60, 0.7);
}
.after-label {
  color: rgba(0, 184, 240, 0.9);
}

/* ── Badges ── */
.badge-antes,
.badge-depois {
  position: absolute;
  top: 20px;
  z-index: 8;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 2px;
  backdrop-filter: blur(6px);
}

.badge-antes {
  left: 16px;
  color: rgba(200, 160, 80, 0.9);
  background: rgba(13, 42, 82, 0.75);
  border: 1px solid rgba(180, 140, 60, 0.3);
}

.badge-depois {
  right: 16px;
  color: var(--color-sky);
  background: rgba(0, 184, 240, 0.1);
  border: 1px solid rgba(0, 184, 240, 0.3);
}

/* ── Divider & handle ── */
.compare-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--color-sky) 20%,
    var(--color-sky) 80%,
    transparent 100%
  );
  z-index: 10;
  transform: translateX(-50%);
  cursor: ew-resize;
}

.compare-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: var(--color-sky);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 0 4px rgba(0, 184, 240, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.3);
  cursor: ew-resize;
}

.compare-handle svg {
  width: 20px;
  height: 20px;
}

.compare-handle--sm {
  width: 36px;
  height: 36px;
}

.compare-handle--sm svg {
  width: 16px;
  height: 16px;
}

/* ── Caption ── */
.card-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
  padding: 28px 24px 20px;
  background: linear-gradient(
    to top,
    rgba(13, 42, 82, 0.9) 0%,
    transparent 100%
  );
}

.card-caption__type {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-sky);
  margin-bottom: 4px;
}

.card-caption__title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

/* ── Drag hint ── */
.drag-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

.compare-card:hover .drag-hint {
  opacity: 0;
}

/* ── Stats ── */
.gallery-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-mist);
  border: 1px solid var(--color-mist);
  border-radius: 4px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .gallery-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

.gallery-stat {
  background: var(--color-white);
  padding: 24px 20px;
  text-align: center;
}

@media (min-width: 768px) {
  .gallery-stat {
    padding: 28px 24px;
  }
}

.gallery-stat__num {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: 28px;
  line-height: 1;
  color: var(--color-navy-deep);
  letter-spacing: 0.01em;
  margin-bottom: 6px;
}

@media (min-width: 768px) {
  .gallery-stat__num {
    font-size: 38px;
  }
}

.gallery-stat__num span {
  color: var(--color-sky);
}

.gallery-stat__label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-iron);
}

/* ── CTA ── */
.gallery-cta {
  display: flex;
  justify-content: center;
  margin-top: 52px;
}

.btn-primary {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  padding: 18px 36px;
  background: var(--color-navy);
  color: var(--color-white);
  border: 2px solid var(--color-sky);
  border-radius: 40px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.38s ease;
}

.btn-primary .wsv {
  position: absolute;
  left: -100%; top: 0;
  width: 300%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-primary:hover .wsv { opacity: 1; }

.btn-primary .wlbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: color 0.38s;
}

.btn-primary .wico { width: 18px; height: 18px; flex-shrink: 0; }

.btn-primary .wg1 { transform: translateY(115%); transition: transform 0.55s ease-in; }
.btn-primary .wg2 { transform: translateY(125%); transition: transform 0.55s ease-in 0.04s; }

.btn-primary:hover .wg1 {
  animation:
    galRise1 0.65s var(--ease-spring) forwards,
    galBob1 3.2s ease-in-out 0.65s infinite;
}
.btn-primary:hover .wg2 {
  animation:
    galRise2 0.7s var(--ease-spring) 0.05s forwards,
    galBob2 4s ease-in-out 0.75s infinite;
}

@keyframes galRise1 { from { transform: translateY(115%); } to { transform: translateY(-10%); } }
@keyframes galRise2 { from { transform: translateY(125%); } to { transform: translateY(-6%); } }
@keyframes galBob1 { 0%,100% { transform: translateY(-10%); } 50% { transform: translateY(-14%); } }
@keyframes galBob2 { 0%,100% { transform: translateY(-6%); } 50% { transform: translateY(-11%); } }

.btn-primary .wf1 { fill: var(--color-sky); }
.btn-primary .wf2 { fill: var(--color-cyan-light); opacity: 0.5; }
.btn-primary:hover .wlbl { color: var(--color-navy-deep); }
</style>
