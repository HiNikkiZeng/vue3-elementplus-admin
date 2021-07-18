<template>
<!-- -->
  <div>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      <el-submenu index="1-3">
        <template #title>选项3</template>
        <el-menu-item index="1-3-1">选项3-1</el-menu-item>
      </el-submenu>
    </el-submenu>

  </div>
</template>

<script>

export default ({
  name: 'SidebarItem',

  setup() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>

</style>
