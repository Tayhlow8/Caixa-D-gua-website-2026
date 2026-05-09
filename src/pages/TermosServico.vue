<script setup>
import { useHead } from "@unhead/vue";
import NavBar from "../components/NavBar.vue";
import AppFooter from "../components/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";

const SITE = "https://www.caixadaguarevestimentos.net.br";

useHead({
  title: "Termos de Serviço | Caixa d'Água Revestimentos",
  meta: [
    { name: "description", content: "Termos de serviço e condições de uso do site Caixa d'Água Revestimentos. Conheça as regras que regem a utilização dos nossos serviços." },
    { name: "robots", content: "noindex, follow" },
    { property: "og:title", content: "Termos de Serviço | Caixa d'Água Revestimentos" },
    { property: "og:description", content: "Termos de serviço e condições de uso do site Caixa d'Água Revestimentos." },
    { property: "og:url", content: `${SITE}/termos-de-servico` },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: `${SITE}/termos-de-servico` }],
});
</script>

<template>
  <div class="page-termos">
    <NavBar />
    <main class="termos-main">
      <div class="termos-inner">
        <p class="sec-eyebrow">Caixa d'Água Revestimentos</p>
        <h1 class="termos-title">Termos de Serviço</h1>
        <p class="termos-date">Última atualização: maio de 2026</p>

        <div class="termos-body">
          <section>
            <h2>1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site da Caixa d'Água Revestimentos e
              Impermeabilizações (CNPJ 00.180.250/0001-50), você concorda com
              os presentes Termos de Serviço. Caso não concorde com qualquer
              disposição aqui contida, recomendamos que não utilize o site.
            </p>
          </section>

          <section>
            <h2>2. Serviços oferecidos</h2>
            <p>
              Este site tem caráter informativo e comercial, apresentando os
              serviços de revestimento interno, impermeabilização, limpeza e
              higienização de caixas d'água e reservatórios. Os orçamentos
              solicitados pelo site ou WhatsApp são gratuitos e não geram
              nenhuma obrigação contratual até a assinatura de proposta formal.
            </p>
          </section>

          <section>
            <h2>3. Precisão das informações</h2>
            <p>
              Buscamos manter todas as informações do site atualizadas e
              precisas. No entanto, preços, prazos e condições de serviço podem
              variar conforme a localidade, tipo de reservatório e
              disponibilidade de agenda. As condições definitivas são
              estabelecidas na proposta comercial apresentada ao cliente.
            </p>
          </section>

          <section>
            <h2>4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — textos, imagens, logotipos, vídeos e
              o sistema de revestimento em PVC flexível (produto patenteado) —
              é propriedade exclusiva da Caixa d'Água Revestimentos e
              Impermeabilizações. É vedada a reprodução parcial ou total sem
              autorização prévia e por escrito.
            </p>
          </section>

          <section>
            <h2>5. Limitação de responsabilidade</h2>
            <p>
              A Caixa d'Água Revestimentos não se responsabiliza por danos
              decorrentes do uso indevido das informações contidas neste site,
              nem por eventual indisponibilidade temporária do serviço. As
              garantias dos serviços executados são aquelas descritas no
              contrato firmado com o cliente.
            </p>
          </section>

          <section>
            <h2>6. Links externos</h2>
            <p>
              Este site pode conter links para sites de terceiros (como Google
              Maps, WhatsApp e redes sociais). Não nos responsabilizamos pelo
              conteúdo, políticas de privacidade ou práticas de sites externos.
            </p>
          </section>

          <section>
            <h2>7. Alterações nos termos</h2>
            <p>
              Reservamo-nos o direito de atualizar estes Termos de Serviço a
              qualquer momento. As alterações entram em vigor imediatamente após
              sua publicação nesta página. Recomendamos a consulta periódica.
            </p>
          </section>

          <section>
            <h2>8. Contato</h2>
            <p>
              Dúvidas sobre estes termos? Entre em contato:<br />
              <a href="mailto:contato@caixadagua.com.br"
                >contato@caixadagua.com.br</a
              >
            </p>
          </section>
        </div>

        <div class="termos-links">
          <a href="/politica-de-privacidade" class="related-link"
            >→ Política de Privacidade</a
          >
          <a href="/" class="back-link">← Voltar ao início</a>
        </div>
      </div>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.page-termos {
  min-height: 100svh;
  background: var(--bg-page);
}

.termos-main {
  padding: calc(72px + 80px) 24px 96px;
}

.termos-inner {
  max-width: 720px;
  margin: 0 auto;
}

.sec-eyebrow {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-iron);
  margin-bottom: 8px;
}

.termos-title {
  font-family: var(--font-wave);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 300;
  color: var(--color-navy);
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.termos-date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-iron);
  margin-bottom: 48px;
}

.termos-body {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.termos-body section h2 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 10px;
}

.termos-body section p {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-steel);
  line-height: 1.75;
}

.termos-body section a {
  color: var(--color-sky);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.termos-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 56px;
}

.back-link,
.related-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--color-sky);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.back-link:hover,
.related-link:hover {
  opacity: 0.7;
}
</style>
