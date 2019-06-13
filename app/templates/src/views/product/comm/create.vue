<template>
  <a-drawer
    title="添加产品"
    :width="720"
    @close="onClose"
    :visible="visible"
    :wrapStyle="{
      height: 'calc(100% - 108px)',
      overflow: 'auto',
      paddingBottom: '108px'
    }"
  >
    <a-form :form="form" layout="vertical" hideRequiredMark>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="商品名称">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: '请输入商品名称' }]
                }
              ]"
              placeholder="不能与淘宝商品名称标题"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="商品价值">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: '请输入粉丝使用熊掌兑换的价格' }
                  ]
                }
              ]"
              placeholder="粉丝使用熊掌兑换的价格"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="商品类目">
            <a-select
              v-decorator="[
                'owner',
                {
                  rules: [{ required: true, message: 'Please select an owner' }]
                }
              ]"
              placeholder="Please a-s an owner"
            >
              <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
              <a-select-option value="mao">Maomao Zhou</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="淘宝url">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: '请输入粉丝使用熊掌兑换的价格' }
                  ]
                }
              ]"
              placeholder="粉丝使用熊掌兑换的价格"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="淘宝名称">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: '请输入粉丝使用熊掌兑换的价格' }
                  ]
                }
              ]"
              placeholder="粉丝使用熊掌兑换的价格"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="淘宝价格">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: '请输入粉丝使用熊掌兑换的价格' }
                  ]
                }
              ]"
              placeholder="粉丝使用熊掌兑换的价格"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="主图">
            <a-upload
              v-for="(list, index) in pictures"
              :key="index"
              accept=".jpeg, .jpg, .png, .gif"
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :beforeUpload="beforeUpload"
              @change="detailImg"
            >
              <img v-if="list.img" :src="list.img" alt="avatar" />
              <div v-else>
                <a-icon :type="list.loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">上传</div>
              </div>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="详情图">
            <a-upload
              v-for="(list, index) in detailsImg"
              :key="index"
              accept=".jpeg, .jpg, .png, .gif"
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :beforeUpload="beforeUpload"
              @change="detailImg"
            >
              <img v-if="list.img" :src="list.img" alt="avatar" />
              <div v-else>
                <a-icon :type="list.loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">上传</div>
              </div>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div
      :style="{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right'
      }"
    >
      <a-button :style="{ marginRight: '8px' }" @click="onClose">取消</a-button>
      <a-button @click="onClose" type="primary">提交</a-button>
    </div>
  </a-drawer>
</template>
<script>
const category = [
  {
    id: "0",
    name: "女装"
  },
  {
    id: "1",
    name: "男装"
  },
  {
    id: "2",
    name: "童装"
  },
  {
    id: "3",
    name: "鞋子"
  },

  {
    id: "4",
    name: "化妆品"
  },
  {
    id: "5",
    name: "汽车"
  }
];
import createMix from "./creatMinix";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  mixins: [createMix],
  data() {
    return {
      category,
      form: this.$form.createForm(this),
      pictures: [
        {
          img: "",
          loading: false
        }
      ],
      detailsImg: [
        {
          img: "",
          loading: false
        }
      ]
    };
  },
  methods: {
    onClose() {
      this.$emit("close", false);
    },
    detailImg() {
      //详情图上传
    }
  }
};
</script>
