<script setup>
import NavBar from "../components/NavBar.vue";
import HeroSection from "../components/HeroSection.vue";
import SectionServicos from "../components/SectionServicos.vue";
import SectionDepoimentos from "../components/SectionDepoimentos.vue";
import SectionGaleria from "../components/SectionGaleria.vue";
import AppFooter from "../components/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";
</script>

<template>
  <div class="page-home">
    <NavBar />
    <main>
      <HeroSection />

      <section class="section-why" id="quem-somos">
        <div class="sec-inner">
          <p class="sec-eyebrow">
            Por que escolher a Caixa d'Água Revestimentos
          </p>
          <h2 class="sec-title">
            Mais de 30 anos cuidando da<br />
            <span>água que você consome</span>
          </h2>
          <p class="sec-sub">
            Somos especialistas em revestimento e impermeabilização de
            reservatórios com tecnologia exclusiva patenteada — a única empresa
            autorizada a utilizar este produto no Brasil.
          </p>
          <div class="why-grid">
            <div class="why-card">
              <div class="wnum">01 · Tecnologia</div>
              <div class="wtitle">Produto patenteado e exclusivo</div>
              <p class="wtext">
                Formulação própria com registro de propriedade intelectual.
                Nenhum outro prestador pode oferecer o mesmo resultado.
              </p>
            </div>
            <div class="why-card">
              <div class="wnum">02 · Agilidade</div>
              <div class="wtitle">Instalação em apenas 1 dia</div>
              <p class="wtext">
                Sem obras, sem quebradeira. O revestimento é aplicado e a caixa
                liberada para uso no mesmo dia.
              </p>
            </div>
            <div class="why-card">
              <div class="wnum">03 · Segurança</div>
              <div class="wtitle">Aprovado pela ANVISA</div>
              <p class="wtext">
                Material atóxico e certificado para contato direto com água
                potável.
              </p>
            </div>
            <div class="why-card">
              <div class="wnum">04 · Experiência</div>
              <div class="wtitle">Fundada em 1994</div>
              <p class="wtext">
                32 anos atendendo condomínios, residências, indústrias e
                empresas no Rio Grande do Sul e Santa Catarina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionServicos />

      <SectionDepoimentos />
      <SectionGaleria />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
<style scoped > .page-home {
  min-height: 100svh;
  background: var(--bg-page);
}

.section-why {
  position: relative;
  z-index: 1;
  background: var(--color-white);
  padding: calc(72px + 100px) 24px 88px;
}

.sec-inner {
  max-width: 1280px;
  margin: 0 auto;
}

.sec-eyebrow {
  font-family: var(--font-mono);
  font-size: 14px; /* era 9px — DM Mono mínimo 14px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: 8px;
}

.sec-title {
  font-family: var(--font-wave);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 300;
  color: var(--color-navy);
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin-bottom: 14px;
}

.sec-title span {
  color: var(--color-sky);
}

.sec-sub {
  font-family: var(--font-body);
  font-size: 17px; /* era 15px */
  font-weight: 500; /* era 300 — Lato Medium */
  color: var(--color-steel);
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 48px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.why-card {
  background: var(--color-fog);
  border-radius: 4px;
  padding: 24px;
  border-left: 3px solid var(--color-sky);
  transition:
    transform 0.25s var(--ease-spring),
    box-shadow 0.25s ease;
  cursor: default;
}

.why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(13, 42, 82, 0.1);
}

.wnum {
  font-family: var(--font-mono);
  font-size: 14px; /* era 9px — DM Mono mínimo 14px */
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-sky);
  margin-bottom: 10px;
}

.wtitle {
  font-family: var(--font-display);
  font-size: 17px; /* era 15px */
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 8px;
}

.wtext {
  font-family: var(--font-body);
  font-size: 16px; /* era 13px */
  color: var(--color-steel);
  line-height: 1.6;
  font-weight: 500; /* era 300 — Lato Medium */
}
</style>
