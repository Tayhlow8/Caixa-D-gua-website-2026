import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Impermeabilizacao from '../pages/Impermeabilizacao.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/impermeabilizacao', component: Impermeabilizacao },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
