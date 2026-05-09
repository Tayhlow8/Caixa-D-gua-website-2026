<script setup>
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import NavBar from "../components/NavBar.vue";
import AppFooter from "../components/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";

const SITE = "https://www.caixadaguarevestimentos.net.br";
const PAGE = `${SITE}/impermeabilizacao`;

useHead({
  title:
    "Impermeabilização de Caixa d'Água com Garantia | Caixa d'Água Revestimentos",
  meta: [
    {
      name: "description",
      content:
        "Impermeabilização com geomembrana PVC e manta asfáltica. Instalação em 1 dia, 5 anos de garantia, aprovação ANVISA. Atendemos Porto Alegre, RS e SC.",
    },
    {
      name: "keywords",
      content:
        "impermeabilização caixa d'água, geomembrana PVC, manta asfáltica reservatório, impermeabilização Porto Alegre, garantia 5 anos",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content:
        "Impermeabilização de Caixa d'Água com Garantia | Caixa d'Água Revestimentos",
    },
    {
      property: "og:description",
      content:
        "Impermeabilização com geomembrana PVC e manta asfáltica. Instalação em 1 dia, 5 anos de garantia, aprovação ANVISA. Atendemos Porto Alegre, RS e SC.",
    },
    { property: "og:url", content: PAGE },
    { property: "og:image", content: `${SITE}/og-image.jpg` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    {
      name: "twitter:title",
      content:
        "Impermeabilização de Caixa d'Água com Garantia | Caixa d'Água Revestimentos",
    },
    {
      name: "twitter:description",
      content:
        "Impermeabilização com geomembrana PVC e manta asfáltica. Instalação em 1 dia, 5 anos de garantia, aprovação ANVISA.",
    },
    { name: "twitter:image", content: `${SITE}/og-image.jpg` },
  ],
  link: [{ rel: "canonical", href: PAGE }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Impermeabilização de Caixa d'Água",
        url: PAGE,
        description:
          "Serviço de impermeabilização interna com geomembrana de PVC flexível patenteada e impermeabilização externa com manta asfáltica. Instalação em 1 dia, garantia de 5 anos, aprovado pela ANVISA.",
        provider: {
          "@type": "LocalBusiness",
          name: "Caixa d'Água Revestimentos",
          url: SITE,
          telephone: "+5551981969303",
        },
        areaServed: [
          { "@type": "State", name: "Rio Grande do Sul" },
          { "@type": "State", name: "Santa Catarina" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de impermeabilização",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Impermeabilização Interna — Geomembrana PVC",
                description:
                  "Revestimento interno com geomembrana de PVC flexível patenteada. Instalação em 1 dia, sem obra, garantia de 5 anos.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Impermeabilização Externa — Manta Asfáltica",
                description:
                  "Proteção externa da estrutura com manta asfáltica. Previne infiltrações e aumenta a vida útil do reservatório.",
              },
            },
          ],
        },
      }),
    },
  ],
});

// ── Interna images
import antesI1 from "../assets/Antes 4.jpg";
import depoisI1 from "../assets/revestimento7.jpg";
import procLimpeza from "../assets/antes6.jpg";
import procFixacao from "../assets/antes8.jpg";
import procSolda from "../assets/depois com canos.jpg";
import procFinal from "../assets/revestimento2.jpg";
import procFinal2 from "../assets/revestimentos2.jpg";
import antesI2 from "../assets/reservatorio antes.png";
import depoisI2 from "../assets/Presidente Roosevelt (32).jpg";

// ── Externa images
import extManta from "../assets/manta asfaltica 1.png";
import extGeo1 from "../assets/geomembrana externa.png";
import extGeo2 from "../assets/geomembrana externa2 1.png";

const WPP_RS = "https://api.whatsapp.com/send?phone=5551981969303";

const activeTab = ref("interna");

function switchTab(tab) {
  activeTab.value = tab;
  const id = tab === "interna" ? "interna" : "externa";
  const el = document.getElementById(id);
  if (el) {
    setTimeout(
      () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
      10,
    );
  }
}

function onTabKeydown(e, currentTab) {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    e.preventDefault();
    const next = currentTab === "interna" ? "externa" : "interna";
    switchTab(next);
    document.getElementById(`tab-${next}`)?.focus();
  }
}
</script>

<template>
  <div class="page-imp">
    <NavBar />

    <!-- ══ HERO ══ -->
    <header class="hero" role="banner">
      <!-- Vídeo de fundo full-screen -->
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
        preload="auto"
      >
        <source src="../assets/hero-impermeabilizacao.mp4" type="video/mp4" />
      </video>
      <!-- Overlay translúcido para legibilidade do texto escuro -->
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="hero-inner">
        <!-- Text -->
        <div class="hero-content">
          <p class="hero-eyebrow" aria-hidden="true">Especialista em RS e SC</p>
          <h1 class="hero-h1">
            Impermeabilização<br />
            de caixa d'água<br />
            <span class="hl">com garantia real</span>
          </h1>
          <p class="hero-sub">
            Tecnologia patenteada e exclusiva no Brasil. Instalação em 1 dia,
            sem obras, sem entulho — e a caixa liberada para uso no mesmo dia.
          </p>
          <div class="hero-badges" role="list" aria-label="Diferenciais">
            <span class="badge badge--accent" role="listitem"
              >Aprovado ANVISA</span
            >
            <span class="badge badge--accent" role="listitem"
              >Instalação em 1 dia</span
            >
            <span class="badge badge--accent" role="listitem"
              >Garantia 5 anos</span
            >
            <span class="badge badge--accent" role="listitem">Sem obras</span>
          </div>
          <div class="hero-ctas">
            <a
              :href="WPP_RS"
              class="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento gratuito via WhatsApp — Rio Grande do Sul"
            >
              <svg
                class="wsv"
                viewBox="0 0 600 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g class="wg1">
                  <path
                    class="wf1"
                    d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                  />
                </g>
                <g class="wg2">
                  <path
                    class="wf2"
                    d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                  />
                </g>
              </svg>
              <span class="wlbl">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke-width="1.5"
                  aria-hidden="true"
                  class="wp-icon"
                >
                  <path
                    stroke="currentColor"
                    d="M13.6 2.4C12.1.9 10.1 0 8 0 3.6 0 0 3.6 0 8c0 1.4.4 2.8 1 4L0 16l4.1-1.1C5.3 15.6 6.6 16 8 16c4.4 0 8-3.6 8-8 0-2.1-.9-4.1-2.4-5.6z"
                  />
                  <path
                    stroke="none"
                    fill="rgba(255,255,255,.85)"
                    d="M11.5 9.9c-.2-.1-1.3-.7-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1.2-1-1.4-.1-.3 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4 0-.2-.5-1.3-.7-1.7-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3C3.7 5.3 3 6 3 7.3c0 1.3.9 2.5 1 2.7.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.1 1.2.1 1.6 0 .5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2z"
                  />
                </svg>
                Orçamento Grátis
              </span>
            </a>
            <a
              :href="activeTab === 'externa' ? '#externa' : '#interna'"
              class="btn-ghost"
              :aria-label="`Ver como funciona — ir para seção de impermeabilização ${activeTab}`"
              >Ver como funciona <span aria-hidden="true">↓</span></a
            >
          </div>
        </div>
      </div>
    </header>

    <!-- Wave -->
    <div class="wave-div" aria-hidden="true"></div>

    <!-- ══ TABS ══ -->
    <div
      class="section-selector"
      role="tablist"
      aria-label="Tipos de impermeabilização"
    >
      <div class="tabs-inner">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'interna' }"
          id="tab-interna"
          role="tab"
          :aria-selected="activeTab === 'interna'"
          aria-controls="panel-interna"
          @click="switchTab('interna')"
          @keydown="onTabKeydown($event, 'interna')"
        >
          <span class="tab-full">Impermeabilização Interna</span>
          <span class="tab-short" aria-hidden="true">Imp. Interna</span>
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'externa' }"
          id="tab-externa"
          role="tab"
          :aria-selected="activeTab === 'externa'"
          aria-controls="panel-externa"
          @click="switchTab('externa')"
          @keydown="onTabKeydown($event, 'externa')"
        >
          <span class="tab-full">Impermeabilização Externa</span>
          <span class="tab-short" aria-hidden="true">Imp. Externa</span>
        </button>
      </div>
    </div>

    <!-- ══ PAINEL INTERNA ══ -->
    <div
      id="panel-interna"
      role="tabpanel"
      aria-labelledby="tab-interna"
      v-show="activeTab === 'interna'"
    >
      <section class="sec-content" id="interna">
        <p class="sec-eyebrow" aria-hidden="true">Impermeabilização Interna</p>
        <h2 class="sec-title">
          PVC Geomembrana — tecnologia<br /><span class="hl"
            >exclusiva e patenteada no Brasil</span
          >
        </h2>
        <p class="sec-desc">
          O revestimento interno com geomembrana de PVC flexível é aplicado sob
          medida dentro da caixa d'água, criando uma barreira total contra
          infiltrações e deterioração do concreto. Atóxico, aprovado pela ANVISA
          e com garantia de 5 anos.
        </p>

        <!-- Antes e Depois 1 -->
        <div class="ba-section" aria-label="Comparativo antes e depois">
          <p class="ba-label" aria-hidden="true">
            Antes e depois do revestimento
          </p>
          <div class="ba-grid" role="group" aria-label="Imagens comparativas">
            <div class="ba-item">
              <img
                :src="antesI1"
                alt="Interior de caixa d'água deteriorada com infiltrações — antes do serviço"
                loading="lazy"
              />
              <span class="ba-tag ba-tag--antes" aria-hidden="true">Antes</span>
              <p class="ba-caption">
                Concreto exposto com infiltrações — risco à saúde
              </p>
            </div>
            <div class="ba-item">
              <img
                :src="depoisI1"
                alt="Interior de caixa d'água revestida com PVC geomembrana — após o serviço"
                loading="lazy"
              />
              <span class="ba-tag ba-tag--depois" aria-hidden="true"
                >Depois</span
              >
              <p class="ba-caption">
                PVC geomembrana instalado — superfície lisa, atóxica e
                impermeável
              </p>
            </div>
          </div>
        </div>

        <!-- Galeria de processo -->
        <div aria-label="Galeria do processo de instalação">
          <p class="ba-label" aria-hidden="true">Etapas do processo</p>
          <div
            class="gallery-grid"
            role="group"
            aria-label="Fotos das etapas de instalação"
          >
            <div class="gal-item">
              <img
                :src="procLimpeza"
                alt="Preparação dos barriletes de alumínio para fixação"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true">Barriletes</span>
            </div>
            <div class="gal-item">
              <img
                :src="procFixacao"
                alt="Instalação do revestimento PVC na caixa d'água"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true"
                >Fixação dos barriletes</span
              >
            </div>
            <div class="gal-item">
              <img
                :src="procSolda"
                alt="Solda térmica do PVC nas tubulações internas"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true">Solda térmica</span>
            </div>
            <div class="gal-item">
              <img
                :src="procFinal"
                alt="Instalação do PVC geomembrana concluída"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true"
                >Instalação concluída</span
              >
            </div>
            <div class="gal-item">
              <img
                :src="procFinal2"
                alt="Interior de caixa d'água com revestimento PVC geomembrana instalado"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true"
                >Revestimento interno</span
              >
            </div>
          </div>
        </div>

        <!-- Antes e Depois 2 -->
        <div class="ba-section" aria-label="Segundo comparativo antes e depois">
          <p class="ba-label" aria-hidden="true">
            Outro exemplo — caixa de grande volume
          </p>
          <div class="ba-grid" role="group" aria-label="Segundo comparativo">
            <div class="ba-item">
              <img
                :src="antesI2"
                alt="Caixa d'água com concreto deteriorado — antes"
                loading="lazy"
              />
              <span class="ba-tag ba-tag--antes" aria-hidden="true">Antes</span>
              <p class="ba-caption">
                Infiltrações visíveis — situação comum em condomínios
              </p>
            </div>
            <div class="ba-item">
              <img
                :src="depoisI2"
                alt="Caixa d'água com PVC geomembrana instalado — depois"
                loading="lazy"
              />
              <span class="ba-tag ba-tag--depois" aria-hidden="true"
                >Depois</span
              >
              <p class="ba-caption">
                Revestimento integral — paredes, fundo e entorno das tubulações
              </p>
            </div>
          </div>
        </div>

        <!-- Processo passo a passo -->
        <div
          class="process-section"
          id="processo-interna"
          aria-labelledby="processo-title"
        >
          <div class="process-header">
            <div>
              <p class="sec-eyebrow" aria-hidden="true">Como funciona</p>
              <h2 class="sec-title sec-title--inline" id="processo-title">
                Instalação em <span class="hl">6 etapas</span>
              </h2>
            </div>
            <p class="process-note">
              Do esgotamento à entrega: tudo em 1 dia, sem obras.
            </p>
          </div>

          <div class="process-grid" role="list" aria-label="Etapas do processo">
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">01</div>
              <h3 class="step-title">Levantamento técnico</h3>
              <p class="step-text">
                Verificação das condições físicas do reservatório e planejamento
                da instalação conforme as dimensões internas da caixa.
              </p>
            </div>
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">02</div>
              <h3 class="step-title">Esgotamento e limpeza</h3>
              <p class="step-text">
                Esvaziamento do reservatório e escovação interna com solução de
                hipoclorito de sódio — sem detergentes ou produtos químicos.
              </p>
            </div>
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">03</div>
              <h3 class="step-title">Fixação dos barriletes</h3>
              <p class="step-text">
                Instalação dos perfis de alumínio com buchas e parafusos
                inoxidáveis próximos à laje superior, acima do nível d'água da
                bóia.
              </p>
            </div>
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">04</div>
              <h3 class="step-title">Instalação do revestimento</h3>
              <p class="step-text">
                O módulo de PVC geomembrana chega pronto, sob medida. É aberto
                dentro do reservatório e ancorado nos barriletes instalados.
              </p>
            </div>
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">05</div>
              <h3 class="step-title">Solda nas tubulações</h3>
              <p class="step-text">
                Fusão por soprador térmico une o PVC flexível ao PVC rígido dos
                canos — formam um único corpo, sem passagem de água entre eles.
              </p>
            </div>
            <div class="step-card" role="listitem">
              <div class="step-num" aria-hidden="true">06</div>
              <h3 class="step-title">Sanitização e entrega</h3>
              <p class="step-text">
                Limpeza final e sanitização do reservatório. Emissão do
                Certificado de Limpeza e Conservação, válido por 1 ano na
                Secretaria de Saúde.
              </p>
            </div>
          </div>
        </div>

        <!-- Especificações técnicas -->
        <div class="specs-section" aria-labelledby="specs-title">
          <p class="specs-label" aria-hidden="true">Especificações técnicas</p>
          <div
            class="specs-grid"
            role="list"
            aria-label="Especificações técnicas"
          >
            <div class="spec-item" role="listitem">
              <p class="spec-label">Material</p>
              <p class="spec-value">PVC Flexível</p>
              <p class="spec-desc">
                Geomembrana sem porosidade, lisa e de cor cinza claro
              </p>
            </div>
            <div class="spec-item" role="listitem">
              <p class="spec-label">Instalação</p>
              <p class="spec-value">1 dia</p>
              <p class="spec-desc">
                Sem obras de alvenaria — apenas limpeza prévia necessária
              </p>
            </div>
            <div class="spec-item" role="listitem">
              <p class="spec-label">Garantia</p>
              <p class="spec-value">5 anos</p>
              <p class="spec-desc">
                Contra infiltrações em paredes e laje de fundo provenientes do
                material
              </p>
            </div>
            <div class="spec-item" role="listitem">
              <p class="spec-label">QUALIDADE</p>
              <p class="spec-value">Durabilidade</p>
              <p class="spec-desc">
                Certificado pela Vig. Sanitária Municipal.aprovado para contato
                direto com água potável
              </p>
            </div>
          </div>
        </div>

        <!-- Garantia strip -->
        <div
          class="guarantee-strip"
          role="region"
          aria-label="Certificado incluso"
        >
          <div class="guarantee-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="guarantee-text">
            <h3>Certificado de Limpeza e Conservação incluso</h3>
            <p>
              Documento válido por 1 ano para residênicas e 6 meses pra
              comércios na Secretaria Municipal de Saúde — o condomínio fica
              livre de vistorias, notificações e multas por falta de higiene.
            </p>
          </div>
          <a
            :href="WPP_RS"
            class="btn-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento da impermeabilização interna via WhatsApp"
          >
            <svg
              class="wsv"
              viewBox="0 0 600 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g class="wg1">
                <path
                  class="wf1"
                  d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                />
              </g>
              <g class="wg2">
                <path
                  class="wf2"
                  d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                />
              </g>
            </svg>
            <span class="wlbl">Solicitar orçamento</span>
          </a>
        </div>
      </section>
    </div>

    <!-- ══ PAINEL EXTERNA ══ -->
    <div
      id="panel-externa"
      role="tabpanel"
      aria-labelledby="tab-externa"
      v-show="activeTab === 'externa'"
    >
      <section class="sec-content" id="externa">
        <p class="sec-eyebrow" aria-hidden="true">Impermeabilização Externa</p>
        <h2 class="sec-title">
          Manta asfáltica — proteção<br /><span class="hl"
            >pela face externa</span
          >
        </h2>
        <p class="sec-desc">
          Quando o problema está na parte externa do reservatório — umidade no
          teto, manchas nas lajes ou infiltrações na estrutura — a solução é a
          impermeabilização com manta asfáltica, aplicada sobre a superfície
          externa da caixa.
        </p>

        <!-- Callout diferença -->
        <div
          class="diff-callout"
          role="note"
          aria-label="Diferença entre revestimento interno e externo"
        >
          <h4>Revestimento interno × Impermeabilização externa</h4>
          <p>
            O revestimento interno (PVC geomembrana) protege a água de dentro da
            caixa, impedindo que o concreto contamine o que você consome. Já a
            impermeabilização externa atua na estrutura: evita que a umidade do
            ambiente externo penetre nas paredes do reservatório e cause danos à
            laje e à ferragem do concreto. São serviços complementares — cada um
            resolve um problema diferente.
          </p>
        </div>

        <!-- Comparativo -->
        <div aria-label="Comparativo entre os tipos de serviço">
          <p class="ba-label" aria-hidden="true">
            Qual serviço resolve seu problema?
          </p>
          <div
            class="compare-grid"
            role="group"
            aria-label="Comparativo interno × externo"
          >
            <div class="compare-card">
              <span class="compare-chip compare-chip--azul" aria-hidden="true"
                >Interna — PVC</span
              >
              <h3>Protege a água</h3>
              <p>
                Para quando o concreto dentro da caixa está deteriorado, a água
                chega suja ou com gosto estranho, e há infiltrações nas paredes
                internas.
              </p>
              <ul class="compare-list" role="list" aria-label="Indicado para">
                <li>Água com cor ou odor diferente</li>
                <li>Concreto descascando por dentro</li>
                <li>Infiltrações visíveis internamente</li>
                <li>Necessidade de certificado de limpeza</li>
              </ul>
            </div>

            <div class="compare-card compare-card--dark">
              <span class="compare-chip compare-chip--escuro" aria-hidden="true"
                >Externa — Manta</span
              >
              <h3>Protege a estrutura</h3>
              <p>
                Para quando há umidade no teto abaixo da caixa, manchas de
                infiltração na laje, ou quando a estrutura de concreto externo
                está sendo comprometida.
              </p>
              <ul class="compare-list" role="list" aria-label="Indicado para">
                <li>Umidade ou manchas no teto embaixo</li>
                <li>Infiltração na laje externa</li>
                <li>Ferragem do concreto exposta</li>
                <li>Prevenção de danos estruturais</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Galeria externa -->
        <div aria-label="Galeria da impermeabilização externa">
          <p class="ba-label" aria-hidden="true">Galeria — manta asfáltica</p>
          <div
            class="gallery-3"
            role="group"
            aria-label="Fotos da impermeabilização externa"
          >
            <div class="g3-item">
              <img
                :src="extManta"
                alt="Manta asfáltica aplicada sobre superfície externa da caixa d'água"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true">Manta asfáltica</span>
            </div>
            <div class="g3-item">
              <img
                :src="extGeo1"
                alt="Geomembrana aplicada na face externa do reservatório"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true"
                >Geomembrana externa</span
              >
            </div>
            <div class="g3-item">
              <img
                :src="extGeo2"
                alt="Acabamento da geomembrana externa na caixa d'água"
                loading="lazy"
              />
              <span class="gal-label" aria-hidden="true">Acabamento</span>
            </div>
          </div>
        </div>

        <!-- Manta cards -->
        <div class="manta-section" aria-labelledby="manta-title">
          <p class="sec-eyebrow" aria-hidden="true">Manta asfáltica</p>
          <h2 class="sec-title sec-title--inline" id="manta-title">
            Como a manta <span class="hl">protege a estrutura</span>
          </h2>
          <p class="sec-desc">
            A manta asfáltica é aplicada sobre a superfície externa com calor,
            criando uma membrana impermeável que impede a passagem de umidade do
            ambiente para dentro da estrutura de concreto.
          </p>

          <div
            class="manta-grid"
            role="list"
            aria-label="Características da manta asfáltica"
          >
            <div class="manta-card" role="listitem">
              <div class="manta-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2v16M2 10h16"
                    stroke="#1A6BC4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h4>Aplicação a quente</h4>
              <p>
                A manta é fixada com maçarico, fundindo ao substrato de cimento
                — cria uma barreira impermeável e duradoura, sem risco de
                descolamento.
              </p>
            </div>

            <div class="manta-card" role="listitem">
              <div class="manta-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#1A6BC4"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7 10l2 2 4-4"
                    stroke="#1A6BC4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h4>Proteção estrutural</h4>
              <p>
                Evita que a ferragem do concreto fique exposta à umidade,
                prevenindo oxidação e os danos estruturais graves que ela causa
                ao longo do tempo.
              </p>
            </div>

            <div class="manta-card" role="listitem">
              <div class="manta-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 3C6.5 3 4 6 4 10s2.5 7 6 7 6-3 6-7-2.5-7-6-7z"
                    stroke="#1A6BC4"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10 7v3l2 2"
                    stroke="#1A6BC4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h4>Durabilidade comprovada</h4>
              <p>
                Material testado para ambientes externos com variações de
                temperatura e exposição solar — mantém a eficiência mesmo sob
                condições climáticas adversas.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA externa -->
        <div class="guarantee-strip">
          <div class="guarantee-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="guarantee-text">
            <h3>Diagnóstico gratuito</h3>
            <p>
              Informe o problema e receba uma avaliação técnica sem compromisso
              — presencial ou por fotos. Atendemos RS e SC.
            </p>
          </div>
          <a
            :href="WPP_RS"
            class="btn-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar diagnóstico da impermeabilização externa"
          >
            <svg
              class="wsv"
              viewBox="0 0 600 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g class="wg1">
                <path
                  class="wf1"
                  d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                />
              </g>
              <g class="wg2">
                <path
                  class="wf2"
                  d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                />
              </g>
            </svg>
            <span class="wlbl">Solicitar diagnóstico</span>
          </a>
        </div>
      </section>
    </div>

    <!-- ══ CTA FINAL ══ -->
    <section class="cta-final" aria-labelledby="cta-title">
      <div class="cta-inner">
        <p class="sec-eyebrow" aria-hidden="true">Próximo passo</p>
        <h2 id="cta-title">
          Água limpa e estrutura<br />
          <span class="hl">protegida em 1 dia</span>
        </h2>
        <p>
          Atendemos residências, condomínios e empresas em todo o Rio Grande do
          Sul e Santa Catarina. Orçamento gratuito — sem visita técnica
          obrigatória para casos simples.
        </p>
        <div class="cta-btns">
          <a
            :href="WPP_RS"
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
          >
            <svg
              class="wsv"
              viewBox="0 0 600 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g class="wg1">
                <path
                  class="wf1"
                  d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"
                />
              </g>
              <g class="wg2">
                <path
                  class="wf2"
                  d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"
                />
              </g>
            </svg>
            <span class="wlbl">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke-width="1.5"
                aria-hidden="true"
                class="wp-icon"
              >
                <path
                  stroke="currentColor"
                  d="M13.6 2.4C12.1.9 10.1 0 8 0 3.6 0 0 3.6 0 8c0 1.4.4 2.8 1 4L0 16l4.1-1.1C5.3 15.6 6.6 16 8 16c4.4 0 8-3.6 8-8 0-2.1-.9-4.1-2.4-5.6z"
                />
                <path
                  stroke="none"
                  fill="rgba(255,255,255,.85)"
                  d="M11.5 9.9c-.2-.1-1.3-.7-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1.2-1-1.4-.1-.3 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4 0-.2-.5-1.3-.7-1.7-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3C3.7 5.3 3 6 3 7.3c0 1.3.9 2.5 1 2.7.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.1 1.2.1 1.6 0 .5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2z"
                />
              </svg>
              Orçamento Grátis — WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
/* ═══════════════════════════════
   PAGE WRAPPER
═══════════════════════════════ */
.page-imp {
  min-height: 100svh;
  background: var(--color-fog);
  padding-top: 68px;
}

/* ═══════════════════════════════
   HERO
═══════════════════════════════ */
.hero {
  position: relative;
  overflow: hidden;
  margin-top: -68px;
  padding: calc(68px + 64px) 24px 72px;
  /* sem background — o vídeo ocupa tudo */
}

/* Vídeo de fundo */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  pointer-events: none;
}

/* Overlay leve branqueado para garantir contraste do texto escuro */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.3);
  z-index: 1;
  pointer-events: none;
}

.hero-inner {
  max-width: 760px;
  margin: 0;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-cobalt);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-eyebrow::before {
  content: "";
  width: 24px;
  height: 1px;
  background: var(--color-cobalt);
  flex-shrink: 0;
}

.hero-h1 {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: clamp(28px, 7vw, 52px);
  line-height: 1.08;
  letter-spacing: 0.01em;
  color: var(--color-navy-deep);
  margin-bottom: 20px;
}

.hero-h1 .hl {
  color: var(--color-cobalt);
}

.hero-sub {
  font-size: 17px;
  color: var(--color-navy-deep);
  line-height: 1.72;
  font-weight: 700;
  max-width: 480px;
  margin-bottom: 28px;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.badge {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 2px;
  border: 1px solid rgba(26, 107, 196, 0.3);
  color: var(--color-navy);
  background: rgba(26, 107, 196, 0.08);
}

.badge--accent {
  border-color: var(--color-navy);
  color: var(--color-navy);
  background: rgba(26, 107, 196, 0.14);
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* ═══════════════════════════════
   TABS
═══════════════════════════════ */
.section-selector {
  background: var(--color-fog);
  padding: 0 24px;
  border-bottom: 1px solid var(--color-mist);
  position: sticky;
  top: 68px;
  z-index: 100;
}

.tabs-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.tabs-inner::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  font-family: var(--font-mono);
  font-size: 14px; /* era 11px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-steel);
  background: none;
  border: none;
  cursor: pointer;
  padding: 18px 24px;
  border-bottom: 2px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.tab-btn:hover {
  color: var(--color-cobalt);
}

.tab-btn.active {
  color: var(--color-cobalt);
  border-bottom-color: var(--color-cobalt);
  font-weight: 500;
}

.tab-full { display: none; }
.tab-short { display: inline; }

@media (min-width: 480px) {
  .tab-full { display: inline; }
  .tab-short { display: none; }
}

/* ═══════════════════════════════
   SECTION CONTENT
═══════════════════════════════ */
.sec-content {
  max-width: 1080px;
  margin: 0 auto;
  padding: 56px 24px 72px;
}

.sec-eyebrow {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-cobalt);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sec-eyebrow::before {
  content: "";
  width: 20px;
  height: 1px;
  background: var(--color-cobalt);
  flex-shrink: 0;
}

.sec-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(24px, 3.5vw, 38px);
  line-height: 1.1;
  color: var(--color-navy-deep);
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

.sec-title .hl {
  color: var(--color-cobalt);
}

.sec-title--inline {
  margin-bottom: 0;
}

.sec-desc {
  font-size: 17px; /* era 15px */
  color: var(--color-steel);
  font-weight: 500; /* era 300 */
  line-height: 1.75;
  max-width: 640px;
  margin-bottom: 48px;
}

/* ── Before/After ── */
.ba-section {
  margin-bottom: 64px;
}

.ba-label {
  font-family: var(--font-mono);
  font-size: 14px; /* era 10px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.ba-label::after {
  content: "";
  flex: 1;
  height: 0.5px;
  background: var(--color-mist);
}

.ba-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--color-mist);
}

.ba-item {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--color-navy);
}

.ba-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease-spring);
}

.ba-item:hover img {
  transform: scale(1.03);
}

.ba-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: var(--font-mono);
  font-size: 11px; /* era 10px — tag sobre imagem, ok */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 2px;
  backdrop-filter: blur(8px);
}

.ba-tag--antes {
  background: rgba(13, 26, 50, 0.7);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.ba-tag--depois {
  background: rgba(13, 42, 82, 0.65);
  color: var(--color-cyan-light);
  border: 1px solid rgba(122, 220, 245, 0.4);
}

.ba-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 16px 14px;
  background: linear-gradient(to top, rgba(13, 26, 50, 0.85), transparent);
  font-size: 15px; /* era 13px */
  color: rgba(255, 255, 255, 0.85); /* era 0.75 */
  font-weight: 500; /* era 300 */
}

/* ── Gallery grid ── */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 64px;
}

.gal-item {
  overflow: hidden;
  background: var(--color-navy);
  position: relative;
  aspect-ratio: 1/1;
}

.gal-item:first-child {
  grid-column: 1 / -1;
  aspect-ratio: 16/9;
}

.gal-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease-spring);
}

.gal-item:hover img {
  transform: scale(1.04);
}

.gal-label {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-family: var(--font-mono);
  font-size: 11px; /* era 10px — label sobre imagem */
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75); /* era 0.65 */
  background: rgba(13, 26, 50, 0.6);
  backdrop-filter: blur(6px);
  padding: 3px 8px;
  border-radius: 2px;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
}

/* ── Process ── */
.process-section {
  margin-bottom: 64px;
}

.process-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 24px;
  flex-wrap: wrap;
}

.process-note {
  font-size: 14px; /* era 13px */
  color: var(--color-iron);
  font-weight: 500; /* era 300 */
  max-width: 200px;
  text-align: right;
  line-height: 1.6;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}

.step-card {
  background: var(--color-white);
  border: 0.5px solid var(--color-mist);
  padding: 24px 20px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.step-card:hover {
  border-color: rgba(0, 184, 240, 0.3);
  box-shadow: 0 4px 20px rgba(26, 74, 138, 0.08);
}

.step-num {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: 36px;
  color: var(--color-mist);
  line-height: 1;
  margin-bottom: 10px;
  transition: color 0.2s;
}

.step-card:hover .step-num {
  color: var(--color-cyan-pale);
}

.step-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px; /* era 15px */
  color: var(--color-navy);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.step-text {
  font-size: 16px; /* era 14px */
  color: var(--color-iron);
  font-weight: 500; /* era 300 */
  line-height: 1.65;
}

/* ── Specs ── */
.specs-section {
  background: var(--color-navy-deep);
  border-radius: 4px;
  padding: 40px 24px;
  margin-bottom: 64px;
  position: relative;
  overflow: hidden;
}

.specs-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(0, 184, 240, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.specs-label {
  font-family: var(--font-mono);
  font-size: 14px; /* era 9px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4); /* era 0.25 */
  margin-bottom: 24px;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  position: relative;
  z-index: 1;
}

@media (min-width: 480px) {
  .specs-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.spec-label {
  font-family: var(--font-mono);
  font-size: 12px; /* era 9px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
}

.spec-value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  color: var(--color-cyan-light);
  line-height: 1.2;
  margin-bottom: 4px;
}

.spec-desc {
  font-size: 14px; /* era 12px */
  color: rgba(255, 255, 255, 0.6); /* era 0.45 */
  font-weight: 500; /* era 300 */
  line-height: 1.5;
}

/* ── Guarantee strip ── */
.guarantee-strip {
  background: rgba(0, 184, 240, 0.06);
  border: 1px solid rgba(0, 184, 240, 0.2);
  border-radius: 4px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 0;
}

.guarantee-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: var(--color-cobalt);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.guarantee-text h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px; /* era 16px */
  color: var(--color-navy-deep);
  margin-bottom: 4px;
}

.guarantee-text p {
  font-size: 16px; /* era 14px */
  color: var(--color-steel);
  font-weight: 500; /* era 300 */
  line-height: 1.6;
}

/* ═══════════════════════════════
   EXTERNAL SECTION
═══════════════════════════════ */
.diff-callout {
  background: var(--color-white);
  border: 0.5px solid var(--color-mist);
  border-left: 3px solid var(--color-sky);
  border-radius: 4px;
  padding: 24px 28px;
  margin-bottom: 48px;
  max-width: 720px;
}

.diff-callout h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px; /* era 14px */
  color: var(--color-cobalt);
  margin-bottom: 8px;
  letter-spacing: 0.01em;
}

.diff-callout p {
  font-size: 16px; /* era 14px */
  color: var(--color-steel);
  font-weight: 500; /* era 300 */
  line-height: 1.7;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 48px;
}

.compare-card {
  background: var(--color-white);
  border: 0.5px solid var(--color-mist);
  border-radius: 4px;
  padding: 28px 24px;
}

.compare-card--dark {
  background: var(--color-navy-deep);
  border-color: rgba(0, 184, 240, 0.2);
}

.compare-chip {
  display: inline-flex;
  font-family: var(--font-mono);
  font-size: 11px; /* era 10px */
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 2px;
  margin-bottom: 16px;
}

.compare-chip--azul {
  background: var(--color-cyan-ghost);
  color: var(--color-cobalt);
  border: 1px solid var(--color-cyan-pale);
}

.compare-chip--escuro {
  background: rgba(0, 184, 240, 0.1);
  color: var(--color-sky);
  border: 1px solid rgba(0, 184, 240, 0.2);
}

.compare-card h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.compare-card:not(.compare-card--dark) h3 {
  color: var(--color-navy-deep);
}
.compare-card--dark h3 {
  color: var(--color-white);
}

.compare-card p {
  font-size: 16px; /* era 14px */
  font-weight: 500; /* era 300 */
  line-height: 1.7;
  margin-bottom: 16px;
}

.compare-card:not(.compare-card--dark) p {
  color: var(--color-steel);
}
.compare-card--dark p {
  color: rgba(255, 255, 255, 0.7);
} /* era 0.55 */

.compare-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.compare-list li {
  font-size: 15px; /* era 13px */
  font-weight: 500; /* era 300 */
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;
}

.compare-list li::before {
  content: "→";
  font-family: var(--font-mono);
  font-size: 11px;
  flex-shrink: 0;
  margin-top: 1px;
}

.compare-card:not(.compare-card--dark) .compare-list li {
  color: var(--color-steel);
}
.compare-card--dark .compare-list li {
  color: rgba(255, 255, 255, 0.75);
} /* era 0.6 */
.compare-card:not(.compare-card--dark) .compare-list li::before {
  color: var(--color-cobalt);
}
.compare-card--dark .compare-list li::before {
  color: var(--color-cyan);
}

/* Gallery 3 */
.gallery-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--color-mist);
  margin-bottom: 48px;
}

.g3-item {
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--color-navy);
  position: relative;
}

.g3-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease-spring);
}

.g3-item:hover img {
  transform: scale(1.05);
}

/* Manta cards */
.manta-section {
  margin-top: 48px;
}

.manta-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 48px;
}

.manta-card {
  background: var(--color-white);
  border: 0.5px solid var(--color-mist);
  padding: 20px;
  border-radius: 4px;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}

.manta-card:hover {
  border-color: rgba(0, 184, 240, 0.25);
  box-shadow: 0 4px 20px rgba(26, 74, 138, 0.07);
}

.manta-icon {
  width: 36px;
  height: 36px;
  background: var(--color-cyan-ghost);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.manta-card h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px; /* era 15px */
  color: var(--color-navy);
  margin-bottom: 6px;
}

.manta-card p {
  font-size: 15px; /* era 13px */
  color: var(--color-iron);
  font-weight: 500; /* era 300 */
  line-height: 1.6;
}

/* ═══════════════════════════════
   BUTTONS
═══════════════════════════════ */
.btn-primary {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-navy);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 28px;
  border-radius: 40px;
  border: 2px solid var(--color-sky);
  cursor: pointer;
  min-height: 48px;
  white-space: nowrap;
  isolation: isolate;
  transition: color 0.38s ease;
}

.btn-primary .wsv {
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

.btn-primary:hover .wsv {
  opacity: 1;
}

.btn-primary .wlbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: color 0.38s;
}

.btn-primary .wp-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.btn-primary .wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.btn-primary .wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.btn-primary:hover .wg1 {
  animation:
    waveRise1 0.65s var(--ease-spring) forwards,
    waveBob1 3.2s ease-in-out 0.65s infinite;
}
.btn-primary:hover .wg2 {
  animation:
    waveRise2 0.7s var(--ease-spring) 0.05s forwards,
    waveBob2 4s ease-in-out 0.75s infinite;
}

.btn-primary .wf1 {
  fill: var(--color-sky);
}
.btn-primary .wf2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}
.btn-primary:hover .wlbl {
  color: var(--color-navy-deep);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--color-steel);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 40px;
  border: 1.5px solid rgba(26, 74, 138, 0.35);
  cursor: pointer;
  min-height: 48px;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--color-cobalt);
  color: var(--color-cobalt);
}

.btn-cta {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  background: var(--color-navy-deep);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px; /* era 12px */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 60px;
  border-radius: 40px;
  border: 2px solid var(--color-sky);
  white-space: nowrap;
  isolation: isolate;
  transition: color 0.38s ease;
}

.btn-cta .wsv {
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

.btn-cta:hover .wsv {
  opacity: 1;
}

.btn-cta .wlbl {
  position: relative;
  z-index: 1;
  transition: color 0.38s;
}

.btn-cta .wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.btn-cta .wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.btn-cta:hover .wg1 {
  animation:
    waveRise1 0.65s var(--ease-spring) forwards,
    waveBob1 3.2s ease-in-out 0.65s infinite;
}
.btn-cta:hover .wg2 {
  animation:
    waveRise2 0.7s var(--ease-spring) 0.05s forwards,
    waveBob2 4s ease-in-out 0.75s infinite;
}

.btn-cta .wf1 {
  fill: var(--color-sky);
}
.btn-cta .wf2 {
  fill: var(--color-cyan-light);
  opacity: 0.5;
}
.btn-cta:hover .wlbl {
  color: var(--color-navy-deep);
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

/* ═══════════════════════════════
   CTA FINAL
═══════════════════════════════ */
.cta-final {
  background: var(--color-navy-deep);
  padding: 72px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-final::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 60% 100% at 50% 100%,
    rgba(0, 184, 240, 0.1) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.cta-inner {
  max-width: 560px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-final .sec-eyebrow {
  justify-content: center;
}
.cta-final .sec-eyebrow::before {
  display: none;
}

.cta-final h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(24px, 4vw, 36px);
  color: #fff;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.cta-final h2 .hl {
  color: var(--color-cyan-light);
}

.cta-final > .cta-inner > p {
  font-size: 17px; /* era 15px */
  color: rgba(255, 255, 255, 0.7); /* era 0.55 */
  font-weight: 500; /* era 300 */
  line-height: 1.7;
  margin-bottom: 36px;
}

.cta-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

/* ═══════════════════════════════
   TABLET — 600px+
═══════════════════════════════ */
@media (min-width: 600px) {
  .ba-grid {
    grid-template-columns: 1fr 1fr;
  }

  .gallery-grid {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 6px;
  }

  .gallery-grid .gal-item:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
    aspect-ratio: auto;
  }

  .gallery-grid .gal-item:not(:first-child) {
    aspect-ratio: 4/3;
  }

  .process-grid {
    grid-template-columns: 1fr 1fr;
  }
  .compare-grid {
    grid-template-columns: 1fr 1fr;
  }
  .gallery-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .manta-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .cta-btns {
    flex-direction: row;
    justify-content: center;
  }

  .guarantee-strip {
    flex-direction: row;
    align-items: center;
  }
  .btn-cta {
    align-self: auto;
    margin-left: auto;
  }
}

/* ═══════════════════════════════
   DESKTOP — 900px+
═══════════════════════════════ */
@media (min-width: 900px) {
  .hero {
    padding: calc(68px + 80px) max(24px, calc((100vw - 1280px) / 2)) 88px;
  }

  .sec-content {
    padding: 72px 48px;
  }
  .section-selector {
    padding: 0 48px;
  }
  .specs-section {
    padding: 48px;
  }
  .specs-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .process-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .process-note {
    max-width: 240px;
  }
  .gallery-grid {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 320px 320px;
    gap: 6px;
  }

  .gallery-grid .gal-item:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
    aspect-ratio: auto;
  }

  .gallery-grid .gal-item:not(:first-child) {
    aspect-ratio: 4/3;
  }
}

@media (min-width: 1080px) {
  .tabs-inner {
    padding: 0;
  }
}

/* ═══════════════════════════════
   FOCUS (WCAG 2.4.7)
═══════════════════════════════ */
.tab-btn:focus-visible,
.btn-primary:focus-visible,
.btn-ghost:focus-visible,
.btn-cta:focus-visible {
  outline: 3px solid var(--color-sky);
  outline-offset: 3px;
}

/* ═══════════════════════════════
   REDUCED MOTION (WCAG 2.2.2 / 2.3.3)
═══════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    display: none;
  }
  .hero {
    background: var(--color-navy-deep);
  }
  .hero-h1,
  .hero-sub,
  .hero-eyebrow {
    color: #fff;
  }
  .hero-h1 .hl {
    color: var(--color-cyan-light);
  }
  .hero-eyebrow {
    color: var(--color-cyan-pale);
  }
  .hero-eyebrow::before {
    background: var(--color-cyan-pale);
  }
  .badge {
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
