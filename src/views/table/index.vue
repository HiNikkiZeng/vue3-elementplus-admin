<template>
  <div class="container">
      table
  </div>
</template>

<script >
import { reactive, toRefs } from 'vue';

export default {
  name: 'Table',
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
