import { createRouter, createWebHistory } from 'vue-router'
import myDayView from '@/views/mydayView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/myday'
    },
    {
      path: '/myday',
      component: myDayView
    }
  ]
})

export default router
