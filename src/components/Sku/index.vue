<script lang="ts">
import { computed, defineComponent, ref, unref, watchEffect } from 'vue';

export default defineComponent({
  name: 'Sku',
  emits: ["update:show"],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    let close = () => {
      context.emit("update:show", false)
    }
    return {
      close
    }
  },
});
</script>

<template>
  <van-popup :show="show" round closeable position="bottom" :style="{ height: '80%' }" @update:show="close">
    ss
  </van-popup>
</template>

<style lang="scss" scoped></style>
