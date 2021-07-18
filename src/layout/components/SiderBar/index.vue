<template>
  <div>
      <SidebarLogo :collapse="isCollapse" />
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
         <SidebarItem/>

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
import SidebarLogo from './SidebarLogo.vue';

export default defineComponent({
  components: {
    SidebarItem,
    SidebarLogo,
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

    return {
      ...toRefs(ElMenuMap),
      isCollapse,
      activeMenu,
      variables,
    };
  },
});
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
