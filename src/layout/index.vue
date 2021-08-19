<template>
  <div class="app-wrapper">
    <Sidebar/>
    <section class="main-container">
        <AppMain/>
    </section>

  </div>
</template>

<script >
import { reactive, toRefs } from 'vue';
import { Sidebar, AppMain } from './components';

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
  },
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
.app-wrapper{
  @include clearfix;
  width: 100%;
  height: 100%;
  // position: relative;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: $sideBarWidth;
  position: relative;
}

</style>
