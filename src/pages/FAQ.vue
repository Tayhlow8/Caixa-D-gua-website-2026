<template>
  <InnerNavBar activePage="faq" />

  <div class="faq-page">
    <!-- Hero -->
    <section class="faq-hero">
      <div class="faq-hero__inner container">
        <span class="faq-hero__label">Central de dúvidas</span>
        <h1 class="faq-hero__title">Perguntas<br /><em>frequentes</em></h1>
        <p class="faq-hero__sub">
          Tudo o que você precisa saber antes de contratar o revestimento ou
          impermeabilização da sua caixa d'água.
        </p>
      </div>
      <div class="faq-hero__bar" aria-hidden="true"></div>
    </section>

    <!-- FAQ Accordion -->
    <section class="faq-section">
      <div class="container faq-section__inner">
        <div class="faq-list">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === index }"
          >
            <button
              class="faq-item__trigger"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggle(index)"
            >
              <span class="faq-item__num">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              <span class="faq-item__question">{{ item.question }}</span>
              <span class="faq-item__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              :id="`faq-answer-${index}`"
              class="faq-item__body"
              role="region"
            >
              <div class="faq-item__answer" v-html="item.answer"></div>
            </div>
          </div>
        </div>

        <!-- CTA lateral -->
        <aside class="faq-cta">
          <div class="faq-cta__card">
            <span class="faq-cta__icon">💧</span>
            <h3 class="faq-cta__title">Ainda tem dúvidas?</h3>
            <p class="faq-cta__text">
              Fale com um especialista agora pelo WhatsApp. Atendimento rápido,
              sem compromisso.
            </p>
            <a
              href="https://wa.me/5551981969303?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20revestimento%20de%20caixa%20d'água."
              target="_blank"
              rel="noopener noreferrer"
              class="faq-cta__btn"
            >
              <svg
                class="fcb-wsv"
                viewBox="0 0 600 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g class="fcb-wg1">
                  <path
                    class="fcb-wf1"
                    d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                  />
                </g>
                <g class="fcb-wg2">
                  <path
                    class="fcb-wf2"
                    d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                  />
                </g>
              </svg>
              <span class="fcb-lbl">Falar no WhatsApp</span>
            </a>
            <a href="tel:+555133481239" class="faq-cta__phone">
              (51) 3348-1239
            </a>
          </div>

          <div class="faq-cta__trust">
            <div class="faq-cta__trust-item">
              <strong>30+</strong>
              <span>anos de mercado</span>
            </div>
            <div class="faq-cta__trust-item">
              <strong>5</strong>
              <span>anos de garantia</span>
            </div>
            <div class="faq-cta__trust-item">
              <strong>ANVISA</strong>
              <span>aprovado</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Blog CTA -->
    <section class="faq-blog-cta">
      <div class="container">
        <p class="faq-blog-cta__label">Quer saber mais?</p>
        <h2 class="faq-blog-cta__title">Confira nossos artigos</h2>
        <p class="faq-blog-cta__text">
          Dicas, informações técnicas e tudo sobre a manutenção da sua caixa
          d'água.
        </p>
        <router-link to="/blog" class="faq-blog-cta__btn">
          <svg
            class="fbcb-wsv"
            viewBox="0 0 600 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g class="fbcb-wg1">
              <path
                class="fbcb-wf1"
                d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
              />
            </g>
            <g class="fbcb-wg2">
              <path
                class="fbcb-wf2"
                d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
              />
            </g>
          </svg>
          <span class="fbcb-lbl">Ver artigos do blog</span>
        </router-link>
      </div>
    </section>
  </div>

  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import InnerNavBar from "@/components/InnerNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

useHead({
  title:
    "Perguntas Frequentes sobre Revestimento de Caixa d'Água | Caixa d'Água Revestimentos",
  meta: [
    {
      name: "description",
      content:
        "Tire suas dúvidas sobre revestimento e impermeabilização de caixa d'água: materiais, duração, garantia, tempo de instalação e muito mais. Especialistas desde 1994.",
    },
  ],
});

const openIndex = ref(0);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

const faqs = [
  {
    question: "Qual o tipo de produto utilizado no revestimento?",
    answer: `<p>Utilizamos <strong>geomembrana de PVC flexível e atóxico</strong>, com espessura de <strong>1 mm</strong> — um material patenteado, desenvolvido exclusivamente para o contato direto com água potável.</p>
    <p>O PVC geomembrana é aprovado pela <strong>ANVISA</strong> e pela <strong>NSF International</strong>, garantindo que a água armazenada não sofra nenhuma alteração de sabor, odor ou qualidade. O material é resistente a variações de temperatura, pressão e impactos, ideal para reservatórios de concreto, fibra e alvenaria.</p>`,
  },
  {
    question: "Quanto tempo dura o serviço de instalação?",
    answer: `<p>A aplicação do revestimento é realizada em <strong>6 a 8 horas</strong>, dependendo do tamanho e grau de dificuldade do reservatório.</p>
    <p>Todo o processo acontece em um único dia: limpeza e preparação da superfície, instalação da geomembrana em PVC com solda térmica nas junções e verificação final de estanqueidade. Ao final do dia, a caixa d'água já está pronta para uso.</p>`,
  },
  {
    question: "Por quanto tempo vou ficar sem água?",
    answer: `<p>A falta de água fica estimada entre <strong>6 e 8 horas</strong> quando há somente um reservatório de alimentação.</p>
    <p>Recomendamos agendar o serviço para o período da manhã, garantindo que o abastecimento seja restabelecido ainda durante o dia. Em edificações com dois reservatórios (inferior e superior), é possível manter um em funcionamento durante a instalação do outro, reduzindo ou eliminando a interrupção.</p>`,
  },
  {
    question: "Qual a vida útil do revestimento?",
    answer: `<p>A geomembrana de PVC possui vida útil estimada em <strong>mais de 200 anos</strong> em condições ideais de uso — um dos materiais mais duráveis disponíveis para revestimento de reservatórios.</p>
    <p>Além disso, oferecemos <strong>5 anos de garantia</strong> técnica sobre a instalação. Para referência, o mesmo material é utilizado em grandes obras de infraestrutura hídrica no Brasil e no mundo, como barragens, canais e reservatórios industriais.</p>`,
  },
  {
    question: "Como é feita a limpeza deste revestimento?",
    answer: `<p>A manutenção do revestimento em PVC é simples e pode ser feita pela própria empresa de limpeza de caixas d'água. O material é lavável com <strong>água e sabão neutro</strong> ou com solução de hipoclorito de sódio (água sanitária diluída), conforme as normas da ANVISA para higienização de reservatórios.</p>
    <p>Por ser uma superfície lisa e não porosa, o PVC <strong>não acumula bactérias, fungos ou algas</strong> com facilidade, tornando a limpeza muito mais rápida e eficiente do que em reservatórios sem revestimento.</p>`,
  },
  {
    question: "Qual a espessura do material? É resistente?",
    answer: `<p>A geomembrana possui <strong>1 mm de espessura</strong> — medida técnica definida para garantir flexibilidade, resistência e aderência perfeita às paredes internas do reservatório.</p>
    <p>O material suporta pressão hidrostática, variações de temperatura (de -10°C a +60°C), impactos e abrasão. As emendas são feitas por <strong>solda térmica de alta frequência</strong>, formando uma superfície completamente contínua e impermeável, sem pontos de fragilidade ou infiltração.</p>`,
  },
];
</script>

<style scoped>
/* ─── Layout base ─── */
.faq-page {
  background: var(--bg-page);
  min-height: 100vh;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* ─── Hero ─── */
.faq-hero {
  background: var(--bg-hero);
  padding: var(--space-24) 0 0;
  position: relative;
  overflow: hidden;
}

.faq-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 80% 50%,
    rgba(0, 184, 240, 0.12) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.faq-hero__inner {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
}

.faq-hero__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  display: block;
  margin-bottom: var(--space-4);
}

.faq-hero__title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-white);
  margin: 0 0 var(--space-6);
}

.faq-hero__title em {
  font-style: normal;
  color: var(--color-sky);
}

.faq-hero__sub {
  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: var(--leading-normal);
  color: var(--text-on-dark-muted);
  max-width: 560px;
  margin: 0;
}

.faq-hero__bar {
  height: 4px;
  background: var(--color-sky);
  margin-top: var(--space-16);
}

/* ─── FAQ Section ─── */
.faq-section {
  padding: var(--space-20) 0;
}

.faq-section__inner {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-12);
  align-items: start;
}

/* ─── FAQ List ─── */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-item {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition:
    border-color var(--transition-state),
    box-shadow var(--transition-state);
}

.faq-item--open {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.faq-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background var(--transition-hover);
}

.faq-item__trigger:hover {
  background: var(--bg-subtle);
}

.faq-item__num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-sky);
  letter-spacing: var(--tracking-mono);
  flex-shrink: 0;
  min-width: 28px;
}

.faq-item__question {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
  flex: 1;
  line-height: var(--leading-snug);
}

.faq-item__icon {
  color: var(--text-muted);
  flex-shrink: 0;
  transition: transform var(--transition-state);
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
  color: var(--color-sky);
}

.faq-item__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition-state);
}

.faq-item--open .faq-item__body {
  grid-template-rows: 1fr;
}

.faq-item__answer {
  overflow: hidden;
  padding: 0 var(--space-6) 0 calc(var(--space-6) + 28px + var(--space-4));
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

.faq-item--open .faq-item__answer {
  padding-bottom: var(--space-6);
}

.faq-item__answer :deep(p) {
  margin: 0 0 var(--space-4);
}

.faq-item__answer :deep(p:last-child) {
  margin-bottom: 0;
}

.faq-item__answer :deep(strong) {
  color: var(--text-primary);
  font-weight: var(--weight-bold);
}

/* ─── CTA Card ─── */
.faq-cta {
  position: sticky;
  top: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.faq-cta__card {
  background: var(--bg-hero);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

.faq-cta__icon {
  font-size: 32px;
}

.faq-cta__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--color-white);
  margin: 0;
  line-height: var(--leading-snug);
}

.faq-cta__text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-on-dark-muted);
  margin: 0;
  line-height: var(--leading-normal);
}

/* btn--wa */
.faq-cta__btn {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25d366;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-pill);
  text-decoration: none;
  width: 100%;
  min-height: 48px;
}

.fcb-wsv {
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
.faq-cta__btn:hover .fcb-wsv {
  opacity: 1;
}

.fcb-lbl {
  position: relative;
  z-index: 1;
  transition: color var(--transition-wave);
}

.fcb-wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.fcb-wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.faq-cta__btn:hover .fcb-wg1 {
  animation:
    fcbRise1 0.65s var(--ease-spring) forwards,
    fcbBob1 3.2s ease-in-out 0.65s infinite;
}
.faq-cta__btn:hover .fcb-wg2 {
  animation:
    fcbRise2 0.7s var(--ease-spring) 0.05s forwards,
    fcbBob2 4s ease-in-out 0.75s infinite;
}

@keyframes fcbRise1 {
  from {
    transform: translateY(115%);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes fcbRise2 {
  from {
    transform: translateY(125%);
  }
  to {
    transform: translateY(-6%);
  }
}
@keyframes fcbBob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes fcbBob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

.fcb-wf1 {
  fill: #20c05e;
}
.fcb-wf2 {
  fill: #a8ffd3;
  opacity: 0.4;
}

.faq-cta__btn:hover .fcb-lbl {
  color: #004d1d;
}

.faq-cta__btn:focus {
  outline: none;
}
.faq-cta__btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-navy-deep),
    0 0 0 4px #25d366;
}

.faq-cta__phone {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-sky);
  text-decoration: none;
  letter-spacing: var(--tracking-mono);
  align-self: center;
}

.faq-cta__trust {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  text-align: center;
}

.faq-cta__trust-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.faq-cta__trust-item strong {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: var(--weight-black);
  color: var(--brand-primary);
}

.faq-cta__trust-item span {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: var(--tracking-mono);
}

/* ─── Blog CTA ─── */
.faq-blog-cta {
  background: var(--color-fog);
  border-top: 1px solid var(--border-default);
  padding: var(--space-20) 0;
  text-align: center;
}

.faq-blog-cta__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  margin: 0 0 var(--space-3);
}

.faq-blog-cta__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-4);
}

.faq-blog-cta__text {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--text-secondary);
  margin: 0 0 var(--space-8);
}

/* btn--primary */
.faq-blog-cta__btn {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-navy-deep);
  color: var(--color-white);
  border: 2px solid var(--color-sky);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  padding: var(--space-4) var(--space-10);
  border-radius: var(--radius-pill);
  text-decoration: none;
  min-height: 48px;
}

.fbcb-wsv {
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
.faq-blog-cta__btn:hover .fbcb-wsv {
  opacity: 1;
}

.fbcb-lbl {
  position: relative;
  z-index: 1;
  transition: color var(--transition-wave);
}

.fbcb-wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.fbcb-wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.faq-blog-cta__btn:hover .fbcb-wg1 {
  animation:
    fbcbRise1 0.65s var(--ease-spring) forwards,
    fbcbBob1 3.2s ease-in-out 0.65s infinite;
}
.faq-blog-cta__btn:hover .fbcb-wg2 {
  animation:
    fbcbRise2 0.7s var(--ease-spring) 0.05s forwards,
    fbcbBob2 4s ease-in-out 0.75s infinite;
}

@keyframes fbcbRise1 {
  from {
    transform: translateY(115%);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes fbcbRise2 {
  from {
    transform: translateY(125%);
  }
  to {
    transform: translateY(-6%);
  }
}
@keyframes fbcbBob1 {
  0%,
  100% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-14%);
  }
}
@keyframes fbcbBob2 {
  0%,
  100% {
    transform: translateY(-6%);
  }
  50% {
    transform: translateY(-11%);
  }
}

.fbcb-wf1 {
  fill: var(--color-sky);
}
.fbcb-wf2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}

.faq-blog-cta__btn:hover .fbcb-lbl {
  color: var(--color-navy-deep);
}

.faq-blog-cta__btn:focus {
  outline: none;
}
.faq-blog-cta__btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-fog),
    0 0 0 4px var(--color-sky);
}

/* ─── Responsivo ─── */
@media (max-width: 1024px) {
  .faq-section__inner {
    grid-template-columns: 1fr;
  }

  .faq-cta {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .faq-hero__title {
    font-size: clamp(32px, 8vw, 48px);
  }

  .faq-cta {
    grid-template-columns: 1fr;
  }

  .faq-item__answer {
    padding-left: var(--space-6);
  }
}
</style>
