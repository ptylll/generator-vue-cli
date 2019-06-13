import Vue from "vue";
import VueRouter from "vue-router";
import routeMap from "./config/router.config";
import Login from "./views/login";

Vue.use(VueRouter);

const routes = routeMap;

const router = new VueRouter({
  routes
});

export default router;
