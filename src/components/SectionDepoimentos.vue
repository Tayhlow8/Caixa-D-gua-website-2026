<script setup>
defineProps({
  rating: { type: Number, default: 4.7 },
  reviewCount: { type: [String, Number], default: null },
  googleUrl: {
    type: String,
    default:
      "https://www.google.com/maps/place/Caixa+D'%C3%A1gua+Revestimento+Impermeabiliza%C3%A7%C3%A3o+em+PVC/@-30.0227809,-51.1480857,15z/data=!4m6!3m5!1s0x951977adbf8c5a17:0xda35d91009ff89bb!8m2!3d-30.0188163!4d-51.1413608!16s%2Fg%2F1tz96xs_?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  reviews: {
    type: Array,
    default: () => [
      {
        id: 1,
        nome: "Sandra Gomes",
        iniciais: "SG",
        avatar: null,
        cidade: "Porto Alegre · RS",
        nota: 5,
        texto:
          "Trabalho excelente desta empresa. Higienização, uma vez por ano, com os mesmos. Tem garantia.",
        data: "2025",
        destaque: true,
      },
      {
        id: 2,
        nome: "Marcos Henrique S.",
        iniciais: "MH",
        avatar: null,
        cidade: "Porto Alegre · RS",
        nota: 5,
        texto:
          "Precisávamos resolver com urgência, pois o condomínio não podia ficar sem água. A equipe da Caixa D'Água Revestimentos chegou no horário combinado, instalou o revestimento em menos de um dia e já liberou o reservatório para uso. Zero interrupção para os moradores. Serviço ágil e profissional do início ao fim.",
        data: "2025",
        destaque: false,
      },
      {
        id: 3,
        nome: "Cristiane Alves",
        iniciais: "CA",
        avatar: null,
        cidade: "Porto Alegre · RS",
        nota: 5,
        texto:
          "Contratei há três anos e o revestimento está impecável até hoje. O material é claramente de qualidade — sem cheiro, sem manchas, a água continua limpa a cada análise que faço. O que me surpreendeu foi o suporte pós-serviço: tive uma dúvida meses depois e fui atendida rapidamente. Empresa séria, que não some após fechar o contrato.",
        data: "2025",
        destaque: false,
      },
      {
        id: 4,
        nome: "Ricardo Fontana",
        iniciais: "RF",
        avatar: null,
        cidade: "Porto Alegre · RS",
        nota: 5,
        texto:
          "Já usamos o serviço em dois edifícios do grupo e a experiência foi excelente nas duas vezes. Instalação rápida, sem sujeira, sem obra. O revestimento de PVC é aprovado pela ANVISA, o que dá muita segurança para um condomínio. Equipe educada, pontual e transparente no orçamento. Recomendo sem hesitar.",
        data: "2025",
        destaque: false,
      },
    ],
  },
});

function stars(n) {
  return Array.from({ length: n });
}
</script>

<template>
  <section class="reviews" id="depoimentos">
    <div class="reviews-inner">
      <!-- HEADER -->
      <div class="reviews-header">
        <div class="reviews-header__left">
          <span class="reviews-eyebrow">07 · Depoimentos</span>
          <h2 class="reviews-title">
            O que dizem nossos<br />
            <span>clientes no Google</span>
          </h2>
        </div>

        <div class="reviews-rating">
          <span class="rating-num">{{ rating }}</span>
          <div class="rating-stars" aria-label="5 estrelas">
            <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
              />
            </svg>
          </div>
          <span class="rating-count">
            {{
              reviewCount
                ? `${reviewCount} avaliações no Google`
                : "avaliações no Google"
            }}
          </span>
          <span class="rating-badge">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"
                fill="#EA4335"
              />
            </svg>
            Verificado · Google Meu Negócio
          </span>
        </div>
      </div>

      <!-- GRID DE CARDS -->
      <div class="reviews-grid">
        <article
          v-for="review in reviews"
          :key="review.id"
          :class="['review-card', { 'review-card--featured': review.destaque }]"
        >
          <!-- Topo: estrelas + fonte -->
          <div class="card-top">
            <div class="card-stars" :aria-label="`${review.nota} estrelas`">
              <svg
                v-for="i in stars(review.nota)"
                :key="i"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                />
              </svg>
            </div>
            <span class="card-google" aria-label="Avaliação do Google">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </span>
          </div>

          <!-- Texto -->
          <blockquote class="card-quote">{{ review.texto }}</blockquote>

          <!-- Autor -->
          <footer class="card-author">
            <div class="author-avatar" aria-hidden="true">
              <img
                v-if="review.avatar"
                :src="review.avatar"
                :alt="review.nome"
              />
              <span v-else class="author-initials">{{ review.iniciais }}</span>
            </div>
            <div class="author-info">
              <span class="author-name">{{ review.nome }}</span>
              <span class="author-meta"
                >{{ review.cidade }} · {{ review.data }}</span
              >
            </div>
            <div class="author-verified" aria-label="Cliente verificado">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
              Verificado
            </div>
          </footer>
        </article>
      </div>

      <!-- FOOTER CTA -->
      <div class="reviews-footer">
        <a
          :href="googleUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-google"
        >
          <svg
            class="btn-google__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"
              fill="#EA4335"
            />
          </svg>
          Ver todas as avaliações no Google
        </a>
        <span v-if="reviewCount" class="reviews-footer-note">
          {{ reviewCount }} avaliações verificadas
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section wrapper ── */
.reviews {
  background: var(--color-fog);
  padding: 64px 20px;
  position: relative;
  overflow: hidden;
}

.reviews::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 184, 240, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 184, 240, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

.reviews-inner {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}

/* ── Header ── */
.reviews-header {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 40px;
}

.reviews-eyebrow {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-sky);
  margin-bottom: 8px;
  display: block;
}

.reviews-title {
  font-family: var(--font-wave);
  font-size: clamp(22px, 6vw, 38px);
  font-weight: 300;
  color: var(--color-navy-deep);
  letter-spacing: 0.01em;
  line-height: 1.05;
}

.reviews-title span {
  color: var(--color-sky);
}

/* Rating block */
.reviews-rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.rating-num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 800;
  color: var(--color-navy-deep);
  line-height: 1;
}

.rating-stars {
  display: flex;
  gap: 3px;
}

.rating-stars svg {
  width: 16px;
  height: 16px;
  fill: #f5a623;
}

.rating-count {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-iron);
}

.rating-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-cobalt);
  background: var(--color-white);
  border: 0.5px solid var(--color-mist);
  padding: 5px 10px;
  border-radius: var(--radius-xs);
  margin-top: 4px;
}

/* ── Grid ── */
.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* ── Card ── */
.review-card {
  background: var(--color-white);
  border-radius: var(--radius-sm);
  border: 0.5px solid var(--color-mist);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition:
    transform var(--dur-base) var(--ease-spring),
    box-shadow var(--dur-base) ease;
  cursor: default;
}

.review-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.review-card--featured {
  border-color: var(--color-sky);
  border-width: 1px;
}

/* Card top */
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-stars {
  display: flex;
  gap: 2px;
}

.card-stars svg {
  width: 14px;
  height: 14px;
  fill: #f5a623;
}

.card-google {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-iron);
}

/* Quote */
.card-quote {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-steel);
  line-height: 1.7;
  flex: 1;
  position: relative;
  padding-left: 14px;
  quotes: none;
}

.card-quote::before {
  content: "";
  position: absolute;
  left: 0;
  top: 3px;
  bottom: 3px;
  width: 2px;
  background: var(--color-sky);
  border-radius: 1px;
  opacity: 0.5;
}

/* Author */
.card-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 0.5px solid var(--color-mist);
}

.author-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--color-cyan-ghost);
  border: 1px solid var(--color-cyan-pale);
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-initials {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  color: var(--color-cobalt);
  line-height: 1;
  user-select: none;
}

.author-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-navy-deep);
  line-height: 1.2;
}

.author-meta {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-iron);
}

.author-verified {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-lacre);
  flex-shrink: 0;
}

.author-verified svg {
  width: 12px;
  height: 12px;
  stroke: var(--color-lacre);
}

/* ── Footer CTA ── */
.reviews-footer {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.btn-google {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-navy);
  background: var(--color-white);
  border: 1px solid var(--color-mist);
  padding: 13px 22px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  text-decoration: none;
  transition:
    border-color var(--dur-fast) ease,
    box-shadow var(--dur-fast) ease;
}

.btn-google:hover {
  border-color: var(--color-sky);
  box-shadow: 0 4px 20px rgba(0, 184, 240, 0.1);
}

.btn-google__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.reviews-footer-note {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-iron);
  text-align: center;
}

/* ══ RESPONSIVE — MOBILE FIRST ══ */

/* sm: 480px — footer em row */
@media (min-width: 480px) {
  .reviews-footer {
    flex-direction: row;
    justify-content: center;
  }
}

/* md: 768px — header side-by-side, 2-col grid */
@media (min-width: 768px) {
  .reviews {
    padding: 72px 24px;
  }

  .reviews-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }

  .reviews-rating {
    align-items: flex-end;
  }

  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* lg: 1024px — auto-fill grid, looser padding */
@media (min-width: 1024px) {
  .reviews {
    padding: 88px 24px;
  }

  .reviews-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* xl: 1280px — wider cards */
@media (min-width: 1280px) {
  .reviews-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
