<script setup lang="ts">
import { getInt, getDecimal } from '@/utils/format'
import type { PropType } from 'vue';

const props = defineProps({
  item: { type: Object as PropType<Recordable>, default: () => { } },
})

</script>

<template>
  <div>
    <div class="flex text-sm py-1">
      <div class="flex-1">商品金额</div>
      <div>￥153.10</div>
    </div>
    <div class="flex text-sm py-1">
      <div class="flex-1">运费（总重:5.340kg）</div>
      <div>￥0.00</div>
    </div>
    <div class="flex text-sm py-1 pb-3">
      <div class="flex-1">优惠券</div>
      <div class="red-pay">-￥5.00</div>
    </div>
    <div class="text-sm flex justify-end items-end border-t border-b-0 border-x-0  border-solid border-gray-100 pt-2">
      <div>合计：</div>
      <div>
        <span class="red-pay">￥<span class="text-base">144</span>.00</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>