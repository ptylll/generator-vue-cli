import Vue from "vue";
import App from "./src/app.vue";
import router from "./src/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { get, patch, remove, put, post } from "./src/api/http.js";
import "./src/sass/index.scss";
import "./src/sass/rest.scss";

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$put = put;
Vue.prototype.$delete = remove;
Vue.prototype.$patch = patch;
Vue.use(Antd);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
