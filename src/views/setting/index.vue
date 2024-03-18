<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <van-cell title="账户与安全" value="密码/实名认证等管理" size="large" is-link />
  <van-cell title="支付密码" value="待设置" size="large" is-link />
  <van-cell title="收货地址管理" value="管理我的地址" size="large" is-link />
  <van-cell title="关于" value="版本号v1.0.1" size="large" is-link />
  <div class="text-center mt-6">
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="w-4/5">
      退出登录
    </van-button>
  </div>

</template>

<style lang="scss" scoped></style>