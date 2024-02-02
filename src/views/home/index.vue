<script setup lang="ts">
import { ref, toRefs, reactive, onMounted, nextTick, onBeforeUnmount } from 'vue'
import BScroll from '@better-scroll/core'
import { showToast } from 'vant';

onMounted(() => {
  nextTick(() => {
    bs = new BScroll(bscroll.value, { scrollX: true })
  })
})

onBeforeUnmount(() => {
  bs.destroy()
})

const bscroll = ref()
let bs = ref(null)

const state = reactive({
  keywords: '',
  bannerList: [
    'https://m11.360buyimg.com/babel/jfs/t1/238683/14/2822/304456/65a676d5F03d67e6b/33214ed93cd50467.png.webp',
    'https://m.360buyimg.com/babel/jfs/t1/119823/7/42345/73537/65a7ca46Ffed71f8c/0730abe67949b5cc.png!q70.dpg'
  ],
  boxList: [
    {
      children: [
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/195046/27/40870/52606/65718cbeF257c9ca5/7a8e148b87d431f2.png!q70.dpg',
          text: '水果蔬菜'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/234201/24/191/42222/6530a49bFa78ed129/b6593a4d32e6c64e.png!q70.dpg',
          text: '肉禽海产'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92222/35/29653/12065/64c0d157F64ab2f35/7c251e5928cdfc3c.png!q70.dpg',
          text: '粮油调味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/173362/24/37066/10472/64c0d18cFe25ffa45/d8f50641146a1c79.png!q70.dpg',
          text: '乳品烘焙'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/102604/40/42764/11153/64c0d1b8Fc55367f8/d6df0d733fe57296.png!q70.dpg',
          text: '休闲零食'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/92683/16/42522/6556/64c0d29eF19db3778/520eda4a295d07dc.png!q70.dpg',
          text: '小时达'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/191850/40/35432/12381/64c0d1cbFd72754be/452712368d262ad2.png!q70.dpg',
          text: '中外美酒'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/156309/37/40035/10780/65b8acb5F63b9e77d/ee94a22dfdbd47fd.png!q70.dpg',
          text: '水饮冲调'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/207954/18/33347/35520/64faf88eFe7657688/d3cabdf2593e6f9c.png!q70.dpg',
          text: '母婴育儿'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/170000/10/38740/8783/64c0d1f2Fc8076f28/36020a084e2827fe.png!q70.dpg',
          text: '纸品清洁'
        }
      ]
    },
    {
      children: [
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/248731/4/2588/14291/659cdbbbFf527388b/a92c08b7b7ae8ce5.png!q70.dpg',
          text: '买年货'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/230548/33/5060/41016/6566a43fFc0fdd29a/5b21235ce67c4c3e.png!q70.dpg',
          text: '家乡好味'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/164012/6/38980/10361/64c0d0acF100199ba/3585c7b7c93b5f1b.png!q70.dpg',
          text: '贵州茅台'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/95933/11/37990/58979/6555cf1aF020e817a/53d6100aeebe6c78.png!q70.dpg',
          text: '菜肴面点'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/176848/14/38396/17985/65098444F09b49477/c075c5310fd0c715.png!q70.dpg',
          text: '火锅'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/216159/33/32703/9426/64c0d1e5Fe88660f0/e7d23b4850e89a0c.png!q70.dpg',
          text: '个人护理'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/186216/14/35704/11801/64c0d171Fa9d85f3f/da2d1961f7aaf2b6.png!q70.dpg',
          text: '方便速食'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/207788/23/33272/10658/650965ccFeb1396eb/208662f4c2418820.png!q70.dpg',
          text: '宠物生活'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/134025/22/35128/14912/64c0d20dFb451bb82/4055188c61709aa3.png!q70.dpg',
          text: '潮流玩具'
        },
        {
          icon: 'https://m.360buyimg.com/babel/jfs/t1/177658/6/38589/19255/650cefc4Fc129246e/41ec9632254b018f.png!q70.dpg',
          text: '山姆会员店'
        }
      ]
    }
  ]
})

const onSwipeChange = (index: number) => {
  // showToast('当前 Swipe 索引：' + index);
}

const onBox = (index: number) => {
  showToast('当前 Box 索引：' + index);
}

const { keywords, bannerList, boxList } = toRefs(state)

</script>

<template>
  <van-sticky>
    <van-search v-model="keywords" shape="round" background="#f54837" placeholder="请输入搜索关键词" />
  </van-sticky>
  <van-swipe :autoplay="3000" indicator-color="#fff" class="swiper-wrapper keep-px-swiper w-full" lazy-render
    @change="onSwipeChange">
    <van-swipe-item v-for="(image, index) in bannerList" :key="index">
      <van-image width="100%" height="100%" fit="cover" :src="image" />
    </van-swipe-item>
  </van-swipe>
  <div class="scroll-wrapper overflow-hidden whitespace-nowrap" ref="bscroll">
    <div class="inline-block">
      <div class="inline-block keep-px-width w-375" v-for="(boxs, index) in boxList" :key="index">
        <div class="flex flex-wrap w-full">
          <div class="text-center mt-2 w-1/5" v-for="(box, j) in boxs.children" :key="j" @click="onBox(j)">
            <div>
              <van-image width="70%" height="100%" fit="cover" :src="box.icon" />
            </div>
            <div class="text-xs">{{ box.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keep-px-swiper {
  max-height: 220px;
}

.swiper-wrapper {
  height: 175px;
}
</style>