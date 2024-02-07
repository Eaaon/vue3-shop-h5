<script setup lang="ts">
import { ref } from 'vue';

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  console.log('ss')
  for (let i = 0; i < 20; i++) {
    list.value.push(list.value.length + 1);
  }

  // 加载状态结束
  loading.value = false;

  // 数据全部加载完成
  if (list.value.length >= 40) {
    finished.value = true;
    loading.value = true;
  }
};

</script>

<template>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</template>