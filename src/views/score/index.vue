<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'

const state = reactive({
  score: '111',
  list: [{
    data: '今天',
    isSign: true
  },
  {
    data: '第二天',
    isSign: true
  },
  {
    data: '第三天',
    isSign: true
  },
  {
    data: '第四天',
    isSign: true
  },
  {
    data: '第五天',
    isSign: true
  },
  {
    data: '第六天',
    isSign: true
  },
  {
    data: '第七天',
    isSign: true
  }]
})

const { list, score } = toRefs(state)


</script>

<template>
  <div class="container">
    <section class="text-center py-4">
      <div class="text-white text-sm">积分数</div>
      <div class="text-white text-6xl">{{ score }}</div>
    </section>
    <section class="bg-white p-3 mx-3 rounded-xl">
      <div>载签到2天可获惊喜礼包</div>
      <div class="flex my-4">
        <div class="flex text-center" v-for="(item, i) of list" :key="i">
          <div>
            <div class="score-circle">
              <van-icon name="success" color="#16a34a" />
            </div>
            <div class="mt-1 text-xs text-light-gray">{{ item.data }}</div>
          </div>
          <div class="line" v-if="i != list.length - 1"></div>
        </div>
      </div>
      <van-button round type="success" class="w-full">签到</van-button>
    </section>
  </div>
  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
$greenColor: #4ade80;

.container {
  background: url('@/assets/images/header_bg.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 142px;

  .score-circle {
    border: 1px solid $greenColor;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .line {
    background-color: #bbf7d0;
    width: 10px;
    height: 1px;
    margin-top: 17px;
  }
}
</style>