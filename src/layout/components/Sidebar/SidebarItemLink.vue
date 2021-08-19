<template>
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot/>
  </a>
  <div v-else @click="navigateTo">
    <slot/>
  </div>

</template>

<script >
import { isExternal } from '@/utils/validate';
import { useRouter } from 'vue-router';

export default {
  name: 'SidebarItemLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const navigateTo = () => {
      router.push(props.to).catch((err) => {
        console.log(err);
      });
    };
    return {
      isExternal,
      navigateTo,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
