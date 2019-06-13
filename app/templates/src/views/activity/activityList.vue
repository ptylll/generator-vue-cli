<template>
  <div>
    <div class="add-product">
      <a-button type="primary" @click="creatProduct">发布活动</a-button>
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
    title: "商品价值（熊掌）",
    dataIndex: "price"
  },
  {
    title: "下单sku",
    dataIndex: "sku"
  },
  {
    title: "实时库存",
    dataIndex: "num"
  },
  {
    title: "参与人数",
    dataIndex: "join"
  },
  {
    title: "成功领取人数",
    dataIndex: "succee"
  },
  {
    title: "待审核任务",
    dataIndex: "audit"
  },
  {
    title: "活动状态",
    dataIndex: "status"
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
    }
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
