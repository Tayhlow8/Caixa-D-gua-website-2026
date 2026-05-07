<script setup>
import NavBar from "../components/NavBar.vue";
import AppFooter from "../components/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";
</script>

<template>
  <div class="page-privacidade">
    <NavBar />
    <main class="privacidade-main">
      <div class="privacidade-inner">
        <p class="sec-eyebrow">Caixa d'Água Revestimentos</p>
        <h1 class="privacidade-title">Política de Privacidade</h1>
        <p class="privacidade-date">Última atualização: maio de 2026</p>

        <div class="privacidade-body">
          <section>
            <h2>1. Informações que coletamos</h2>
            <p>
              Ao utilizar nosso site, podemos coletar informações de navegação
              por meio de cookies analíticos (Google Analytics), como páginas
              visitadas, tempo de sessão e localização aproximada. Nenhum dado
              pessoal identificável é coletado sem seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2>2. Uso de cookies</h2>
            <p>
              Utilizamos cookies estritamente necessários para o funcionamento do
              site e cookies analíticos para entender como os visitantes
              interagem com o conteúdo. Ao clicar em "Entendi" no aviso de
              cookies, você consente com o uso de cookies analíticos.
            </p>
          </section>

          <section>
            <h2>3. Compartilhamento de dados</h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados com terceiros
              para fins comerciais. Os dados de navegação são processados pelo
              Google Analytics conforme a política de privacidade do Google.
            </p>
          </section>

          <section>
            <h2>4. Seus direitos</h2>
            <p>
              Você pode solicitar a exclusão dos seus dados de navegação a
              qualquer momento entrando em contato pelo e-mail
              <a href="mailto:contato@caixadagua.com.br"
                >contato@caixadagua.com.br</a
              >. Você também pode desabilitar cookies no seu navegador sem
              impacto no funcionamento do site.
            </p>
          </section>

          <section>
            <h2>5. Contato</h2>
            <p>
              Dúvidas sobre esta política? Entre em contato:<br />
              <a href="mailto:contato@caixadagua.com.br"
                >contato@caixadagua.com.br</a
              >
            </p>
          </section>
        </div>

        <a href="/" class="back-link">← Voltar ao início</a>
      </div>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.page-privacidade {
  min-height: 100svh;
  background: var(--bg-page);
}

.privacidade-main {
  padding: calc(72px + 80px) 24px 96px;
}

.privacidade-inner {
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

.privacidade-title {
  font-family: var(--font-wave);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 300;
  color: var(--color-navy);
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.privacidade-date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-iron);
  margin-bottom: 48px;
}

.privacidade-body {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.privacidade-body section h2 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 10px;
}

.privacidade-body section p {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-steel);
  line-height: 1.75;
}

.privacidade-body section a {
  color: var(--color-sky);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.back-link {
  display: inline-block;
  margin-top: 56px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--color-sky);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.back-link:hover {
  opacity: 0.7;
}
</style>
