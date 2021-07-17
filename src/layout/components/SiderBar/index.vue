<template>
  <div class="container">
      siderbarIndex
      <el-scrollbar  wrap-class="scrollbar-wrapper">
         <el-menu
            :collapse="!isCollapse"
            :unique-opened="false"
            :default-active="activeMenu"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="menuActiveTextColor"
            mode="vertical"
            @open="handleOpen"
            @close="handleClose"
         >
         <SidebarItem
           v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
         />

        </el-menu>
      </el-scrollbar>
  </div>
</template>

<script>
import {
  reactive, toRefs, defineComponent, ref, computed,
} from 'vue';
import { useRoute } from 'vue-router';
import variables from '@/styles/variables.scss';
import SidebarItem from './SidebarItem.vue';

export default defineComponent({
  components: {
    SidebarItem,
  },
  setup() {
    const isCollapse = ref(true);
    const route = useRoute();
    const ElMenuMap = reactive({

    });

    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta !== null || meta !== undefined) {
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
      }
      return path;
    });
    const routes = computed(() => store.state.permission.routes);

    const menuActiveTextColor = computed(() =>
      // if (store.state.settings.sidebarTextTheme) {
      //   return store.state.settings.theme
      // } else {
      //   return variables.menuActiveText
      // }
      variables.menuActiveText);

    return {
      ...toRefs(ElMenuMap),
      isCollapse,
      activeMenu,
      variables,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
