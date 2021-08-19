<!-- sidebar 入口-->
<template>
  <div class="sidebar-container">
    <SidebarLogo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :uniqueOpened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in menus"
          :key="route.path"
          :item ="route"
          :base-path="route.path"
          class="nest-menu"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script >
import { reactive, toRefs, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';

import variables from '@/styles/variables.scss';
import SidebarLogo from './SidebarLogo.vue';
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Siderbar',
  components: {
    SidebarLogo,
    SidebarItem,
  },

  setup() {
    const route = useRoute();
    const dataMap = reactive({

    });

    const menus = computed(() => store.state.routes.menus);

    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta !== null || meta !== undefined) {
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
      }
      return path;
    });

    return {
      ...toRefs(dataMap),
      variables,
      menus,
      activeMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container{
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: $menuBg;
  .scrollbar-wrapper{
    overflow-x: hidden !important;
  }

}

</style>

<style lang="scss" scoped>
// element style
.el-scrollbar { height: 100%}
.el-menu{
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
