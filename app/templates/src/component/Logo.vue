<template>
  <div class="logo">
    <router-link :to="{ name: 'dashboard' }">
      <!-- <LogoSvg alt="logo" /> -->
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
// import LogoSvg from '$img/logo.svg'

export default {
  name: "Logo",
  // components: {
  //   LogoSvg
  // },
  props: {
    title: {
      type: String,
      default: "Ant Design Pro",
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
</style>
