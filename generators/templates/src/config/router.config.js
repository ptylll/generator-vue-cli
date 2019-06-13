const routeMap = [
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: resolve => require(["$views/login/index.vue"], resolve)
  },
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: resolve => require(["$views/home/index.vue"], resolve),
    children: [
      {
        path: "/product",
        name: "product",
        meta: { title: "商品管理", keepAlive: true, icon: "" },
        redirect: "/product/list", //默认重定向
        component: resolve => require(["$views/product/index.vue"], resolve),
        children: [
          {
            path: "/product/list",
            name: "productList",
            component: () => import("$views/product/productList.vue"),
            meta: { title: "商品列表", keepAlive: false, key: "1-0" }
          }
        ]
      },
      {
        path: "/activity",
        name: "activity",
        meta: { title: "活动列表", keepAlive: true, icon: "" },
        redirect: "activity/list", //默认重定向
        component: resolve => require(["$views/activity/index.vue"], resolve),
        children: [
          {
            path: "/activity/list",
            name: "activityList",
            component: () => import("$views/activity/activityList.vue"),
            meta: { title: "活动列表", keepAlive: false, key: "2-0" }
          }
        ]
      },
      {
        path: "/task",
        name: "task",
        meta: { title: "任务列表", keepAlive: true, icon: "" },
        redirect: "task/list", //默认重定向
        component: resolve => require(["$views/task/index.vue"], resolve),
        children: [
          {
            path: "/task/list",
            name: "taskList",
            component: () => import("$views/task/taskList.vue"),
            meta: { title: "任务列表", keepAlive: false, key: "3-0" }
          }
        ]
      },
      {
        path: "user",
        name: "user",
        meta: { title: "用户列表", keepAlive: true, icon: "" },
        redirect: "user/list", //默认重定向,
        component: resolve => require(["$views/user/index.vue"], resolve),
        children: [
          {
            path: "/user/list",
            name: "userList",
            component: () => import("$views/user/userList.vue"),
            meta: { title: "用户列表", keepAlive: false, key: "4-0" }
          }
        ]
      }
    ]
  }
];
export default routeMap;
