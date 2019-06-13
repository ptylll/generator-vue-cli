<template>
  <div class="login">
    <div class="login-form">
      <div class="login-container">
        <a-form :form="form">
          <a-form-item
            :labelCol="{ span: 0 }"
            :wrapperCol="{ span: 24 }"
            label=""
          >
            <a-input
              placeholder="请输入您的登录账号"
              v-decorator="[
                'form.username',
                { rules: [{ required: true, message: '请输入您的登录账号' }] }
              ]"
              class="custom-input"
            />
          </a-form-item>
          <a-form-item
            :label-col="{ span: 0 }"
            :wrapper-col="{ span: 24 }"
            label=""
          >
            <a-input
              placeholder="请输入密码"
              v-decorator="[
                'form.password',
                { rules: [{ required: true, message: '请输入密码' }] }
              ]"
            />
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              class="loginBtn"
              @click="login"
              :loading="isLoading"
              >登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../img/jkt_big_bg.0e017532.png");
  background-size: cover;
  background-position: top center;
  .login-form {
    position: absolute;
    width: 1200px;
    height: 380px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .login-container {
      width: 400px;
      height: 100%;
      float: right;
      padding: 75px 85px;
      background-color: #fff;
      border-radius: 8px;
      border: 1px solid #ccc;
    }
    .loginBtn {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      isLoading: false,
      form: this.$form.createForm(this)
    };
  },

  methods: {
    login(e) {
      e.preventDefault();
      this.isLoading = true;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push({ path: "/backstage" });
        }
      });
    }
  }
};
</script>
