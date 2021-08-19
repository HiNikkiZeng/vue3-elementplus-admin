<template>
  <div class="sidebar-logo-container">
      <transition name="sidebarLogoFade">
        <img src="favicon.ico" class="sidebar-logo"
      >
      </transition>
      <h1 class="sidebar-title">VMe</h1>
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue';

export default {
  name: 'SidebarLogo',
  setup() {
    const dataMap = reactive({

    });
    return {
      ...toRefs(dataMap),
    };
  },
};
</script>

<style lang="scss" scoped>

.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container{
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: $menuBg;
  text-align: center;
  overflow: hidden;
  & .sidebar-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 0px;
  }
  & .sidebar-title {
    display: inline-block;
    margin: 0;
    color: #fff;
    line-height: 50px;
    font-size: 14px;
    vertical-align: middle;
    margin-left: 8px;
}

}
</style>
