<template>
  <section class="app-main">
    <router-view v-slot="{Component}">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script >
import { reactive, toRefs } from 'vue';

export default {
  name: 'AppMain',
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

</style>
