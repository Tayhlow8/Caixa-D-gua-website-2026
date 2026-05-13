<template>
  <InnerNavBar activePage="blog" />

  <div class="blog-page">

    <!-- Hero -->
    <section class="blog-hero">
      <div class="blog-hero__inner container">
        <span class="blog-hero__label">Conteúdo especializado</span>
        <h1 class="blog-hero__title">Blog &<br><em>Artigos</em></h1>
        <p class="blog-hero__sub">Informações técnicas, dicas de manutenção e tudo sobre a saúde da sua caixa d'água.</p>
      </div>
      <div class="blog-hero__bar" aria-hidden="true"></div>
    </section>

    <!-- Posts -->
    <section class="blog-section">
      <div class="container">

        <!-- Post em destaque -->
        <article class="blog-featured" v-if="posts.length > 0">
          <router-link :to="`/blog/${posts[0].slug}`" class="blog-featured__link">
            <div class="blog-featured__cover">
              <img
                :src="getImageUrl(posts[0].image)"
                :alt="posts[0].title"
                class="blog-featured__img"
                loading="eager"
              />
            </div>
            <div class="blog-featured__content">
              <div class="blog-featured__meta">
                <span class="blog-tag">{{ posts[0].category }}</span>
                <span class="blog-date">{{ posts[0].date }}</span>
              </div>
              <h2 class="blog-featured__title">{{ posts[0].title }}</h2>
              <p class="blog-featured__excerpt">{{ posts[0].excerpt }}</p>
              <span class="blog-featured__cta">Ler artigo completo →</span>
            </div>
          </router-link>
        </article>

        <!-- Grid de posts -->
        <div class="blog-grid" v-if="posts.length > 1">
          <article
            v-for="post in posts.slice(1)"
            :key="post.slug"
            class="blog-card"
          >
            <router-link :to="`/blog/${post.slug}`" class="blog-card__link">
              <div class="blog-card__cover">
                <img
                  :src="getImageUrl(post.image)"
                  :alt="post.title"
                  class="blog-card__img"
                  loading="lazy"
                />
              </div>
              <div class="blog-card__body">
                <div class="blog-card__meta">
                  <span class="blog-tag">{{ post.category }}</span>
                  <span class="blog-date">{{ post.date }}</span>
                </div>
                <h2 class="blog-card__title">{{ post.title }}</h2>
                <p class="blog-card__excerpt">{{ post.excerpt }}</p>
                <span class="blog-card__cta">Ler artigo →</span>
              </div>
            </router-link>
          </article>
        </div>

        <!-- Empty state -->
        <div v-if="posts.length === 0" class="blog-empty">
          <p>Nenhum artigo publicado ainda.</p>
        </div>

      </div>
    </section>

    <!-- FAQ CTA -->
    <section class="blog-faq-cta">
      <div class="container">
        <p class="blog-faq-cta__label">Tem dúvidas?</p>
        <h2 class="blog-faq-cta__title">Veja nossas perguntas frequentes</h2>
        <router-link to="/faq" class="blog-faq-cta__btn">
          <svg class="faqcta-wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            <g class="faqcta-wg1"><path class="faqcta-wf1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/></g>
            <g class="faqcta-wg2"><path class="faqcta-wf2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/></g>
          </svg>
          <span class="faqcta-lbl">Acessar FAQ</span>
        </router-link>
      </div>
    </section>

  </div>

  <AppFooter />
</template>

<script setup>
import { useHead } from '@unhead/vue'
import InnerNavBar from '@/components/InnerNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import posts from '@/data/blog-posts.json'

useHead({
  title: "Blog — Dicas e Informações sobre Caixa d'Água | Caixa d'Água Revestimentos",
  meta: [
    {
      name: 'description',
      content: "Artigos e dicas sobre manutenção, limpeza e impermeabilização de caixa d'água. Conteúdo especializado da empresa com mais de 30 anos de experiência em RS e SC."
    }
  ]
})

const allImages = import.meta.glob('../assets/**/*.{webp,jpg,jpeg,png}', { eager: true })

function getImageUrl(filename) {
  const key = `../assets/${filename}`
  return allImages[key]?.default ?? ''
}
</script>

<style scoped>
.blog-page {
  background: var(--bg-page);
  min-height: 100vh;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* ─── Hero ─── */
.blog-hero {
  background: var(--color-navy-deep);
  padding: var(--space-24) 0 0;
  position: relative;
  overflow: hidden;
}

.blog-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(0, 184, 240, 0.12) 0%, transparent 60%);
  pointer-events: none;
}

.blog-hero__inner {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
}

.blog-hero__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  display: block;
  margin-bottom: var(--space-4);
}

.blog-hero__title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-white);
  margin: 0 0 var(--space-6);
}

.blog-hero__title em {
  font-style: normal;
  color: var(--color-sky);
}

.blog-hero__sub {
  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: var(--leading-normal);
  color: var(--text-on-dark-muted);
  max-width: 520px;
  margin: 0;
}

.blog-hero__bar {
  height: 4px;
  background: var(--color-sky);
  margin-top: var(--space-16);
}

/* ─── Blog Section ─── */
.blog-section {
  padding: var(--space-20) 0;
}

/* ─── Featured Post ─── */
.blog-featured {
  margin-bottom: var(--space-12);
}

.blog-featured__link {
  display: flex;
  flex-direction: column;
  background: var(--bg-surface);
  border: 1px solid var(--color-mist);
  border-radius: var(--radius-sm);
  overflow: hidden;
  text-decoration: none;
  transition: border-color var(--transition-state), box-shadow var(--transition-state);
}

.blog-featured__link:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-lg);
}

.blog-featured__cover {
  width: 100%;
  height: 420px;
  overflow: hidden;
  flex-shrink: 0;
}

.blog-featured__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-state);
}

.blog-featured__link:hover .blog-featured__img {
  transform: scale(1.03);
}

.blog-featured__content {
  padding: var(--space-10);
}

.blog-featured__meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.blog-featured__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-navy-deep);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
  margin: 0 0 var(--space-4);
}

.blog-featured__excerpt {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  margin: 0 0 var(--space-6);
}

.blog-featured__cta {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--color-sky);
}

/* ─── Blog Grid ─── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

.blog-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-surface);
  border: 1px solid var(--color-mist);
  border-radius: var(--radius-sm);
  overflow: hidden;
  text-decoration: none;
  transition: border-color var(--transition-state), box-shadow var(--transition-state), transform var(--transition-state);
}

.blog-card__link:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.blog-card__cover {
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}

.blog-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-state);
}

.blog-card__link:hover .blog-card__img {
  transform: scale(1.04);
}

.blog-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-6);
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.blog-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-black);
  color: var(--color-navy-deep);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
  margin: 0 0 var(--space-3);
}

.blog-card__excerpt {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  margin: 0 0 var(--space-6);
  flex: 1;
}

.blog-card__cta {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--color-sky);
  margin-top: auto;
}

/* ─── Tags e Datas ─── */
.blog-tag {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: var(--weight-regular);
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--brand-primary);
  background: var(--bg-subtle);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-xs);
  border: var(--border-thin) solid var(--color-cyan-light);
}

.blog-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: var(--tracking-mono);
}

/* ─── Empty ─── */
.blog-empty {
  text-align: center;
  padding: var(--space-20);
  color: var(--text-muted);
  font-family: var(--font-body);
}

/* ─── FAQ CTA ─── */
.blog-faq-cta {
  background: var(--color-navy-deep);
  padding: var(--space-20) 0;
  text-align: center;
}

.blog-faq-cta__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  margin: 0 0 var(--space-3);
}

.blog-faq-cta__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-white);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-8);
}

/* DS pill button — btn--primary (aqua-ds-guidelines) */
.blog-faq-cta__btn {
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
  font-size: 14px;
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-pill);
  text-decoration: none;
  min-height: 48px;
}

.faqcta-wsv {
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
.blog-faq-cta__btn:hover .faqcta-wsv { opacity: 1; }

.faqcta-lbl {
  position: relative;
  z-index: 1;
  transition: color var(--transition-wave);
}

.faqcta-wg1 {
  transform: translateY(115%);
  transition: transform 0.55s ease-in;
}
.faqcta-wg2 {
  transform: translateY(125%);
  transition: transform 0.55s ease-in 0.04s;
}

.blog-faq-cta__btn:hover .faqcta-wg1 {
  animation:
    faqRise1 0.65s var(--ease-spring) forwards,
    faqBob1 3.2s ease-in-out 0.65s infinite;
}
.blog-faq-cta__btn:hover .faqcta-wg2 {
  animation:
    faqRise2 0.7s var(--ease-spring) 0.05s forwards,
    faqBob2 4s ease-in-out 0.75s infinite;
}

@keyframes faqRise1 {
  from { transform: translateY(115%); }
  to   { transform: translateY(-10%); }
}
@keyframes faqRise2 {
  from { transform: translateY(125%); }
  to   { transform: translateY(-6%); }
}
@keyframes faqBob1 {
  0%, 100% { transform: translateY(-10%); }
  50%      { transform: translateY(-14%); }
}
@keyframes faqBob2 {
  0%, 100% { transform: translateY(-6%); }
  50%      { transform: translateY(-11%); }
}

.faqcta-wf1 { fill: var(--color-sky); }
.faqcta-wf2 { fill: var(--color-cyan-light); opacity: 0.5; }

.blog-faq-cta__btn:hover .faqcta-lbl { color: var(--color-navy-deep); }

.blog-faq-cta__btn:focus { outline: none; }
.blog-faq-cta__btn:focus-visible {
  box-shadow: 0 0 0 2px var(--color-navy-deep), 0 0 0 4px var(--color-sky);
}

/* ─── Responsivo ─── */
@media (max-width: 768px) {
  .blog-featured__cover {
    height: 240px;
  }

  .blog-featured__title {
    font-size: var(--text-2xl);
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
