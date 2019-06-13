<template>
  <a-layout-sider>
    <div class="logo">
      <logo :title="title" :showTitle="showTitle" />
    </div>
    <a-menu
      :defaultSelectedKeys="['1']"
      :inlineCollapsed="collapsed"
      theme="dark"
      mode="inline"
      @click="changeRouter"
    >
      <a-sub-menu key="sub1" v-for="menu in menus" :key="menu.id">
        <span slot="title">
          <span>{{ menu.name }}</span>
        </span>
        <a-menu-item key="5" v-for="list in menu.childs" :key="list.id">{{
          list.name
        }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import Logo from "./Logo";
export default {
  name: "left",
  data() {
    return {
      collapsed: false,
      current: ["index"],
      showTitle: true,
      title: "白熊新选",
      menus: [
        {
          id: "0",
          name: "商品管理",
          childs: [
            {
              id: "0-1",
              name: "商品列表"
            }
          ]
        },
        {
          id: "1",
          name: "活动管理",
          childs: [
            {
              id: "1-1",
              name: "任务列表"
            },
            {
              id: "1-2",
              name: "任务发布"
            },
            {
              id: "1-3",
              name: "任务审核"
            }
          ]
        },
        {
          id: "2",
          name: "用户管理",
          childs: [
            {
              id: "2-0",
              name: "用户列表"
            }
          ]
        }
      ]
    };
  },
  components: {
    Logo
  },
  methods: {
    changeRouter(item, key, keyPath) {
      console.log(item, key, keyPath);
    }
  },
  mounted() {
    console.log(this.router);
  }
};
</script>

<style lang="scss">
.ant-layout-sider-children {
  background: #001529;
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-left: 0;
}
</style>
