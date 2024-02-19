<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

const videoRef = ref('')

const onClickLeft = () => history.back()
onMounted(() => {
  const player = videojs(videoRef.value, { autoplay: true })
  player.src('https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4')
  player.on("ended", () => { })
})

</script>

<template>
  <div class="h-screen bg-black">
    <van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft" />
    <video class="video-js" ref="videoRef" id="playerId"></video>
  </div>
</template>

<style lang="scss" scoped>

.video-js {
  width: 100%;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>