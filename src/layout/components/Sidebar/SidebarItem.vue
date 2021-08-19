<template>
  <div v-if="!item.hidden">
     <template v-if="hasOneShowingChild(item.children,item) &&
      (!onlyOneChild.children||onlyOneChild.noShowingChildren)
      &&!item.alwaysShow"
      >
      <SidebarItemLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
          <el-menu-item :index="resolvePath(onlyOneChild.path)">
            <span >{{onlyOneChild.meta.title}}</span>
          </el-menu-item>
      </SidebarItemLink>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)" >
      <template #title>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
      </template>

      <template v-if="item.children">
        <SidebarItem
          v-for="child in item.children"
          :key="child.path"
          :item='child'
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
    </template>
    </el-submenu>
  </div>
</template>

<script >
import path from 'path';
import { reactive, toRefs } from 'vue';
import { isExternal } from '@/utils/validate';
import SidebarItemLink from './SidebarItemLink.vue';

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  components: {
    SidebarItemLink,
  },
  setup(props) {
    const dataMap = reactive({
      onlyOneChild: null,
      hasOneShowingChild(children = [], parent) {
        const showingChildren = children.filter((item) => {
          if (item.hidden) {
            return false;
          }
          dataMap.onlyOneChild = item;
          return true;
        });

        if (showingChildren.length === 1) {
          return true;
        }

        if (showingChildren.length === 0) {
          dataMap.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
          return true;
        }

        return false;
      },

      resolvePath(routePath) {
        // console.log(routePath,"rou")
        if (isExternal(routePath)) {
          return routePath;
        }
        if (isExternal(props.basePath)) {
          return props.basePath;
        }
        return path.resolve(props.basePath, routePath);
      },
    });

    return {
      ...toRefs(dataMap),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
