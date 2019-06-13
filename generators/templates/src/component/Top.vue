<template>
  <div class="top">
    <div class="user">
      <a-dropdown>
        <a class="ant-dropdown-link" href="#">
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />用户1
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">修改密码</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "top"
};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
  padding-right: 20px;
  color: #1890ff;
  .user {
    cursor: pointer;
  }
}
</style>
