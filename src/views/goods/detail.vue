<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import { routerKey, useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const tabActive = ref(0)

interface Employee {
  goodsId: string | number;
  id: string | number;
  pic: string;
  userId: string | number;
  videoUrl: string | number;
}

onMounted(() => {
  const id = route.query.id
  state.picList = [
    {
      goodsId: 155197,
      id: 5888374,
      pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/180427/1/42133/74788/65530c18Fdc847235/5e44387898120cd8.jpg!q80.dpg.webp",
      userId: 1605,
      videoUrl: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4'
    },
    {
      goodsId: 155194,
      id: 5888375,
      pic: "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/218436/40/33697/64947/6492c9fdF95559b0c/13f05afbd657affe.jpg!q70.dpg.webp",
      userId: 1605,
      videoUrl: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4'
    },
    {
      goodsId: 155194,
      id: 5888375,
      pic: "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/140454/29/39035/72888/6492c9fdF05c6894b/5af0d548cecc0d2b.jpg!q70.dpg.webp",
      userId: 1605,
      videoUrl: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4'
    }]
})

const state = reactive({
  picList: [] as Employee[]
})

const onPlay = () => {
  router.push({ path: '/video', query: { url: '' } });
  // window.location.href = 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4'
}

const { picList } = toRefs(state)

</script>

<template>
  <div class="bg-white relative">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-if="picList.length" v-for="item in picList" :key="item.id" class="swiper-item">
        <van-image class="swiper-item-img" fit="contain" :src="item.pic" alt="" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator text-white">
          <span class="text-sm">{{ active + 1 }}</span>/{{ total }}
        </div>
      </template>
    </van-swipe>
    <div class="video_play w-14 h-14 z-10" id="videoUrl" @click="onPlay"></div>
  </div>
  <div class="bg-white px-4 overflow-hidden rounded-b-xl">
    <div class="price_wrap red-price text-xs mt-3">
      <span class="mr-1">到手价</span>¥
      <span class="text-3xl font-bold">32</span>
      <span class="text-lg">.01</span>
    </div>
    <div class="py-3">
      <i class="mod_tag h-3.5 inline-block">
        <img class="h-full"
          src="https://img12.360buyimg.com/img/s48x26_jfs/t1/134936/19/4552/1458/5f0fd238E688140ef/dc3f7acfff4a1ee7.png">
      </i>
      立白全自动超浓缩大桶装洗衣粉1.8kg低泡易漂不伤手 工厂酒店清洁
    </div>
  </div>

  <div class="mt-2">
    <van-cell value="好评度 98%" :border="false" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="mr-2 font-bold">评价</span>
        <span>50万+</span>
      </template>
    </van-cell>
    <div class="bg-white px-4 ">
      <div class="leading-6 flex items-center justify-between">
        <div>
          <img class="h-5 w-5 rounded-full align-middle"
            src="https://storage.360buyimg.com/i.imageUpload/6a645f565263595356587550547a4931373035353431303932363134_sma.jpg">
          <span class="ml-1 inline-block text-xs">j***I</span>
        </div>
        <div class="text-xs text-gray-500">2024-02-02</div>
      </div>
      <div class="py-3 text-sm text-gray-600">
        洗衣粉很好，去污能力强，洗衣粉采用无磷配方，柔顺不伤手，洗完还有淡淡的清香，慢慢的一大袋很划算，估计能用了2到3个月，赞
      </div>
    </div>
  </div>

  <div class="mt-2">
    <van-tabs v-model:active="tabActive" animated>
      <van-tab v-for="index in 4" :title="'选项 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 20px;
  background: rgba(0, 0, 0, .2);
  font-size: 9px;
  border-radius: 10px 0 0 10px;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
}

.video_play {
  background: url(https://img12.360buyimg.com/img/s120x120_jfs/t1/145538/37/19396/31998/5fe00397Ea8725e26/16412ffa5694eda7.png) no-repeat;
  background-size: cover;
  border-radius: 50%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>