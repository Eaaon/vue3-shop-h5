<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue';

interface Employee {
  goodsId: string | number;
  id: string | number;
  pic: string;
  userId: string | number;
}

onMounted(() => {
  state.picList = [{
    goodsId: 155197,
    id: 5888374,
    pic: "https://dcdn.it120.cc/2019/07/23/3140ac2f-7311-475d-840b-d4dd2ec59a54.jpg",
    userId: 1605
  }]
})

const state = reactive({
  picList: [] as Employee[]
})


const { picList } = toRefs(state)

</script>

<template>
  <div class="container">
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-if="picList.length" v-for="item in picList" :key="item.id" class="swiper-item">
        <van-image class="swiper-item-img" fit="contain" :src="item.pic" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped></style>