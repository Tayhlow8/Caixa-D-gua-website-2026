# CLAUDE.md — Instruções permanentes do projeto

# Caixa d'Água Revestimentos e Impermeabilizações

# Stack: Vue 3 + Vite + CSS Custom Properties — deploy Vercel

---

## REGRA MAIS IMPORTANTE

**Nunca hardcodar valores de cor, fonte, espaçamento, sombra, radius, z-index ou motion.**
Sempre usar `var(--token)` do `src/styles/tokens.css`.
Se o token que você precisa não existir, perguntar antes de hardcodar.

---

## Componentes globais — NUNCA recriar

Ao montar qualquer página nova, importar sempre os componentes existentes:

| Componente     | Arquivo                        | Quando usar                                                |
| -------------- | ------------------------------ | ---------------------------------------------------------- |
| Navbar interna | `@/components/InnerNavBar.vue` | Páginas internas (blog, faq, impermeabilização, políticas) |
| Navbar home    | `@/components/NavBar.vue`      | Só na Home — transparente com efeito scroll                |
| Footer         | `@/components/AppFooter.vue`   | Todas as páginas                                           |

Nunca criar variantes novas de navbar ou footer.
Se precisar de ajuste no componente, editar o arquivo original — não duplicar.

---

## Template de página nova

```vue
<script setup>
import InnerNavBar from "@/components/InnerNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <InnerNavBar activePage="nome-da-pagina" />
  <main>
    <!-- conteúdo -->
  </main>
  <AppFooter />
</template>
```

---

## Design System — Aqua DS v1.1.0

Arquivo de tokens: `src/styles/tokens.css` (já importado no `main.js`)

---

## Cores — usar SEMPRE o token, nunca o hex

### Paleta global

```css
var(--color-navy-deep)   /* #0D2A52 — hero bg, navbar, fundos escuros */
var(--color-navy)        /* #1A4A8A — cor principal, texto logo */
var(--color-navy-mid)    /* #1657A8 — gradientes */
var(--color-cobalt)      /* #1A6BC4 — botão cobalt, links */
var(--color-royal)       /* #1E90E8 — gradientes */
var(--color-sky)         /* #00B8F0 — acentos, bordas CTA, destaques */
var(--color-cyan)        /* #00C8F0 — labels em fundo escuro */
var(--color-cyan-light)  /* #7ADCF5 — onda secundária, fills leves */
var(--color-cyan-pale)   /* #C6F0FB */
var(--color-cyan-ghost)  /* #E0F6FD — backgrounds suaves */
var(--color-lacre)       /* #00D4AA — garantia, patente, sucesso — NÃO em botões de nav */
var(--color-lacre-light) /* #CCFAF0 — background de badge de sucesso */
var(--color-white)       /* #FFFFFF */
var(--color-fog)         /* #F2F6FB — background seções claras */
var(--color-mist)        /* #DDE8F5 — bordas, divisores */
var(--color-iron)        /* #6B82A0 — texto muted */
var(--color-steel)       /* #3A5270 — texto secundário */
var(--color-text)        /* #0A1E35 — texto principal */
var(--color-wpp)         /* #075E54 — WhatsApp */
var(--color-wpp-hover)   /* #25D366 — WhatsApp hover */
```

### Semânticas (preferir essas nos componentes)

```css
var(--brand-primary)        /* navy */
var(--brand-primary-deep)   /* navy-deep */
var(--brand-accent)         /* sky */
var(--brand-highlight)      /* cyan */
var(--brand-success)        /* lacre */
var(--bg-page)              /* fog — background padrão de página */
var(--bg-surface)           /* white — cards, superfícies */
var(--bg-hero)              /* navy-deep — hero sections */
var(--bg-overlay)           /* rgba(13,42,82,0.6) — overlay de modal/menu */
var(--bg-subtle)            /* cyan-ghost — backgrounds suaves */
var(--text-primary)         /* #0A1E35 */
var(--text-secondary)       /* steel */
var(--text-muted)           /* iron */
var(--text-on-dark)         /* white */
var(--text-on-dark-muted)   /* rgba(255,255,255,0.5) */
var(--text-on-accent)       /* navy-deep — texto sobre fundo sky/cyan */
var(--border-default)       /* mist */
var(--border-emphasis)      /* navy */
var(--border-accent)        /* sky */
var(--border-focus)         /* sky — focus ring */
var(--border-subtle)        /* rgba(0,184,240,0.1) */
var(--border-inverse)       /* rgba(255,255,255,0.07) — bordas em fundo escuro */
```

### Feedback

```css
var(--color-success)         /* #00D4AA */
var(--color-success-bg)      /* lacre-light */
var(--color-success-border)  /* lacre */
var(--color-success-text)    /* #00735A */
var(--color-warning)         /* #E8A020 */
var(--color-warning-bg)      /* #FEF3DC */
var(--color-warning-border)  /* warning */
var(--color-warning-text)    /* #7A4A00 */
var(--color-error)           /* #D64045 */
var(--color-error-bg)        /* #FAEAEA */
var(--color-error-border)    /* error */
var(--color-error-text)      /* #A32D2D */
```

### Gradientes

```css
var(--brand-gradient)       /* 135deg navy→cobalt→royal→cyan */
var(--brand-gradient-dark)  /* 135deg navy-deep→navy-mid→sky */
```

⚠️ Sky (`--color-sky`) e Iron (`--color-iron`) falham WCAG AA em texto pequeno sobre branco — não usar para body text em fundo claro.

---

## Tipografia — hierarquia travada (v1.1.0)

```css
var(--font-display)  /* Wavefont/Raleway — H1, H2, H3, H4 — sempre weight 300 */
var(--font-body)     /* Lato — parágrafos, links de nav, botões */
var(--font-mono)     /* DM Mono — labels, badges, eyebrows, dados técnicos */
```

⚠️ Syne foi removida. Não usar em nenhum componente novo.
⚠️ Links de nav usam `var(--font-body)` — nunca `var(--font-mono)`.

### Tamanhos

```css
var(--text-xs)       /* 14px — labels pequenas */
var(--text-sm)       /* 16px — captions */
var(--text-base)     /* 17px — body padrão */
var(--text-md)       /* 18px — subtítulos de card */
var(--text-lg)       /* 20px — subtítulos de seção */
var(--text-xl)       /* 24px — H4 */
var(--text-2xl)      /* 30px — H3 */
var(--text-3xl)      /* 40px — H2 */
var(--text-display)  /* clamp(36px, 5vw, 58px) — H1 hero */
```

### Line-height

```css
var(--leading-tight)    /* 1.05 */
var(--leading-snug)     /* 1.2 */
var(--leading-normal)   /* 1.55 */
var(--leading-relaxed)  /* 1.7 */
```

### Letter-spacing

```css
var(--tracking-tight)  /* -0.8px */
var(--tracking-snug)   /* -0.3px */
var(--tracking-mono)   /* 0.14em — DM Mono padrão */
var(--tracking-label)  /* 0.2em — eyebrows uppercase */
```

### Font-weight

```css
var(--weight-light)    /* 300 */
var(--weight-regular)  /* 500 */
var(--weight-bold)     /* 700 */
var(--weight-black)    /* 800 */
```

---

## Espaçamento — base 4px

```css
var(--space-1)   /* 4px */
var(--space-2)   /* 8px */
var(--space-3)   /* 12px */
var(--space-4)   /* 16px — gap padrão */
var(--space-5)   /* 20px */
var(--space-6)   /* 24px — padding interno de cards */
var(--space-8)   /* 32px — padding seções mobile */
var(--space-10)  /* 40px */
var(--space-12)  /* 48px — espaço entre seções */
var(--space-16)  /* 64px — padding seções desktop */
var(--space-20)  /* 80px — separação entre blocos grandes */
var(--space-24)  /* 96px */
```

---

## Border Radius — filosofia sharp/técnica

```css
var(--radius-none)  /* 0px — estrutural */
var(--radius-xs)    /* 2px — botões sharp, badges */
var(--radius-sm)    /* 4px — cards, inputs */
var(--radius-md)    /* 8px — modais, seções */
var(--radius-pill)  /* 999px — tags, chips, botão CTA da nav */
```

Nunca usar valores entre 2px e 8px — quebra a filosofia do DS.

---

## Sombras

```css
var(--shadow-sm)     /* 0 1px 4px rgba(13,42,82,0.08) */
var(--shadow-md)     /* 0 4px 16px rgba(13,42,82,0.12) */
var(--shadow-lg)     /* 0 8px 32px rgba(13,42,82,0.16) */
var(--shadow-xl)     /* 0 16px 48px rgba(13,42,82,0.20) */
var(--shadow-focus)  /* 0 0 0 3px rgba(0,184,240,0.35) — focus ring */
```

---

## Motion

```css
var(--ease-default)  /* ease-out */
var(--ease-spring)   /* cubic-bezier(0.22,1,0.36,1) — entradas, onda do botão */
var(--ease-in-out)   /* cubic-bezier(0.4,0,0.2,1) */

var(--dur-instant)   /* 80ms */
var(--dur-fast)      /* 150ms — hover, focus */
var(--dur-base)      /* 280ms — transições padrão */
var(--dur-slow)      /* 500ms — overlays, modais */
var(--dur-enter)     /* 700ms — onda do botão, entradas hero */

var(--transition-hover)    /* 150ms ease-out */
var(--transition-state)    /* 280ms ease-out */
var(--transition-overlay)  /* 500ms spring */
var(--transition-wave)     /* 700ms spring */
```

---

## Layout

```css
var(--container-sm)   /* 480px */
var(--container-md)   /* 768px */
var(--container-lg)   /* 1024px */
var(--container-xl)   /* 1280px */
var(--container-max)  /* 1440px */
```

---

## Z-index

```css
var(--z-below)     /* -1 */
var(--z-base)      /* 0 */
var(--z-raised)    /* 10 */
var(--z-dropdown)  /* 100 */
var(--z-overlay)   /* 200 */
var(--z-modal)     /* 300 */
var(--z-toast)     /* 400 */
var(--z-top)       /* 9999 */
```

---

## Botão CTA da navbar — padrão obrigatório

```css
color: var(--color-white);
background: var(--color-navy-deep);
border: 2px solid var(--color-sky);
border-radius: var(--radius-pill);
font-family: var(--font-body);
font-weight: var(--weight-bold);
transition: color var(--dur-enter) var(--ease-default);
/* onda sky no hover — ver InnerNavBar.vue para implementação completa */
```

❌ Nunca `background: var(--color-lacre)` no botão da navbar.
❌ Nunca `font-family: var(--font-mono)` nos links de navegação.
