<template>
  <div class="container">
      dashboard
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue';

export default {
  name: 'Dashboard',
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
