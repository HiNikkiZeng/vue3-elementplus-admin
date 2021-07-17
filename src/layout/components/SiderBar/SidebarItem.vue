<template>
<!-- -->
  <div >
    siderbarItem
  </div>
</template>

<script>
import {
  reactive, toRefs, defineComponent, computed,
} from 'vue';

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isCollapse: {
      type: Boolean,
      required: false,
    },
    isFirstLevel: {
      type: Boolean,
      required: false,
    },
    basePath: {
      type: String,
      required: true,
    },
  },
  setup() {
    const dataMap = reactive({

    });

    const routes = computed(() => store.state.permission.routes);
    return {
      ...toRefs(dataMap),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
