<template>
  <NavBar />

  <div class="post-page">

    <!-- Não encontrado -->
    <section v-if="!post" class="post-notfound">
      <div class="container">
        <p class="post-notfound__label">404</p>
        <h1 class="post-notfound__title">Artigo não encontrado</h1>
        <router-link to="/blog" class="post-back-btn">← Voltar ao blog</router-link>
      </div>
    </section>

    <template v-else>

      <!-- Hero do artigo -->
      <section class="post-hero">
        <div class="post-hero__cover">
          <img
            :src="getImageUrl(post.image)"
            :alt="post.title"
            class="post-hero__img"
            loading="eager"
          />
          <div class="post-hero__overlay" aria-hidden="true"></div>
        </div>
        <div class="post-hero__content container">
          <div class="post-hero__meta">
            <span class="post-tag">{{ post.category }}</span>
            <span class="post-date">{{ post.date }}</span>
            <span class="post-reading">{{ post.readingTime }} de leitura</span>
          </div>
          <h1 class="post-hero__title">{{ post.title }}</h1>
          <p class="post-hero__excerpt">{{ post.excerpt }}</p>
        </div>
        <div class="post-hero__bar" aria-hidden="true"></div>
      </section>

      <!-- Corpo do artigo -->
      <div class="post-layout container">

        <article class="post-body">

          <template v-for="(block, i) in post.content" :key="i">

            <p v-if="block.type === 'lead'" class="post-lead">{{ block.text }}</p>

            <h2 v-else-if="block.type === 'h2'" class="post-h2">{{ block.text }}</h2>

            <p v-else-if="block.type === 'p'" class="post-p">{{ block.text }}</p>

            <ul v-else-if="block.type === 'list'" class="post-list">
              <li v-for="(item, j) in block.items" :key="j" class="post-list__item">
                {{ item }}
              </li>
            </ul>

            <blockquote v-else-if="block.type === 'highlight'" class="post-highlight">
              <span class="post-highlight__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M10 6v5M10 13.5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </span>
              <p class="post-highlight__text">{{ block.text }}</p>
            </blockquote>

            <div v-else-if="block.type === 'cta'" class="post-cta-block">
              <a
                :href="`https://api.whatsapp.com/send?phone=5551933481239&text=Olá! Vi o artigo no site e gostaria de ${block.text.toLowerCase()}.`"
                target="_blank"
                rel="noopener noreferrer"
                class="post-cta-btn"
              >
                <svg class="pcb-wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
                  <g class="pcb-wg1">
                    <path class="pcb-wf1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/>
                  </g>
                  <g class="pcb-wg2">
                    <path class="pcb-wf2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/>
                  </g>
                </svg>
                <span class="pcb-lbl">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.853L.054 23.94l6.267-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  {{ block.text }}
                </span>
              </a>
            </div>

          </template>

        </article>

        <!-- Sidebar -->
        <aside class="post-sidebar">

          <!-- Outros artigos -->
          <div class="post-sidebar__card">
            <p class="post-sidebar__label">Outros artigos</p>
            <nav class="post-sidebar__list">
              <router-link
                v-for="other in otherPosts"
                :key="other.slug"
                :to="`/blog/${other.slug}`"
                class="post-sidebar__item"
              >
                <span class="post-sidebar__item-cat">{{ other.category }}</span>
                <span class="post-sidebar__item-title">{{ other.title }}</span>
              </router-link>
            </nav>
          </div>

          <!-- CTA fixo -->
          <div class="post-sidebar__cta">
            <p class="post-sidebar__cta-label">Precisa de ajuda?</p>
            <p class="post-sidebar__cta-text">Fale com nossa equipe técnica. Atendemos RS e SC.</p>
            <a
              href="https://api.whatsapp.com/send?phone=5551933481239"
              target="_blank"
              rel="noopener noreferrer"
              class="post-sidebar__cta-btn"
            >
              <svg class="scb-wsv" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
                <g class="scb-wg1">
                  <path class="scb-wf1" d="M0,22 C50,6 100,38 150,22 C200,6 250,38 300,22 C350,6 400,38 450,22 C500,6 550,38 600,22 L600,80 L0,80 Z"/>
                </g>
                <g class="scb-wg2">
                  <path class="scb-wf2" d="M0,28 C60,12 110,44 170,28 C220,12 280,44 330,28 C390,12 440,44 500,28 C545,14 575,40 600,28 L600,80 L0,80 Z"/>
                </g>
              </svg>
              <span class="scb-lbl">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.853L.054 23.94l6.267-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Falar no WhatsApp
              </span>
            </a>
          </div>

        </aside>
      </div>

      <!-- Navegação entre posts -->
      <nav class="post-nav">
        <div class="container post-nav__inner">
          <router-link
            v-if="prevPost"
            :to="`/blog/${prevPost.slug}`"
            class="post-nav__link post-nav__link--prev"
          >
            <span class="post-nav__dir">← Anterior</span>
            <span class="post-nav__name">{{ prevPost.title }}</span>
          </router-link>
          <div v-else class="post-nav__spacer"></div>
          <router-link
            v-if="nextPost"
            :to="`/blog/${nextPost.slug}`"
            class="post-nav__link post-nav__link--next"
          >
            <span class="post-nav__dir">Próximo →</span>
            <span class="post-nav__name">{{ nextPost.title }}</span>
          </router-link>
          <div v-else class="post-nav__spacer"></div>
        </div>
      </nav>

      <!-- Voltar ao blog -->
      <div class="post-back container">
        <router-link to="/blog" class="post-back-btn">← Voltar ao blog</router-link>
      </div>

    </template>
  </div>

  <AppFooter />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import posts from '@/data/blog-posts.json'

const route = useRoute()

const post = computed(() =>
  posts.find(p => p.slug === route.params.slug) ?? null
)

const otherPosts = computed(() =>
  posts.filter(p => p.slug !== route.params.slug).slice(0, 4)
)

const currentIndex = computed(() =>
  posts.findIndex(p => p.slug === route.params.slug)
)

const prevPost = computed(() =>
  currentIndex.value > 0 ? posts[currentIndex.value - 1] : null
)

const nextPost = computed(() =>
  currentIndex.value < posts.length - 1 ? posts[currentIndex.value + 1] : null
)

useHead(computed(() => ({
  title: post.value
    ? `${post.value.title} | Caixa d'Água Revestimentos`
    : "Artigo | Caixa d'Água Revestimentos",
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt ?? ''
    }
  ]
})))

function getImageUrl(filename) {
  return new URL(`../assets/${filename}`, import.meta.url).href
}
</script>

<style scoped>
.post-page {
  background: var(--bg-page);
  min-height: 100vh;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* ─── Hero ─── */
.post-hero {
  position: relative;
  background: var(--color-navy-deep);
  padding-top: var(--space-24);
  overflow: hidden;
}

.post-hero__cover {
  position: absolute;
  inset: 0;
}

.post-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.25;
}

.post-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(13, 42, 82, 0.5) 0%,
    rgba(13, 42, 82, 0.85) 60%,
    var(--color-navy-deep) 100%
  );
}

.post-hero__content {
  position: relative;
  z-index: var(--z-raised);
  padding-bottom: var(--space-16);
}

.post-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
}

.post-hero__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: var(--weight-black);
  color: var(--color-white);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-6);
  max-width: 820px;
}

.post-hero__excerpt {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--text-on-dark-muted);
  line-height: var(--leading-normal);
  max-width: 620px;
  margin: 0;
}

.post-hero__bar {
  height: 4px;
  background: var(--color-sky);
  position: relative;
  z-index: var(--z-raised);
}

/* ─── Tags / Meta ─── */
.post-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--color-navy-deep);
  background: var(--color-sky);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-xs);
}

.post-date,
.post-reading {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-on-dark-muted);
  letter-spacing: var(--tracking-mono);
}

/* ─── Layout ─── */
.post-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-16);
  padding-top: var(--space-16);
  padding-bottom: var(--space-20);
  align-items: start;
}

/* ─── Corpo do artigo ─── */
.post-body {
  min-width: 0;
}

.post-lead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--text-primary);
  line-height: var(--leading-relaxed);
  font-weight: var(--weight-regular);
  margin: 0 0 var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--border-default);
}

.post-h2 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-black);
  color: var(--color-navy-deep);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
  margin: var(--space-12) 0 var(--space-4);
}

.post-h2:first-of-type {
  margin-top: 0;
}

.post-p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-6);
}

.post-list {
  margin: 0 0 var(--space-6);
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.post-list__item {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  padding-left: var(--space-6);
  position: relative;
}

.post-list__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-sky);
}

.post-highlight {
  margin: var(--space-8) 0;
  padding: var(--space-6);
  background: var(--bg-subtle);
  border-left: 3px solid var(--color-sky);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.post-highlight__icon {
  color: var(--color-sky);
  flex-shrink: 0;
  margin-top: 2px;
}

.post-highlight__text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-navy);
  line-height: var(--leading-relaxed);
  margin: 0;
  font-weight: var(--weight-regular);
}

.post-cta-block {
  margin: var(--space-12) 0 var(--space-8);
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-default);
  display: flex;
  justify-content: center;
}

.post-cta-btn {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: color var(--transition-wave);
  min-height: 52px;
}

.pcb-wsv {
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

.post-cta-btn:hover .pcb-wsv { opacity: 1; }

.pcb-lbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: color var(--transition-wave);
}

.pcb-wg1 {
  transform: translateY(115%);
  transition: transform 0.65s var(--ease-spring);
}
.pcb-wg2 {
  transform: translateY(125%);
  transition: transform 0.7s var(--ease-spring) 0.05s;
}

.post-cta-btn:hover .pcb-wg1 {
  animation: pcbRise1 0.65s var(--ease-spring) forwards, pcbBob1 3.2s ease-in-out 0.65s infinite;
}
.post-cta-btn:hover .pcb-wg2 {
  animation: pcbRise2 0.7s var(--ease-spring) 0.05s forwards, pcbBob2 4s ease-in-out 0.75s infinite;
}

@keyframes pcbRise1 {
  from { transform: translateY(115%); }
  to   { transform: translateY(-10%); }
}
@keyframes pcbRise2 {
  from { transform: translateY(125%); }
  to   { transform: translateY(-6%); }
}
@keyframes pcbBob1 {
  0%, 100% { transform: translateY(-10%); }
  50%      { transform: translateY(-14%); }
}
@keyframes pcbBob2 {
  0%, 100% { transform: translateY(-6%); }
  50%      { transform: translateY(-11%); }
}

.pcb-wf1 { fill: #20c05e; }
.pcb-wf2 { fill: #a8ffd3; opacity: 0.4; }

.post-cta-btn:hover .pcb-lbl { color: #004d1d; }

.post-cta-btn:focus { outline: none; }
.post-cta-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #25D366;
}

/* ─── Sidebar ─── */
.post-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  position: sticky;
  top: calc(var(--space-16) + 64px);
}

.post-sidebar__card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  padding: var(--space-6);
}

.post-sidebar__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 var(--space-4);
}

.post-sidebar__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.post-sidebar__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-default);
  text-decoration: none;
  transition: color var(--transition-hover);
}

.post-sidebar__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.post-sidebar__item-cat {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--color-sky);
}

.post-sidebar__item-title {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-snug);
  transition: color var(--transition-hover);
}

.post-sidebar__item:hover .post-sidebar__item-title {
  color: var(--color-navy);
}

.post-sidebar__cta {
  background: var(--color-navy-deep);
  border-radius: var(--radius-sm);
  padding: var(--space-6);
}

.post-sidebar__cta-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  margin: 0 0 var(--space-2);
}

.post-sidebar__cta-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
  line-height: var(--leading-normal);
  margin: 0 0 var(--space-5);
}

.post-sidebar__cta-btn {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: color var(--transition-wave);
  width: 100%;
  min-height: 44px;
}

.scb-wsv {
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

.post-sidebar__cta-btn:hover .scb-wsv { opacity: 1; }

.scb-lbl {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: color var(--transition-wave);
}

.scb-wg1 {
  transform: translateY(115%);
  transition: transform 0.65s var(--ease-spring);
}
.scb-wg2 {
  transform: translateY(125%);
  transition: transform 0.7s var(--ease-spring) 0.05s;
}

.post-sidebar__cta-btn:hover .scb-wg1 {
  animation: scbRise1 0.65s var(--ease-spring) forwards, scbBob1 3.2s ease-in-out 0.65s infinite;
}
.post-sidebar__cta-btn:hover .scb-wg2 {
  animation: scbRise2 0.7s var(--ease-spring) 0.05s forwards, scbBob2 4s ease-in-out 0.75s infinite;
}

@keyframes scbRise1 {
  from { transform: translateY(115%); }
  to   { transform: translateY(-10%); }
}
@keyframes scbRise2 {
  from { transform: translateY(125%); }
  to   { transform: translateY(-6%); }
}
@keyframes scbBob1 {
  0%, 100% { transform: translateY(-10%); }
  50%      { transform: translateY(-14%); }
}
@keyframes scbBob2 {
  0%, 100% { transform: translateY(-6%); }
  50%      { transform: translateY(-11%); }
}

.scb-wf1 { fill: #20c05e; }
.scb-wf2 { fill: #a8ffd3; opacity: 0.4; }

.post-sidebar__cta-btn:hover .scb-lbl { color: #004d1d; }

.post-sidebar__cta-btn:focus { outline: none; }
.post-sidebar__cta-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-navy-deep), 0 0 0 4px #25D366;
}

/* ─── Navegação entre posts ─── */
.post-nav {
  border-top: 1px solid var(--border-default);
  padding: var(--space-8) 0;
}

.post-nav__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}

.post-nav__link {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-decoration: none;
  padding: var(--space-5);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-hover), box-shadow var(--transition-hover);
}

.post-nav__link:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-sm);
}

.post-nav__link--next {
  text-align: right;
}

.post-nav__spacer {
  /* mantém o grid quando só há um lado */
}

.post-nav__dir {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--color-sky);
}

.post-nav__name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-snug);
}

/* ─── Voltar ─── */
.post-back {
  padding-bottom: var(--space-16);
}

.post-back-btn {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--color-cobalt);
  text-decoration: none;
  transition: color var(--transition-hover);
}

.post-back-btn:hover {
  color: var(--color-navy);
}

/* ─── 404 ─── */
.post-notfound {
  padding: var(--space-24) 0;
  text-align: center;
}

.post-notfound__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-sky);
  margin: 0 0 var(--space-4);
}

.post-notfound__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-navy-deep);
  margin: 0 0 var(--space-8);
}

/* ─── Responsivo ─── */
@media (max-width: 900px) {
  .post-layout {
    grid-template-columns: 1fr;
  }

  .post-sidebar {
    position: static;
  }

  .post-nav__inner {
    grid-template-columns: 1fr;
  }

  .post-nav__link--next {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .post-hero__title {
    font-size: var(--text-2xl);
  }

  .post-h2 {
    font-size: var(--text-xl);
  }
}
</style>
