const mineRouter = [
  {
    path: "login",
    name: "login",
    component: () =>
      import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
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
  {
    path: 'like',
    name: 'like',
    component: () => import('@/views/like/index.vue'),
    meta: {
      title: '我的收藏',
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
];

export default mineRouter;

