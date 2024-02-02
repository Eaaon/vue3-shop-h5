import { RouterView, createRouter, createWebHistory } from 'vue-router'
import userRouter from './user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
        showWindowBar: true,
      },
    },
    {
      path: '/user',
      component: RouterView,
      children: userRouter
    },
    {
      path: '/401',
      component: () => import('@/views/error/401.vue'),
      meta: {
        title: '401',
      }
    },
    {
      path: '/404',
      component: () => import('@/views/error/404.vue'),
      meta: {
        title: '404',
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'others',
      redirect: '/404',
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(async (to, from, next) => {
  console.log(to, from)
  next();
})

router.afterEach((to, from) => {
  console.log(to, from)
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + ''
  }
})

export default router
