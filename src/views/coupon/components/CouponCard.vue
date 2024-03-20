<script setup lang="ts">
import { getInt, getDecimal } from '@/utils/format'
import type { PropType } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  item: { type: Object as PropType<Recordable>, default: () => { } },
})

let flag = ref(false)

</script>

<template>
  <div class="container">
    <div class="card rounded bg-white relative mx-3 mb-3" :class="{ 'gray': item.available }">
      <div class="right-tag" :class="{ 'tag-used': item.available == 1, 'tag-expired': item.available == 2 }"></div>
      <div class="flex">
        <div class="card-price flex flex-col justify-center items-center"
          :class="[!item.available ? 'text-light-green' : 'text-light-gray']">
          <div>
            <span class="text-sm">¥</span>
            <span class="text-4xl font-bold">{{ item.value }}</span>
          </div>
          <div class="text-xs">{{ item.condition }}</div>
        </div>
        <div class="flex-1 overflow-hidden pt-4 text-xs pr-2 z-10">
          <div class="h-10">
            <span class="coupon-tag" :class="{ 'gray': item.available }">{{ item.tag }}</span>
            <span class="text-gray ml-1 leading-relaxed">{{ item.description }}</span>
          </div>
          <div class="flex items-end justify-between py-2 h-6">
            <div class="text-xxs text-light-gray">{{ item.expiredTime }}</div>
            <van-button type="success" size="mini" color="#53c7ca" v-if="!item.available">去使用</van-button>
          </div>
          <div
            class="flex items-center justify-between border-gray-200 border-t border-x-0 border-b-0 border-dashed py-2"
            @click="flag = !flag">
            <div class="text-light-gray text-xs">
              详细信息
            </div>
            <van-icon name="arrow-down" :class="{ 'arrow-right': !flag, 'arrow-down': flag }" />
          </div>
        </div>
      </div>
      <div class="text-xs p-3 text-light-gray border-gray-100 border-t border-x-0 border-b-0 border-solid"
        v-show="flag">
        <div v-if="item.useDescription">使用说明：{{ item.useDescription }}</div>
        <div v-if="item.discountDescription">折扣说明：{{ item.discountDescription }}</div>
        <div v-if="item.couponNo">券编码：{{ item.couponNo }}</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
$greenColor: #53c7ca;
$grayColor: #999999;

.card {
  border-top: 4px solid $greenColor;
  box-shadow: 0 0 0.15rem 0 rgba(0, 0, 0, .1);

  &.gray {
    border-top: 4px solid $grayColor;
  }

  .right-tag {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 44px;
  }

  .tag-expired {
    background: url('@/assets/images/tag_expired.png') no-repeat;
    background-size: 100% 100%;
  }

  .tag-used {
    background: url('@/assets/images/tag_used.png') no-repeat;
    background-size: 100% 100%;
  }

  .card-price {
    width: 128px;
  }

  .coupon-tag {
    display: inline-block;
    border-color: $greenColor;
    background-color: $greenColor;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
    color: #fff;
    text-indent: 6px;
    padding: 1px 5px;
    border-radius: 0 2px 2px 0;
    background-size: 6px 14.2px;
    background-repeat: no-repeat;
    background-image: url('@/assets/images/tag_coupon.png');

    &.gray {
      border-color: $grayColor;
      background-color: $grayColor;
    }
  }

  .van-button {
    height: auto;
    padding: 3px 10px;
    border-radius: 20px;
  }

  .arrow-right {
    transition: 0.2s;
    transform-origin: center;
    transform: rotateZ(0);
  }

  .arrow-down {
    transition: 0.2s;
    transform-origin: center;
    transform: rotateZ(180deg);
  }
}
</style>