import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/webdesign',
    name: 'webdesign',
    component: () => import('../views/WebdesignView.vue')
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import('../views/webdesign/ColorsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog/my-personal-toolbox',
    name: 'my-personal-toolbox',
    component: () => import('../views/blog/my-personal-toolbox/ToolsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    return { left: 0, top: 0 }
  }
})

export default router
