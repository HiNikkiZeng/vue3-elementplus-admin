<template>
  <div class="container">
      form
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue';

export default {
  name: 'App',
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
