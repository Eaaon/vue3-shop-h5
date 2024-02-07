const goodsRouter = [
  {
    path: "list",
    name: "goodsList",
    component: () =>
      import("@/views/goods/list.vue"),
    meta: {
      title: "商品列表"
    }
  },
  {
    path: "detail",
    name: "goodsDetail",
    component: () =>
      import("@/views/goods/detail.vue"),
    meta: {
      title: "商品详情"
    }
  }
];

export default goodsRouter;

