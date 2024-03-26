const mineRouter = [
  {
    path: "login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: 'score',
    name: 'score',
    component: () => import('@/views/score/index.vue'),
    meta: {
      title: '积分',
    },
  },
  {
    path: 'coupon',
    name: 'coupon',
    component: () => import('@/views/coupon/index.vue'),
    meta: {
      title: '优惠券',
    },
  },
  {
    path: 'like',
    name: 'like',
    component: () => import('@/views/like/index.vue'),
    meta: {
      title: '我的收藏',
    },
  },
  {
    path: 'location',
    name: 'location',
    component: () => import('@/views/location/index.vue'),
    meta: {
      title: '收货地址',
    },
  },
  {
    path: 'service',
    name: 'service',
    component: () => import('@/views/location/index.vue'),
    meta: {
      title: '联系客服',
    },
  },
  {
    path: 'feedback',
    name: 'feedback',
    component: () => import('@/views/feedback/index.vue'),
    meta: {
      title: '意见反馈',
    },
  },
  {
    path: "setting",
    name: "setting",
    component: () =>
      import("@/views/setting/index.vue"),
    meta: {
      title: "设置"
    }
  },
];

export default mineRouter;

