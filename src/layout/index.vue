<template>
  <div class="app-wrapper">
    <div class="drawer-bg"></div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
       <AppMain />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue';
import { AppMain, Sidebar } from './components';

export default defineComponent({
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
</style>
