<script lang="ts">
import { computed, defineComponent, ref, unref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/store/modules/app'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const appStore = useAppStore();

    const active = ref('/home');
    const tabBar = computed(() => appStore.getTabBar);
    const tabList = computed(() => unref(tabBar).list);

    watchEffect(() => {
      active.value = route.path;
    });

    const onTabClicked = (index) => {
      const { pagePath } = unref(tabList)[index];

      router.replace({
        path: pagePath,
      });
    }

    return {
      active,
      tabList,
      onTabClicked,
    };
  },
});
</script>

<template>
  <div class="tabbar-wrap">
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item v-for="(item, index) in tabList" :key="index" :name="item.pagePath" @click="onTabClicked(index)">
        <template #icon>
          <van-icon :name="item.icon" />
        </template>
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-wrap {
  height: calc(50px + var(--safe-area-height-bottom));
}

.tabbar {
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);

  :deep(.van-tabbar-item--active) {
    // color: var(--color-primary);

    .van-icon {
      animation: scale-icon 0.3s ease-in-out;
    }
  }

  @keyframes scale-icon {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }
}
</style>
