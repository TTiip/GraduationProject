import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('~/components/HelloWorld.vue') },
    { path: '/home1', component: () => import('~/components/HelloWorld1.vue') },
  ],
})

router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {
    // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/')
  } else {
    // 如果匹配到正确跳转
    next()
  }
})
