<template>
  <div class="container">
        <h1>test1</h1>
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
