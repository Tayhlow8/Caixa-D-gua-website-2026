<script setup>
import logoImg from "../assets/logos/logo cx dagua horizontal sem fundo.png";

const WPP = "https://api.whatsapp.com/send?phone=5551981969303";

const navLinks = [
  { label: "Início", href: "/#hero" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Impermeabilização", href: "/impermeabilizacao" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Galeria", href: "/#revestimento" },
  { label: "Contato", href: "/#contato" },
];

const serviceLinks = [
  "Revestimento interno",
  "Impermeabilização",
  "Limpeza e higienização",
  "Tampas sob medida",
  "Inspeção técnica",
  "Manutenção preventiva",
];

const areaTags = [
  "Porto Alegre",
  "Região Metropolitana",
  "Serra Gaúcha",
  "Litoral RS",
  "Florianópolis",
  "Grande Floripa",
  "Interior SC",
];
</script>

<template>
  <footer class="footer" id="contato">
    <div class="container">
      <!-- Main grid -->
      <div class="footer-grid">
        <!-- Col 1 — Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img
              :src="logoImg"
              alt="Caixa d'Água Revestimentos"
              class="footer-logo-img"
            />
          </div>

          <p class="footer-tagline">
            Especialistas em revestimento e impermeabilização de reservatórios
            de água potável. Produto exclusivo patenteado, equipe técnica
            certificada.
          </p>

          <div class="footer-badges">
            <span class="footer-badge">ANVISA</span>
            <span class="footer-badge">Vig. Sanitária</span>
            <span class="footer-badge">RS · SC</span>
            <span class="footer-badge">Est. 1994</span>
          </div>

          <a
            :href="WPP"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-wpp"
          >
            <svg class="wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
              <g class="wg1">
                <path class="wf1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/>
              </g>
              <g class="wg2">
                <path class="wf2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/>
              </g>
            </svg>
            <span class="wlbl">
              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M12.1 1.9C10.8.7 9 0 7.1 0 3.2 0 0 3.2 0 7.1c0 1.2.3 2.4.9 3.5L0 14l3.5-1c1 .6 2.2.9 3.4.9 3.9 0 7.1-3.2 7.1-7.1.1-1.9-.6-3.7-1.9-4.9z"
                  fill="currentColor"
                  opacity=".3"
                />
                <path
                  d="M10.2 8.7c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.2-.4.1-.6-.3-1.2-.6-1.7-1.1-.4-.5-.8-1-.9-1.2-.1-.2 0-.4.1-.5l.3-.4c.1-.1.1-.2.2-.4 0-.1-.4-1.1-.6-1.5-.2-.3-.4-.3-.5-.3h-.4c-.2 0-.4.1-.5.3-.6.6-1.1 1.2-1.1 2.2 0 1.1.8 2.2.9 2.4.1.2 1.6 2.6 4 3.5.5.2 1 .4 1.3.5.5.1 1 .1 1.4 0 .4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.1z"
                  fill="#00D4AA"
                />
              </svg>
              WhatsApp
            </span>
          </a>
        </div>

        <!-- Col 2 — Navigation -->
        <div class="footer-col">
          <div class="footer-nav-title">Navegação</div>
          <ul class="footer-nav-list">
            <li v-for="link in navLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Col 3 — Services -->
        <div class="footer-col">
          <div class="footer-nav-title">Serviços</div>
          <ul class="footer-nav-list">
            <li v-for="svc in serviceLinks" :key="svc">
              <a :href="WPP" target="_blank" rel="noopener noreferrer">{{
                svc
              }}</a>
            </li>
          </ul>
        </div>

        <!-- Col 4 — Contact -->
        <div class="footer-col">
          <div class="footer-nav-title">Contato</div>
          <div class="footer-contact-block">
            <div class="footer-contact-item">
              <div class="contact-icon">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="var(--color-sky)"
                  stroke-width="1.3"
                >
                  <path
                    d="M7.5 1C5 1 3 3 3 5.5c0 3.5 4.5 8.5 4.5 8.5S12 9 12 5.5C12 3 10 1 7.5 1z"
                  />
                  <circle cx="7.5" cy="5.5" r="1.5" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">Endereço</span>
                <span class="contact-value"
                  >Porto Alegre, RS<br />Atendemos RS e SC</span
                >
              </div>
            </div>

            <div class="footer-contact-item">
              <div class="contact-icon">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="var(--color-sky)"
                  stroke-width="1.3"
                >
                  <path
                    d="M1.5 3.5A1 1 0 012.5 2.5h2L6 5.5l-1.5 1.5A10 10 0 009 10l1.5-1.5 3 1.5v2a1 1 0 01-1 1C5.5 13 1.5 9 1.5 4.5v-1z"
                  />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">WhatsApp</span>
                <span class="contact-value">
                  <a :href="WPP" target="_blank" rel="noopener noreferrer"
                    >(51) 9 8196-9303</a
                  >
                </span>
              </div>
            </div>

            <div class="footer-contact-item">
              <div class="contact-icon">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="var(--color-sky)"
                  stroke-width="1.3"
                >
                  <rect x="1.5" y="3" width="12" height="9" rx="1" />
                  <path d="M1.5 4.5L7.5 8.5l6-4" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">E-mail</span>
                <span class="contact-value">
                  <a href="mailto:contato@caixadagua.com.br"
                    >contato@caixadagua.com.br</a
                  >
                </span>
              </div>
            </div>

            <div class="footer-contact-item">
              <div class="contact-icon">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="var(--color-sky)"
                  stroke-width="1.3"
                >
                  <circle cx="7.5" cy="7.5" r="6" />
                  <path d="M7.5 4v4l2.5 1.5" />
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">Horário</span>
                <span class="contact-value"
                  >Seg–Sex: 08h–18h<br />Sáb: 08h–12h</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service area -->
      <div class="footer-area">
        <span class="footer-area-label">Área de atendimento</span>
        <div class="footer-area-tags">
          <span v-for="tag in areaTags" :key="tag" class="area-tag">{{
            tag
          }}</span>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <span class="footer-copy"
            >© 2026 Caixa d'Água Revestimentos e Impermeabilizações. Todos os
            direitos reservados.</span
          >
          <span class="footer-cnpj">Registro Vig. Sanitária nº 2561</span>
        </div>

        <div class="footer-legal">
          <a href="#">Termos de uso</a>
          <a href="/politica-de-privacidade">Política de privacidade</a>
          <a href="#">Cookies</a>
        </div>

        <div class="footer-social">
          <a
            href="https://www.instagram.com/caixadaguarevestimentos/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="Siga a Caixa d'Água Revestimentos no Instagram"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="rgba(255,255,255,.45)"
              stroke-width="1.2"
            >
              <rect x="2" y="2" width="12" height="12" rx="3" />
              <circle cx="8" cy="8" r="3" />
              <circle
                cx="11.5"
                cy="4.5"
                r=".5"
                fill="rgba(255,255,255,.45)"
                stroke="none"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/caixadaguarevestimentos"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="Caixa d'Água Revestimentos no Facebook"
          >
            <svg viewBox="0 0 16 16" fill="rgba(255,255,255,.45)">
              <path
                d="M14 8a6 6 0 1 0-6.9 5.9v-4.2H5.6V8H7V6.7c0-1.4.8-2.1 2.1-2.1.6 0 1.3.1 1.3.1v1.4h-.7c-.7 0-.9.4-.9.9V8h1.6l-.3 1.7H9v4.2A6 6 0 0 0 14 8z"
              />
            </svg>
          </a>
          <a
            :href="WPP"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="Fale com a Caixa d'Água Revestimentos pelo WhatsApp"
          >
            <svg viewBox="0 0 16 16" fill="rgba(255,255,255,.45)">
              <path
                d="M13.8 2.2C12.3.8 10.3 0 8.1 0 3.7 0 .1 3.6.1 8c0 1.4.4 2.8 1 4L0 16l4.2-1.1C5.4 15.6 6.7 16 8.1 16c4.4 0 8-3.6 8-8 0-2.1-.8-4.2-2.3-5.8zm-5.7 12.3c-1.2 0-2.4-.3-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.2c-.6-1-1-2.2-1-3.4C1.5 4.5 4.5 1.5 8.1 1.5c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5.1 3.6-2.9 6.6-6.3 6.6zm3.5-4.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4.1-.6-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-.9-1.2-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.3.2-.4l.1-.4c0-.1-.3-1.2-.5-1.6-.1-.4-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.8.7-1.2 1.5-1.2 2.4 0 1.3.9 2.6 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.4.5.6.2 1.1.1 1.5-.1.5-.2 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-line"></div>
  </footer>
</template>

<style scoped>
/* ── Wrapper ── */
.footer {
  background: var(--color-navy-deep);
  color: rgba(255, 255, 255, 0.7);
  padding: 64px 0 0;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .footer {
    padding: 72px 0 0;
  }
}

.footer::before {
  content: "";
  position: absolute;
  top: -120px;
  right: -120px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgba(0, 184, 240, 0.08);
  pointer-events: none;
}

.footer::after {
  content: "";
  position: absolute;
  bottom: 60px;
  left: -80px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid rgba(0, 212, 170, 0.06);
  pointer-events: none;
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

/* ── Grid ── */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

@media (min-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.4fr;
    gap: 48px;
    margin-bottom: 56px;
  }
}

/* ── Brand col ── */
.footer-logo {
  margin-bottom: 20px;
}

.footer-logo-img {
  height: 48px;
  width: auto;
  display: block;
  object-fit: contain;
}

.footer-tagline {
  font-family: var(--font-body);
  font-size: 15px; /* era 14px */
  font-weight: 500; /* era 300 */
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65); /* era .5 — mais contraste */
  max-width: 280px;
  margin-bottom: 24px;
}

.footer-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-badge {
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-lacre);
  border: 1px solid rgba(0, 212, 170, 0.25);
  padding: 4px 8px;
  border-radius: 2px;
}

.footer-wpp {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-lacre);
  border: 1px solid rgba(0, 212, 170, 0.3);
  padding: 8px 14px;
  border-radius: 40px;
  text-decoration: none;
  transition: color 0.38s ease, border-color 0.25s ease;
}

.footer-wpp:hover {
  border-color: var(--color-lacre);
}

.footer-wpp .wsv {
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

.footer-wpp:hover .wsv {
  opacity: 1;
}

.footer-wpp .wlbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.38s;
}

.footer-wpp .wlbl svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.footer-wpp .wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.footer-wpp .wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.footer-wpp:hover .wg1 {
  animation:
    wppRise1 0.65s var(--ease-spring) forwards,
    wppBob1 3.2s ease-in-out 0.65s infinite;
}
.footer-wpp:hover .wg2 {
  animation:
    wppRise2 0.7s var(--ease-spring) 0.05s forwards,
    wppBob2 4s ease-in-out 0.75s infinite;
}

@keyframes wppRise1 {
  from { transform: translateY(115%); }
  to   { transform: translateY(-10%); }
}
@keyframes wppRise2 {
  from { transform: translateY(125%); }
  to   { transform: translateY(-6%); }
}
@keyframes wppBob1 {
  0%, 100% { transform: translateY(-10%); }
  50%      { transform: translateY(-14%); }
}
@keyframes wppBob2 {
  0%, 100% { transform: translateY(-6%); }
  50%      { transform: translateY(-11%); }
}

.footer-wpp .wf1 {
  fill: #00d4aa;
}
.footer-wpp .wf2 {
  fill: #7af5e0;
  opacity: 0.5;
}
.footer-wpp:hover .wlbl {
  color: #0d2a52;
}

/* ── Nav cols ── */
.footer-nav-title {
  font-family: var(--font-mono);
  font-size: 12px; /* era 9px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35); /* era .25 */
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-nav-list a {
  font-family: var(--font-body);
  font-size: 15px; /* era 14px */
  font-weight: 500; /* era 300 */
  color: rgba(255, 255, 255, 0.6); /* era .5 */
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.footer-nav-list a::before {
  content: "";
  width: 4px;
  height: 1px;
  background: var(--color-sky);
  opacity: 0.4;
  flex-shrink: 0;
  transition:
    width 0.2s ease,
    opacity 0.2s ease;
}

.footer-nav-list a:hover {
  color: rgba(255, 255, 255, 0.9);
}
.footer-nav-list a:hover::before {
  width: 8px;
  opacity: 1;
}

/* ── Contact col ── */
.footer-contact-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-contact-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.contact-icon {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: rgba(0, 184, 240, 0.08);
  border: 1px solid rgba(0, 184, 240, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.contact-icon svg {
  width: 15px;
  height: 15px;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 11px; /* era 8px */
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35); /* era .25 */
}

.contact-value {
  font-family: var(--font-body);
  font-size: 15px; /* era 14px */
  font-weight: 500; /* era 300 */
  color: rgba(255, 255, 255, 0.8); /* era .75 */
  line-height: 1.45;
}

.contact-value a {
  color: var(--color-sky);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-value a:hover {
  color: var(--color-cyan);
}

/* ── Service area ── */
.footer-area {
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-area-label {
  font-family: var(--font-mono);
  font-size: 12px; /* era 9px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35); /* era .25 */
  flex-shrink: 0;
}

.footer-area-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.area-tag {
  font-family: var(--font-body);
  font-size: 13px; /* era 12px */
  font-weight: 500; /* era 300 */
  color: rgba(255, 255, 255, 0.65); /* era .55 */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 2px;
}

/* ── Bottom bar ── */
.footer-bottom {
  padding: 20px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

.footer-bottom-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-copy {
  font-family: var(--font-body);
  font-size: 13px; /* era 12px */
  font-weight: 500; /* era 300 */
  color: rgba(255, 255, 255, 0.4); /* era .3 */
}

.footer-cnpj {
  font-family: var(--font-mono);
  font-size: 11px; /* era 10px */
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.25); /* era .18 */
}

.footer-legal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-legal a {
  font-family: var(--font-mono);
  font-size: 11px; /* era 9px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35); /* era .25 */
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: var(--color-sky);
}

/* ── Social ── */
.footer-social {
  display: flex;
  gap: 8px;
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
  text-decoration: none;
}

.social-btn:hover {
  border-color: var(--color-sky);
  background: rgba(0, 184, 240, 0.08);
}

.social-btn svg {
  width: 16px;
  height: 16px;
}

/* ── Gradient line ── */
.footer-line {
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--color-navy-deep),
    var(--color-cobalt) 30%,
    var(--color-sky) 55%,
    var(--color-lacre) 80%,
    var(--color-navy-deep)
  );
  margin-top: 0;
}
</style>
