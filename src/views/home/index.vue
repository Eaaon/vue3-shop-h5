<script setup lang="ts">
import { ref, toRefs, reactive, onMounted } from 'vue'
import { showToast } from 'vant';

onMounted(() => {
  console.log('onMounted')
})

const state = reactive({
  count: 0,
  keywords: '',
  bannerList: [
    'https://m11.360buyimg.com/babel/jfs/t1/238683/14/2822/304456/65a676d5F03d67e6b/33214ed93cd50467.png.webp',
    'https://m.360buyimg.com/babel/jfs/t1/119823/7/42345/73537/65a7ca46Ffed71f8c/0730abe67949b5cc.png!q70.dpg'
  ],
  boxList: [
    {
      children: [
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/152946/21/39830/34468/65b256beF57cd4575/5a27dfaac8c02e4c.png!q70.dpg',
          text: '水果蔬菜'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/206862/33/39237/33049/65b256c6F8e2a1eb4/ef4d4f10d69ab67e.png!q70.dpg',
          text: '肉禽海产'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92734/17/37972/33873/65b256ceFe0e79ffa/095731933836ccce.png!q70.dpg',
          text: '粮油调味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/111287/38/46922/33049/65b256d5F01d2ccc3/efce29f775fa5156.png!q70.dpg',
          text: '乳品烘焙'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/249602/19/3956/33960/65b256ddFbe76ebee/07c4e84322e0fa3c.png!q70.dpg',
          text: '休闲零食'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/152946/21/39830/34468/65b256beF57cd4575/5a27dfaac8c02e4c.png!q70.dpg',
          text: '水果蔬菜'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/206862/33/39237/33049/65b256c6F8e2a1eb4/ef4d4f10d69ab67e.png!q70.dpg',
          text: '肉禽海产'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92734/17/37972/33873/65b256ceFe0e79ffa/095731933836ccce.png!q70.dpg',
          text: '粮油调味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/111287/38/46922/33049/65b256d5F01d2ccc3/efce29f775fa5156.png!q70.dpg',
          text: '乳品烘焙'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/249602/19/3956/33960/65b256ddFbe76ebee/07c4e84322e0fa3c.png!q70.dpg',
          text: '休闲零食'
        }
      ]
    },
    {
      children: [
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/152946/21/39830/34468/65b256beF57cd4575/5a27dfaac8c02e4c.png!q70.dpg',
          text: '水果蔬菜'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/206862/33/39237/33049/65b256c6F8e2a1eb4/ef4d4f10d69ab67e.png!q70.dpg',
          text: '肉禽海产'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92734/17/37972/33873/65b256ceFe0e79ffa/095731933836ccce.png!q70.dpg',
          text: '粮油调味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/111287/38/46922/33049/65b256d5F01d2ccc3/efce29f775fa5156.png!q70.dpg',
          text: '乳品烘焙'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/249602/19/3956/33960/65b256ddFbe76ebee/07c4e84322e0fa3c.png!q70.dpg',
          text: '休闲零食'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/152946/21/39830/34468/65b256beF57cd4575/5a27dfaac8c02e4c.png!q70.dpg',
          text: '水果蔬菜'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/206862/33/39237/33049/65b256c6F8e2a1eb4/ef4d4f10d69ab67e.png!q70.dpg',
          text: '肉禽海产'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92734/17/37972/33873/65b256ceFe0e79ffa/095731933836ccce.png!q70.dpg',
          text: '粮油调味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/111287/38/46922/33049/65b256d5F01d2ccc3/efce29f775fa5156.png!q70.dpg',
          text: '乳品烘焙'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/249602/19/3956/33960/65b256ddFbe76ebee/07c4e84322e0fa3c.png!q70.dpg',
          text: '休闲零食'
        }
      ]
    }
  ]
})

const increment = () => {
  state.count++
}

const onSwipeChange = (index: number) => {
  // showToast('当前 Swipe 索引：' + index)
}

const { count, keywords, bannerList, boxList } = toRefs(state)

</script>

<template>
  <van-sticky>
    <van-search v-model="keywords" shape="round" background="#f54837" placeholder="请输入搜索关键词" />
  </van-sticky>
  <van-swipe :autoplay="3000" indicator-color="#fff" class="swiper keep-px-swiper" lazy-render @change="onSwipeChange">
    <van-swipe-item v-for="(image, index) in bannerList" :key="index" class="swiper-item">
      <van-image width="100%" height="100%" fit="cover" :src="image" />
    </van-swipe-item>
  </van-swipe>
  <van-swipe :autoplay="3000" lazy-render :show-indicators="false" @change="onSwipeChange">
    <van-swipe-item v-for="(swipe, index) in boxList" :key="index" class="swiper-item">
      <div class="flex flex-wrap">
        <div class="w-1/5 text-center" v-for="(box, index) in swipe.children" :key="index" >
          <div>
            <van-image width="70%" height="100%" fit="cover" :src="box.icon" />
          </div>
          <div class="text-xs">{{ box.text }}</div>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<style lang="scss" scoped>
.keep-px-swiper {
  max-height: 220px;
}

.swiper {
  width: 100%;
  height: 175px;
  margin-bottom: 4px;

  &-item,
  &-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>