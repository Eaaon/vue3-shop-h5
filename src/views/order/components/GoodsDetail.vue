<script setup lang="ts">
import { getInt, getDecimal } from '@/utils/format'
import type { PropType } from 'vue';

const props = defineProps({
  list: { type: Array as PropType<Recordable[]>, default: () => [] },
})

</script>

<template>
  <div class="flex py-2" :class="{'border-b border-t-0 border-x-0 border-solid border-gray-300': i+1!=props.list.length}" v-for="(item,i) of props.list" key="item.id">
    <div>
      <van-image width="92px" height="92px" fit="contain" radius="8" :src="item.url" alt="" />
    </div>
    <div class="truncate ml-3">
      <div class="truncate w-full text-sm">{{ item.title }}</div>
      <div class="truncate w-full text-xs text-gray-400 mt-1">{{ item.subTitle }}</div>
      <div class="flex items-center my-1">
        <div class="red-price text-xs flex-1">
          ￥<span class="text-base">{{ getInt(item.price) }}</span>.{{ getDecimal(item.price) }}
        </div>
        <div class="text-xs text-gray-400">
          <span>{{ item.weight }}</span>
          <span>×</span>
          <span>{{ item.count }}</span>
        </div>
      </div>
      <div>
        <van-tag plain type="danger">支持7天无理由退货</van-tag>
        <van-tag plain type="danger" class="ml-1">30天价保</van-tag>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>