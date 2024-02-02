const userRouter = [
  {
    path: "login",
    name: "login",
    component: () =>
      import("@/views/user/Login.vue"),
    meta: {
      title: "登录"
    }
  }
];

export default userRouter;

