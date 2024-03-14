<script setup lang="ts">
import { useRouter } from 'vue-router';
import IMAGE_404 from '@/assets/images/404.png';

const router = useRouter();
const goHome = () => {
  router.replace('/');
}
</script>

<template>
  <van-empty :image="IMAGE_404" description="抱歉，您访问的内容不存在～">
    <van-button type="primary" @click="goHome">去首页</van-button>
  </van-empty>
</template>
