import Vue from "vue";
import App from "./src/app.vue";
import router from "./src/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./src/sass/index.scss";
import "./src/sass/rest.scss";

Vue.use(Antd);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
