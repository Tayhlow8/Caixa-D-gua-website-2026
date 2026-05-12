import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Impermeabilizacao from "../pages/Impermeabilizacao.vue";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade.vue";
import TermosServico from "../pages/TermosServico.vue";
import FAQ from "../pages/FAQ.vue";
import Blog from "../pages/Blog.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title:
        "Revestimento de Caixa d'Água em Porto Alegre | Caixa d'Água Revestimentos",
      description:
        "Especialistas em revestimento interno e impermeabilização de caixa d'água com tecnologia exclusiva de PVC flexível. Atendemos RS e SC. Orçamento grátis!",
    },
  },
  {
    path: "/impermeabilizacao",
    component: Impermeabilizacao,
    meta: {
      title:
        "Impermeabilização de Caixa d'Água com Garantia | Caixa d'Água Revestimentos",
      description:
        "Impermeabilização com geomembrana PVC e manta asfáltica. Instalação em 1 dia, 5 anos de garantia, aprovação ANVISA. Atendemos Porto Alegre, RS e SC.",
    },
  },
  {
    path: "/faq",
    component: FAQ,
    meta: {
      title: "Perguntas Frequentes | Caixa d'Água Revestimentos",
      description:
        "Tire suas dúvidas sobre revestimento e impermeabilização de caixa d'água: materiais, duração, garantia e muito mais.",
    },
  },
  {
    path: "/blog",
    component: Blog,
    meta: {
      title: "Blog | Caixa d'Água Revestimentos",
      description:
        "Artigos e dicas sobre manutenção, limpeza e impermeabilização de caixa d'água.",
    },
  },
  {
    path: "/blog/:slug",
    component: () => import("../pages/BlogPost.vue"),
    meta: {
      title: "Blog | Caixa d'Água Revestimentos",
      description:
        "Artigos e dicas sobre manutenção e impermeabilização de caixa d'água.",
    },
  },
  {
    path: "/politica-de-privacidade",
    component: PoliticaPrivacidade,
    meta: {
      title: "Política de Privacidade | Caixa d'Água Revestimentos",
      description:
        "Política de privacidade e uso de cookies do site Caixa d'Água Revestimentos.",
    },
  },
  {
    path: "/termos-de-servico",
    component: TermosServico,
    meta: {
      title: "Termos de Serviço | Caixa d'Água Revestimentos",
      description:
        "Termos de serviço e condições de uso do site Caixa d'Água Revestimentos.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
