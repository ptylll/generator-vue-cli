<template>
  <div>
    <a-menu
      :defaultSelectedKeys="[currentKey]"
      :defaultOpenKeys="defaultOpen"
      mode="inline"
      :inlineCollapsed="collapsed"
    >
      <a-sub-menu key="sub1" v-for="menu in menus" :key="menu.key">
        <span slot="title">
          <a-icon type="appstore" />
          <span>{{ menu.name }}</span>
        </span>
        <a-menu-item
          v-for="item in menu.children"
          :key="item.key"
          @click="routeLink(item)"
          >{{ item.name }}</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import menus from "@/config/menus.js";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menus,
      currentKey: "1-0",
      defaultOpen: []
    };
  },
  watch: {
    $route(to, from) {
      this.currentKey = to.meta.key;
    }
  },
  mounted() {
    this.init();
    this.currentKey = this.$route.meta.key;
  },
  methods: {
    init() {
      //初始化
      [...menus].forEach(item => {
        this.defaultOpen.push(item.key);
      });
    },
    routeLink(item) {
      //路由跳转
      window.localStorage.setItem("currrent", item.key);
      this.$router.push({ path: item.route });
    }
  }
};
</script>
