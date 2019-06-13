<template>
  <div class="task-comm">
    <a-tabs defaultActiveKey="1" type="card" @change="callback">
      <a-tab-pane key="1">
        <span slot="tab">
          待审核
          <a-badge count="25" />
        </span>
        <div class="tabs"></div>
      </a-tab-pane>
      <a-tab-pane tab="已审核" key="2" forceRender>已审核</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>
