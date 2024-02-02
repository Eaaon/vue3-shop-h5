<template>
  <van-config-provider :theme="themes" theme-vars-scope="global">
    <router-view />
    <!-- <van-floating-bubble axis="xy" icon="chat" magnetic="x" @click="changeTheme" />
    <van-button type="primary">主要按钮</van-button> -->
  </van-config-provider>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, toRefs } from 'vue'

const themes = ref('light')
// const changeTheme = () => {
//   themes.value = themes.value == 'dark' ? 'light' : 'dark'
// }

onMounted(() => {
})
</script>

<style>
.van-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
</style>