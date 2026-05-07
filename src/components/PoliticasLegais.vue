<template>
  <div class="politicas-page">

    <!-- ── HERO ── -->
    <section class="hero-legal">
      <div class="hero-legal__bg"></div>
      <div class="inner">
        <span class="eyebrow">Documentos Legais</span>
        <h1 class="hero-legal__title">
          Transparência &amp;<br>
          <span class="accent">Privacidade</span>
        </h1>
        <p class="hero-legal__sub">
          Saiba como coletamos, usamos e protegemos seus dados.<br>
          Última atualização: maio de 2026.
        </p>

        <!-- Tab nav -->
        <nav class="tab-nav" role="tablist" aria-label="Seções legais">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ 'tab-btn--active': activeTab === tab.id }"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :aria-controls="`panel-${tab.id}`"
            @click="goTo(tab.id)"
          >
            <span class="tab-btn__icon" v-html="tab.icon"></span>
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </section>

    <!-- ── CONTENT ── -->
    <main class="legal-body inner">

      <!-- ────────────────────────────────────
           1. TERMOS DE USO
      ──────────────────────────────────── -->
      <section
        id="termos"
        class="legal-section"
        role="tabpanel"
        aria-labelledby="tab-termos"
      >
        <header class="legal-section__header">
          <span class="section-num">01</span>
          <div>
            <h2 class="legal-section__title">Termos de Uso</h2>
            <p class="legal-section__date">Vigência: 1º de maio de 2026</p>
          </div>
        </header>

        <div class="legal-content">

          <div class="legal-block">
            <h3>1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar o site da <strong>Caixa D'Água Revestimentos Ltda</strong>
              (CNPJ 00.180.250/0001-50), você declara que leu, compreendeu e concorda com estes
              Termos de Uso. Caso não concorde, pedimos que não utilize nossos serviços digitais.
            </p>
          </div>

          <div class="legal-block">
            <h3>2. Sobre a Empresa</h3>
            <p>
              A Caixa D'Água Revestimentos Ltda é uma empresa especializada em revestimento e
              impermeabilização de reservatórios de água, com sede na Rua Doutor José Éboli, 300 —
              Porto Alegre/RS, atuando nos estados do Rio Grande do Sul e Santa Catarina.
            </p>
          </div>

          <div class="legal-block">
            <h3>3. Uso do Site</h3>
            <p>Este site destina-se exclusivamente a fins informativos e comerciais legítimos. É
            expressamente vedado:</p>
            <ul class="legal-list">
              <li>Reproduzir, copiar ou redistribuir conteúdos sem autorização prévia e por escrito;</li>
              <li>Utilizar técnicas de raspagem de dados (<em>scraping</em>) ou extração automatizada;</li>
              <li>Tentar comprometer a segurança, disponibilidade ou integridade do site;</li>
              <li>Enviar comunicações não solicitadas (spam) por meio dos formulários;</li>
              <li>Utilizar o site para fins ilícitos ou em desacordo com a legislação brasileira.</li>
            </ul>
          </div>

          <div class="legal-block">
            <h3>4. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo disponível — textos, imagens, logotipos, vídeos, marcas registradas
              e a tecnologia patenteada de revestimento — é de propriedade exclusiva da Caixa D'Água
              Revestimentos Ltda ou de seus licenciantes, protegida pelas leis de propriedade
              intelectual brasileiras e por tratados internacionais.
            </p>
          </div>

          <div class="legal-block">
            <h3>5. Limitação de Responsabilidade</h3>
            <p>
              As informações técnicas presentes neste site têm caráter orientativo. Orçamentos,
              prazos e condições de serviço são definidos em contrato próprio. Não nos
              responsabilizamos por decisões tomadas exclusivamente com base no conteúdo do site
              sem consulta prévia a um de nossos técnicos.
            </p>
          </div>

          <div class="legal-block">
            <h3>6. Links Externos</h3>
            <p>
              Este site pode conter links para sites de terceiros (parceiros, certificadoras,
              órgãos reguladores). Não temos controle sobre o conteúdo desses sites e não assumimos
              responsabilidade por suas práticas de privacidade ou conteúdo.
            </p>
          </div>

          <div class="legal-block">
            <h3>7. Alterações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações
              relevantes serão comunicadas por destaque na página inicial. O uso continuado do
              site após a publicação de alterações implica aceitação dos novos termos.
            </p>
          </div>

          <div class="legal-block">
            <h3>8. Lei Aplicável e Foro</h3>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
              foro da Comarca de Porto Alegre/RS para dirimir quaisquer controvérsias, com renúncia
              expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

        </div>
      </section>

      <div class="section-divider" aria-hidden="true">
        <span class="divider-line"></span>
        <span class="divider-drop">
          <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10 0C10 0 2 9 2 15C2 19.418 5.582 23 10 23C14.418 23 18 19.418 18 15C18 9 10 0 10 0Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="divider-line"></span>
      </div>

      <!-- ────────────────────────────────────
           2. POLÍTICA DE PRIVACIDADE
      ──────────────────────────────────── -->
      <section
        id="privacidade"
        class="legal-section"
        role="tabpanel"
        aria-labelledby="tab-privacidade"
      >
        <header class="legal-section__header">
          <span class="section-num">02</span>
          <div>
            <h2 class="legal-section__title">Política de Privacidade</h2>
            <p class="legal-section__date">Vigência: 1º de maio de 2026 · Em conformidade com a LGPD (Lei 13.709/2018)</p>
          </div>
        </header>

        <div class="legal-content">

          <div class="highlight-box">
            <span class="highlight-box__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            <p>
              Sua privacidade é levada a sério. Coletamos apenas os dados estritamente necessários
              para prestar nossos serviços e jamais vendemos ou compartilhamos suas informações com
              terceiros para fins comerciais.
            </p>
          </div>

          <div class="legal-block">
            <h3>1. Controlador dos Dados</h3>
            <p>
              <strong>Caixa D'Água Revestimentos Ltda</strong><br>
              CNPJ: 00.180.250/0001-50<br>
              Endereço: Rua Doutor José Éboli, 300 — Porto Alegre/RS<br>
              Telefone: (51) 3348-1239<br>
              E-mail para assuntos de privacidade:
              <a href="mailto:privacidade@caixadaguarevestimentos.com.br" class="legal-link">
                privacidade@caixadaguarevestimentos.com.br
              </a>
            </p>
          </div>

          <div class="legal-block">
            <h3>2. Dados que Coletamos</h3>

            <div class="data-table-wrap">
              <table class="data-table" role="table">
                <thead>
                  <tr>
                    <th>Dado</th>
                    <th>Finalidade</th>
                    <th>Base legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome completo</td>
                    <td>Identificação para orçamento</td>
                    <td>Execução de contrato — Art. 7º, V</td>
                  </tr>
                  <tr>
                    <td>Telefone / WhatsApp</td>
                    <td>Contato para agendamento</td>
                    <td>Execução de contrato — Art. 7º, V</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>Envio de proposta e comunicados</td>
                    <td>Legítimo interesse — Art. 7º, IX</td>
                  </tr>
                  <tr>
                    <td>Endereço do imóvel</td>
                    <td>Visita técnica e logística</td>
                    <td>Execução de contrato — Art. 7º, V</td>
                  </tr>
                  <tr>
                    <td>Dados de navegação (cookies)</td>
                    <td>Melhoria da experiência e analytics</td>
                    <td>Consentimento — Art. 7º, I</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="legal-block">
            <h3>3. Como Usamos Seus Dados</h3>
            <ul class="legal-list">
              <li>Responder solicitações de orçamento e agendamentos;</li>
              <li>Enviar confirmações de serviço e documentação técnica;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Cumprir obrigações legais e contratuais;</li>
              <li>Enviar comunicações sobre nossos serviços (com possibilidade de cancelamento a qualquer momento).</li>
            </ul>
          </div>

          <div class="legal-block">
            <h3>4. Compartilhamento de Dados</h3>
            <p>Seus dados pessoais <strong>não são vendidos</strong>. Podemos compartilhá-los apenas com:</p>
            <ul class="legal-list">
              <li><strong>Prestadores de serviço tecnológico</strong> (hospedagem, e-mail transacional) — com cláusulas contratuais de proteção;</li>
              <li><strong>Autoridades públicas</strong> quando exigido por lei ou ordem judicial;</li>
              <li><strong>Parceiros técnicos</strong> envolvidos diretamente na execução do serviço contratado.</li>
            </ul>
          </div>

          <div class="legal-block">
            <h3>5. Retenção de Dados</h3>
            <p>
              Mantemos seus dados pelo tempo necessário ao cumprimento das finalidades descritas
              ou conforme exigido por lei (e.g., obrigações fiscais por 5 anos). Após esse prazo,
              os dados são excluídos ou anonimizados de forma segura.
            </p>
          </div>

          <div class="legal-block">
            <h3>6. Seus Direitos (LGPD — Art. 18)</h3>
            <div class="rights-grid">
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                </span>
                <strong>Acesso</strong>
                <span>Saber quais dados temos sobre você</span>
              </div>
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
                </span>
                <strong>Correção</strong>
                <span>Atualizar dados incompletos ou incorretos</span>
              </div>
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                </span>
                <strong>Exclusão</strong>
                <span>Solicitar a remoção dos seus dados</span>
              </div>
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"/></svg>
                </span>
                <strong>Oposição</strong>
                <span>Opor-se ao tratamento baseado em legítimo interesse</span>
              </div>
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
                </span>
                <strong>Portabilidade</strong>
                <span>Receber seus dados em formato estruturado</span>
              </div>
              <div class="right-card">
                <span class="right-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>
                </span>
                <strong>Informação</strong>
                <span>Saber com quem compartilhamos seus dados</span>
              </div>
            </div>
            <p class="rights-contact">
              Para exercer qualquer direito, entre em contato pelo e-mail
              <a href="mailto:privacidade@caixadaguarevestimentos.com.br" class="legal-link">
                privacidade@caixadaguarevestimentos.com.br
              </a>
              ou pelo telefone <a href="tel:+555133481239" class="legal-link">(51) 3348-1239</a>.
              Responderemos em até 15 dias úteis.
            </p>
          </div>

          <div class="legal-block">
            <h3>7. Segurança dos Dados</h3>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
              acesso não autorizado, perda, destruição ou divulgação indevida — incluindo criptografia
              SSL/TLS, controle de acesso restrito e backups periódicos.
            </p>
          </div>

        </div>
      </section>

      <div class="section-divider" aria-hidden="true">
        <span class="divider-line"></span>
        <span class="divider-drop">
          <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10 0C10 0 2 9 2 15C2 19.418 5.582 23 10 23C14.418 23 18 19.418 18 15C18 9 10 0 10 0Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="divider-line"></span>
      </div>

      <!-- ────────────────────────────────────
           3. POLÍTICA DE COOKIES
      ──────────────────────────────────── -->
      <section
        id="cookies"
        class="legal-section"
        role="tabpanel"
        aria-labelledby="tab-cookies"
      >
        <header class="legal-section__header">
          <span class="section-num">03</span>
          <div>
            <h2 class="legal-section__title">Política de Cookies</h2>
            <p class="legal-section__date">Vigência: 1º de maio de 2026</p>
          </div>
        </header>

        <div class="legal-content">

          <div class="legal-block">
            <h3>1. O que são Cookies?</h3>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você
              visita um site. Eles permitem que o site lembre suas preferências, analise como
              você navega e ofereça uma experiência mais personalizada.
            </p>
          </div>

          <div class="legal-block">
            <h3>2. Cookies que Utilizamos</h3>
            <div class="cookies-grid">
              <div class="cookie-card cookie-card--essential">
                <div class="cookie-card__header">
                  <span class="cookie-tag cookie-tag--essential">Essenciais</span>
                  <span class="cookie-card__required">Sempre ativos</span>
                </div>
                <p class="cookie-card__desc">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
                <ul class="cookie-list">
                  <li>
                    <code>session_id</code>
                    <span>Sessão do usuário · Expira: ao fechar o navegador</span>
                  </li>
                  <li>
                    <code>cookie_consent</code>
                    <span>Preferências de cookies · Expira: 1 ano</span>
                  </li>
                  <li>
                    <code>csrf_token</code>
                    <span>Segurança de formulários · Expira: sessão</span>
                  </li>
                </ul>
              </div>

              <div class="cookie-card cookie-card--analytics">
                <div class="cookie-card__header">
                  <span class="cookie-tag cookie-tag--analytics">Analíticos</span>
                  <span class="cookie-card__optional">Opcional</span>
                </div>
                <p class="cookie-card__desc">
                  Nos ajudam a entender como os visitantes usam o site — quais páginas são mais
                  acessadas, tempo de permanência e origem do tráfego. Todos os dados são
                  anonimizados.
                </p>
                <ul class="cookie-list">
                  <li>
                    <code>_ga</code>
                    <span>Google Analytics — identificador único · Expira: 2 anos</span>
                  </li>
                  <li>
                    <code>_ga_*</code>
                    <span>Google Analytics — estado da sessão · Expira: 1 ano</span>
                  </li>
                </ul>
              </div>

              <div class="cookie-card cookie-card--marketing">
                <div class="cookie-card__header">
                  <span class="cookie-tag cookie-tag--marketing">Marketing</span>
                  <span class="cookie-card__optional">Opcional</span>
                </div>
                <p class="cookie-card__desc">
                  Utilizados para medir a efetividade de campanhas de mídia paga (Google Ads,
                  Facebook). Não compartilhamos dados de identificação pessoal com plataformas
                  de anúncios.
                </p>
                <ul class="cookie-list">
                  <li>
                    <code>_fbp</code>
                    <span>Facebook Pixel · Expira: 3 meses</span>
                  </li>
                  <li>
                    <code>_gcl_au</code>
                    <span>Google Ads · Expira: 90 dias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="legal-block">
            <h3>3. Como Gerenciar Cookies</h3>
            <p>
              Você pode controlar e/ou excluir cookies a qualquer momento. Acesse as configurações
              do seu navegador para gerenciar suas preferências:
            </p>
            <div class="browser-links">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" class="browser-link">Chrome</a>
              <a href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-armazenadas" target="_blank" rel="noopener noreferrer" class="browser-link">Firefox</a>
              <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" class="browser-link">Safari</a>
              <a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" class="browser-link">Edge</a>
            </div>
            <p style="margin-top: 12px;">
              <strong>Atenção:</strong> desativar cookies analíticos e de marketing não prejudica
              a navegação no site. Desativar cookies essenciais pode afetar o funcionamento de
              formulários de contato.
            </p>
          </div>

          <div class="legal-block">
            <h3>4. Cookies de Terceiros</h3>
            <p>
              Utilizamos serviços de terceiros que podem instalar seus próprios cookies. Cada
              plataforma possui sua própria política de privacidade:
            </p>
            <ul class="legal-list">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="legal-link">Google Analytics / Google Ads — Política de Privacidade do Google</a>
              </li>
              <li>
                <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" class="legal-link">Meta (Facebook) Pixel — Política de Dados da Meta</a>
              </li>
            </ul>
          </div>

          <div class="legal-block">
            <h3>5. Atualizações desta Política</h3>
            <p>
              Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças
              em nossas práticas ou exigências legais. Notificaremos sobre alterações relevantes
              por meio de aviso no site.
            </p>
          </div>

        </div>
      </section>

      <!-- ── CONTATO LGPD ── -->
      <aside class="lgpd-contact-block">
        <div class="lgpd-contact-block__icon" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="4" fill="var(--cyan-ghost)"/>
            <path d="M20 10C14.477 10 10 14.477 10 20s4.477 10 10 10 10-4.477 10-10S25.523 10 20 10zm0 4a2 2 0 110 4 2 2 0 010-4zm0 6c.553 0 1 .447 1 1v5a1 1 0 11-2 0v-5c0-.553.447-1 1-1z" fill="var(--cobalt)"/>
          </svg>
        </div>
        <div class="lgpd-contact-block__content">
          <h3>Dúvidas sobre privacidade?</h3>
          <p>
            Nossa equipe está disponível para esclarecer qualquer questão relacionada ao
            tratamento dos seus dados pessoais.
          </p>
          <div class="lgpd-contact-block__links">
            <a href="mailto:privacidade@caixadaguarevestimentos.com.br" class="lgpd-btn">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              privacidade@caixadaguarevestimentos.com.br
            </a>
            <a href="tel:+555133481239" class="lgpd-btn lgpd-btn--secondary">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              (51) 3348-1239
            </a>
          </div>
        </div>
      </aside>

    </main>

    <!-- ── BACK TO TOP ── -->
    <div class="back-top-wrap inner">
      <button class="back-top" @click="scrollTop" aria-label="Voltar ao topo">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
        Voltar ao topo
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('termos')

const tabs = [
  {
    id: 'termos',
    label: 'Termos de Uso',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>`
  },
  {
    id: 'privacidade',
    label: 'Privacidade',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`
  },
  {
    id: 'cookies',
    label: 'Cookies',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 5a1 1 0 100 2 1 1 0 000-2zm-3 1a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zm-3-4a1 1 0 100 2 1 1 0 000-2z"/></svg>`
  }
]

function goTo(id) {
  activeTab.value = id
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* ══════════════════════════════════════
   TOKENS — herda do projeto
   (certifique-se que o tokens.css está
   importado no main.js ou App.vue)
══════════════════════════════════════ */
/* Fallback inline caso tokens.css não esteja carregado */
.politicas-page {
  --navy-deep:   #0D2A52;
  --navy:        #1A4A8A;
  --cobalt:      #1A6BC4;
  --sky:         #00B8F0;
  --cyan-light:  #7ADCF5;
  --cyan-pale:   #C6F0FB;
  --cyan-ghost:  #E0F6FD;
  --lacre:       #00D4AA;
  --white:       #FFFFFF;
  --fog:         #F2F6FB;
  --mist:        #DDE8F5;
  --iron:        #6B82A0;
  --steel:       #3A5270;
  --text:        #0A1E35;

  --font-wave:    'Raleway', sans-serif;
  --font-display: 'Raleway', sans-serif;
  --font-body:    'Lato', sans-serif;
  --font-mono:    'DM Mono', monospace;

  --spring: cubic-bezier(.22,1,.36,1);

  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  --radius-sm: 4px;
  --radius-md: 8px;

  background: var(--fog);
  color: var(--text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

/* ── LAYOUT ── */
.inner {
  max-width: 860px;
  margin-inline: auto;
  padding-inline: var(--space-6);
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.hero-legal {
  position: relative;
  background: var(--navy-deep);
  overflow: hidden;
  padding-top: var(--space-20);
  padding-bottom: 0;
}

.hero-legal__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 80% 20%, rgba(0,184,240,.12) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(26,107,196,.15) 0%, transparent 55%);
  pointer-events: none;
}

.hero-legal .inner {
  position: relative;
  z-index: 1;
  padding-bottom: 0;
}

.eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--sky);
  margin-bottom: var(--space-4);
}

.hero-legal__title {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: clamp(32px, 6vw, 52px);
  line-height: 1.08;
  letter-spacing: .01em;
  color: #fff;
  margin-bottom: var(--space-4);
}

.hero-legal__title .accent {
  color: var(--sky);
}

.hero-legal__sub {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255,255,255,.65);
  margin-bottom: var(--space-8);
}

/* ── TAB NAV ── */
.tab-nav {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  padding-top: 4px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 12px 16px 14px;
  cursor: pointer;
  transition: color .2s, border-color .2s;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

.tab-btn:hover {
  color: rgba(255,255,255,.85);
}

.tab-btn--active {
  color: #fff;
  border-bottom-color: var(--sky);
  background: rgba(0,184,240,.06);
}

.tab-btn__icon {
  display: inline-flex;
  flex-shrink: 0;
}

.tab-btn__icon svg {
  width: 16px;
  height: 16px;
}

/* ══════════════════════════════════════
   LEGAL BODY
══════════════════════════════════════ */
.legal-body {
  padding-top: var(--space-12);
  padding-bottom: var(--space-20);
}

/* ── SECTION ── */
.legal-section {
  scroll-margin-top: 80px;
}

.legal-section__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-6);
  border-bottom: .5px solid var(--mist);
}

.section-num {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--sky);
  background: var(--cyan-ghost);
  border: .5px solid var(--cyan-light);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 4px;
}

.legal-section__title {
  font-family: var(--font-wave);
  font-weight: 300;
  font-size: clamp(22px, 3.5vw, 32px);
  line-height: 1.1;
  letter-spacing: .01em;
  color: var(--navy-deep);
  margin-bottom: 6px;
}

.legal-section__date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--iron);
  letter-spacing: .04em;
}

/* ── CONTENT BLOCKS ── */
.legal-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.legal-block h3 {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -.01em;
  color: var(--navy);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.legal-block p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.75;
  color: var(--steel);
}

.legal-block p + p {
  margin-top: 12px;
}

.legal-block strong {
  font-weight: 700;
  color: var(--navy);
}

/* ── LIST ── */
.legal-list {
  list-style: none;
  padding: 0;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legal-list li {
  display: flex;
  gap: 10px;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.65;
  color: var(--steel);
  padding-left: 4px;
}

.legal-list li::before {
  content: '—';
  color: var(--sky);
  font-family: var(--font-mono);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 3px;
}

/* ── LINKS ── */
.legal-link {
  color: var(--cobalt);
  text-decoration: underline;
  text-decoration-color: var(--cyan-light);
  text-underline-offset: 3px;
  transition: color .2s, text-decoration-color .2s;
}

.legal-link:hover {
  color: var(--sky);
  text-decoration-color: var(--sky);
}

/* ── HIGHLIGHT BOX ── */
.highlight-box {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  background: var(--cyan-ghost);
  border: .5px solid var(--cyan-light);
  border-left: 3px solid var(--sky);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: var(--space-6);
}

.highlight-box__icon {
  flex-shrink: 0;
  color: var(--sky);
}

.highlight-box__icon svg {
  width: 22px;
  height: 22px;
}

.highlight-box p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--navy);
  margin: 0;
}

/* ── DATA TABLE ── */
.data-table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: .5px solid var(--mist);
  border-radius: var(--radius-sm);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.data-table th {
  background: var(--navy-deep);
  color: rgba(255,255,255,.85);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-align: left;
  padding: 10px 14px;
  font-weight: 400;
}

.data-table td {
  padding: 11px 14px;
  border-bottom: .5px solid var(--mist);
  color: var(--steel);
  font-weight: 300;
  line-height: 1.5;
  vertical-align: top;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:nth-child(even) td {
  background: var(--fog);
}

/* ── RIGHTS GRID ── */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: var(--space-6);
}

.right-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-4);
  background: var(--white);
  border: .5px solid var(--mist);
  border-radius: var(--radius-sm);
  transition: border-color .2s, box-shadow .2s;
}

.right-card:hover {
  border-color: var(--cyan-light);
  box-shadow: 0 2px 12px rgba(0,184,240,.08);
}

.right-card__icon {
  color: var(--sky);
  display: inline-flex;
  margin-bottom: 2px;
}

.right-card__icon svg {
  width: 18px;
  height: 18px;
}

.right-card strong {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: .04em;
  text-transform: uppercase;
}

.right-card span {
  font-size: 13px;
  font-weight: 300;
  color: var(--iron);
  line-height: 1.5;
}

.rights-contact {
  font-size: 14px;
  font-weight: 300;
  color: var(--steel);
  line-height: 1.6;
}

/* ── COOKIES GRID ── */
.cookies-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cookie-card {
  background: var(--white);
  border: .5px solid var(--mist);
  border-radius: var(--radius-sm);
  padding: var(--space-6);
}

.cookie-card--essential { border-left: 3px solid var(--lacre); }
.cookie-card--analytics { border-left: 3px solid var(--cobalt); }
.cookie-card--marketing { border-left: 3px solid var(--iron); }

.cookie-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cookie-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 2px;
}

.cookie-tag--essential { background: rgba(0,212,170,.12); color: #007a60; }
.cookie-tag--analytics { background: var(--cyan-ghost); color: var(--cobalt); border: .5px solid var(--cyan-light); }
.cookie-tag--marketing { background: rgba(107,130,160,.1); color: var(--steel); }

.cookie-card__required {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--lacre);
  letter-spacing: .06em;
}

.cookie-card__optional {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--iron);
  letter-spacing: .06em;
}

.cookie-card__desc {
  font-size: 14px;
  font-weight: 300;
  color: var(--steel);
  line-height: 1.6;
  margin-bottom: 14px;
}

.cookie-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cookie-list li {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.cookie-list code {
  font-family: var(--font-mono);
  font-size: 12px;
  background: var(--fog);
  border: .5px solid var(--mist);
  color: var(--navy);
  padding: 2px 7px;
  border-radius: 2px;
  flex-shrink: 0;
}

.cookie-list span {
  font-size: 13px;
  font-weight: 300;
  color: var(--iron);
  line-height: 1.5;
}

/* ── BROWSER LINKS ── */
.browser-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 4px;
}

.browser-link {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--cobalt);
  background: var(--cyan-ghost);
  border: .5px solid var(--cyan-light);
  padding: 5px 12px;
  border-radius: 2px;
  text-decoration: none;
  transition: background .2s, color .2s;
}

.browser-link:hover {
  background: var(--navy-deep);
  color: var(--sky);
  border-color: var(--sky);
}

/* ── SECTION DIVIDER ── */
.section-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-block: var(--space-12);
  color: var(--cyan-light);
}

.divider-line {
  flex: 1;
  height: .5px;
  background: var(--mist);
}

.divider-drop {
  display: inline-flex;
  flex-shrink: 0;
}

.divider-drop svg {
  width: 14px;
  height: 17px;
  opacity: .35;
}

/* ── LGPD CONTACT ── */
.lgpd-contact-block {
  display: flex;
  gap: var(--space-6);
  align-items: flex-start;
  background: var(--white);
  border: .5px solid var(--mist);
  border-top: 3px solid var(--sky);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  padding: var(--space-8);
  margin-top: var(--space-12);
}

.lgpd-contact-block__icon {
  flex-shrink: 0;
}

.lgpd-contact-block__icon svg {
  width: 40px;
  height: 40px;
}

.lgpd-contact-block__content h3 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.lgpd-contact-block__content p {
  font-size: 14px;
  font-weight: 300;
  color: var(--steel);
  line-height: 1.65;
  margin-bottom: var(--space-4);
}

.lgpd-contact-block__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.lgpd-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 40px;
  background: var(--navy-deep);
  color: #fff;
  border: 2px solid var(--sky);
  transition: background .2s, color .2s;
}

.lgpd-btn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.lgpd-btn:hover {
  background: var(--sky);
  color: var(--navy-deep);
  border-color: var(--sky);
}

.lgpd-btn--secondary {
  background: transparent;
  color: var(--navy);
  border-color: var(--mist);
}

.lgpd-btn--secondary:hover {
  background: var(--fog);
  border-color: var(--navy);
}

/* ── BACK TO TOP ── */
.back-top-wrap {
  display: flex;
  justify-content: flex-end;
  padding-block: var(--space-8);
  border-top: .5px solid var(--mist);
}

.back-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--iron);
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 0;
  transition: color .2s;
}

.back-top:hover { color: var(--sky); }

.back-top svg {
  width: 16px;
  height: 16px;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 600px) {
  .hero-legal {
    padding-top: var(--space-12);
  }

  .tab-btn {
    font-size: 11px;
    padding: 10px 12px 12px;
    gap: 6px;
  }

  .tab-btn__icon svg {
    width: 14px;
    height: 14px;
  }

  .legal-section__header {
    flex-direction: column;
    gap: 10px;
  }

  .section-num {
    margin-top: 0;
  }

  .rights-grid {
    grid-template-columns: 1fr 1fr;
  }

  .lgpd-contact-block {
    flex-direction: column;
    gap: var(--space-4);
  }

  .lgpd-contact-block__links {
    flex-direction: column;
  }

  .lgpd-btn {
    justify-content: center;
  }

  .data-table th,
  .data-table td {
    font-size: 12px;
    padding: 8px 10px;
  }
}
</style>
