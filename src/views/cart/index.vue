<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import Tabbar from '@/components/Tabbar/index.vue'
import { getInt, getDecimal } from '@/utils/format'

const router = useRouter();

const state = reactive({
  selectedAll: false,
  list: [{
    selected: false,
    pic: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/24500/4/17620/200352/62b05f6fEe65ff379/943363be7490d858.jpg!q70.dpg.webp',
    name: '威露士衣物消毒液除菌剂除菌液 柠檬清新750ml',
    price: '11.12',
    discountPrice: '10.11',
    count: 1
  }, {
    selected: false,
    pic: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/24500/4/17620/200352/62b05f6fEe65ff379/943363be7490d858.jpg!q70.dpg.webp',
    name: '威露士衣物消毒液除菌剂除菌液 柠檬清新750ml',
    price: '11.12',
    discountPrice: '10.11',
    count: 1
  }, {
    selected: false,
    pic: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/24500/4/17620/200352/62b05f6fEe65ff379/943363be7490d858.jpg!q70.dpg.webp',
    name: '威露士衣物消毒液除菌剂除菌液 柠檬清新750ml',
    price: '11.12',
    discountPrice: '10.11',
    count: 1
  }, {
    selected: false,
    pic: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/24500/4/17620/200352/62b05f6fEe65ff379/943363be7490d858.jpg!q70.dpg.webp',
    name: '威露士衣物消毒液除菌剂除菌液 柠檬清新750ml',
    price: '11.12',
    discountPrice: '10.11',
    count: 1
  }, {
    selected: false,
    pic: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/24500/4/17620/200352/62b05f6fEe65ff379/943363be7490d858.jpg!q70.dpg.webp',
    name: '威露士衣物消毒液除菌剂除菌液 柠檬清新750ml',
    price: '11.12',
    discountPrice: '10.11',
    count: 1
  }]
})

const { selectedAll, list } = toRefs(state)

const onSubmit = () => {
  router.push({ path: '/order/submit', query: { id: '1' } });
}

</script>

<template>
  <header class="bg-white mb-2 p-3">
    <div class="text-sm">编辑商品</div>
  </header>
  <main class="product-main">
    <div class="bg-white mb-2 flex items-center px-3 py-5" v-for="(item, i) of list" :key="i">
      <van-checkbox v-model="item.selected" class="pr-3"></van-checkbox>
      <div class="flex">
        <van-image radius="10" width="100" height="100" fit="cover" :src="item.pic" alt="" />
        <div class="flex-1 pl-3">
          <div class="text-sm pt-1">{{ item.name }}</div>
          <div class="flex justify-between items-end pt-2">
            <div>
              <div class="text-xs red-price">￥
                <span class="text-base">{{ getInt(item.price) }}</span>
                <span>.{{ getDecimal(item.price) }} 到手价</span>
              </div>
              <div class="text-xs red-price">￥{{ item.price }}</div>
            </div>
            <van-stepper v-model="item.count" integer max="99" input-width="26px" button-size="14px" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit">
    <van-checkbox v-model="selectedAll">全选</van-checkbox>
  </van-submit-bar>
  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
.product-main{
  height: calc(100vh - 160px);
  overflow-y: auto;
}
.van-submit-bar {
  bottom: 50px;
}
</style>