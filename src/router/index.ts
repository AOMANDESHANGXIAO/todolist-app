import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: ''
    },
    {
      path: '/about',
      name: 'about'
    }
  ]
})

export default router
