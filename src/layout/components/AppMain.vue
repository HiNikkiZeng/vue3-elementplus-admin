<template>
  <section class="app-main">
    <!--about v-slot :   https://next.router.vuejs.org/api/index.html#route -->
    <router-view v-slot="{Component,route}" >
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
      </transition>
    </router-view>
  </section>
</template>

<script>

export default ({ name: 'AppMain' });
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

</style>
