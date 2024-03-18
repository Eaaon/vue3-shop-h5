import { RouterView, createRouter, createWebHistory } from 'vue-router'
import mineRouter from './mine'
import goodsRouter from './goods'

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
      path: '/category',
      name: 'Category',
      component: () => import('@/views/category/index.vue'),
      meta: {
        title: '分类',
        showWindowBar: true,
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/cart/index.vue'),
      meta: {
        title: '购物车',
      },
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/views/mine/index.vue'),
      meta: {
        title: '我的',
        showWindowBar: true,
      },
    },
    {
      path: '/order/list',
      name: 'OrderList',
      component: () => import('@/views/order/list.vue'),
      meta: {
        title: '订单列表',
        needLogin: true,
      },
    },
    {
      path: '/order/detail',
      name: 'OrderDetail',
      component: () => import('@/views/order/detail.vue'),
      meta: {
        title: '订单详情',
        needLogin: true,
      },
    },
    {
      path: '/order/submit',
      name: 'OrderSubmit',
      component: () => import('@/views/order/submit.vue'),
      meta: {
        title: '提交订单',
        needLogin: true,
      },
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/views/home/other.vue'),
      meta: {
        title: '首页',
        showWindowBar: true,
      },
    },
    {
      path: '/goods',
      name: 'goods',
      component: RouterView,
      meta: {
        title: '商品',
        showWindowBar: true,
      },
      children: goodsRouter
    },
    {
      path: '/user',
      component: RouterView,
      children: mineRouter
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/video/index.vue'),
      meta: {
        title: '视频',
      }
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
