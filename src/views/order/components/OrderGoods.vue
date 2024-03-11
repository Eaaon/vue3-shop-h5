<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'OrderGoods',
  props: {
  },
  setup(props, context) {
    const state = reactive({
      list: [
        {
          id:'11',
          title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
          subTitle: '适配S1P灰电动牙刷 3支',
          url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
          price: '39',
          count: 1,
          weight: '0.2244kg',
          express: '快递运输',
          time: '预计3月13日24:00前发货'
        }
      ]
    })
    return {
      state,
    }
  }
});
</script>

<template>
  <div v-for="item of state.list" key="item.id">
    <div class="flex py-4">
      <div>
        <van-image width="92px" height="92px" fit="contain" radius="8" :src="item.url" alt="" />
      </div>
      <div class="truncate ml-3">
        <div class="truncate w-full text-sm">{{ item.title }}</div>
        <div class="truncate w-full text-xs text-gray-600">{{ item.subTitle }}</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped></style>