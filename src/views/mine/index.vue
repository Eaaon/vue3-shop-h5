<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import Tabbar from '@/components/Tabbar/index.vue'
import avatar from '@/assets/images/avatar_default.png';

const state = reactive({
  userInfo: {
    avatarUrl: '',
    name: 'Colin'
  }
})

const { userInfo } = toRefs(state)

</script>

<template>
  <div class="container">
    <header class="flex items-center">
      <van-image width="50" height="50" round fit="cover" :src="userInfo.avatarUrl || avatar" alt="" />
      <div class="text-gray pl-3 pr-2">{{ userInfo.name }}</div>
      <van-icon name="arrow" color="#999" size="14"/>
    </header>
  </div>
  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
.container{
  background: filter(url('https://s.cn.bing.net/th?id=OHR.BrightonBoxes_ZH-CN0947219018_1920x1080.webp&qlt=50'),blur(5px));
  background-size: cover;
  width: 100%;
  height: 200px;
  // filter: blur(2px);
  // z-index: -1;
}

// .container::before{
//   content: '';
//   position: absolute;
//   width: 100%;
//   height: 200px;
//   filter: blur(2px);
// }

</style>