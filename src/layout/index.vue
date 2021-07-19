<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
       <AppMain />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { AppMain, Sidebar } from './components';

export default ({
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
  },
  setup() {
    const dataMap = reactive({

    });
    return {
      ...toRefs(dataMap),
    };
  },
});
</script>

<style lang="scss" scoped>
  // @import "~@/styles/variables.scss";
  // @import "~@/styles/mixin.scss";

 .app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: $sideBarWidth;
  position: relative;
}

</style>
