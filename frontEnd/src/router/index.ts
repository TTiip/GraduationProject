import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/logo', component: () => import('~/views/Logo/index') },
    { path: '/home', component: () => import('~/components/HelloWorld.vue') },
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
