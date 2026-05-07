import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Impermeabilizacao from '../pages/Impermeabilizacao.vue'
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/impermeabilizacao', component: Impermeabilizacao },
  { path: '/politica-de-privacidade', component: PoliticaPrivacidade },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
