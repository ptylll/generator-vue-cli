 const routeMap = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: () => import('$views/index.vue')
  }
]

export default routeMap