import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        const email = computed(() => store.state.email)
        if (!email.value) {
          next('/login')
        } else {
          next()
        }
      },
      component: () => import('../views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/callback.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router