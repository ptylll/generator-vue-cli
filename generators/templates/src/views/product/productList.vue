<template>
  <div>
    <div class="add-product">
      <a-button type="primary" @click="creatProduct">添加商品</a-button>
    </div>
    <div class="product-list">
      <a-table
        :columns="columns"
        :rowKey="record => record.login.uuid"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="name" slot-scope="name"
          >{{ name.first }} {{ name.last }}</template
        >
      </a-table>
    </div>
    <div class="creat">
      <create :visible="visible" @close="close" />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "淘宝信息",
    dataIndex: "name"
  },
  {
    title: "类目",
    dataIndex: "category"
  },
  {
    title: "活动sku",
    dataIndex: "sku"
  },
  {
    title: "淘宝原价",
    dataIndex: "price"
  },
  {
    title: "心选价值（熊掌）",
    dataIndex: "discounts"
  },
  {
    title: "参与活动",
    dataIndex: "join"
  },
  {
    title: "操作",
    dataIndex: "handle"
  }
];
import Create from "./comm/create";
export default {
  data() {
    return {
      columns,
      data: [],
      pagination: {},
      loading: false,
      visible: false
    };
  },
  methods: {
    close(data) {
      this.visible = data;
    },
    creatProduct() {
      this.visible = true;
    },
    handleTableChange() {}
  },
  components: {
    Create
  }
};
</script>
<style lang="scss" scoped>
.add-product {
  display: flex;
  justify-content: flex-end;
}
.product-list {
  margin-top: 10px;
}
</style>
