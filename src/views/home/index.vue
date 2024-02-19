<script setup lang="ts">
import { ref, toRefs, reactive, onMounted, nextTick, onBeforeUnmount } from 'vue'
import BScroll from '@better-scroll/core'
import { showToast } from 'vant';
import addIcon from '@/assets/icons/cart_add_icon.png'
import { getInt, getDecimal } from '@/utils/format'
import { useRouter } from 'vue-router';
import Tabbar from '@/components/Tabbar/index.vue'

onMounted(() => {
  nextTick(() => {
    bs = new BScroll(bscroll.value, { scrollX: true })
  })
})

onBeforeUnmount(() => {
  bs.destroy()
})

const router = useRouter();
const bscroll = ref()
let bs = ref(null)

const state = reactive({
  keywords: '',
  bannerList: [
    {
      id: 200401,
      linkUrl: "https://baidu.com",
      picUrl: 'https://m11.360buyimg.com/babel/jfs/t1/238683/14/2822/304456/65a676d5F03d67e6b/33214ed93cd50467.png.webp',
      title: "首页Banner1"
    },
    {
      id: 200402,
      linkUrl: "https://gitee.com/joeshu/v-shop",
      picUrl: 'https://m.360buyimg.com/babel/jfs/t1/119823/7/42345/73537/65a7ca46Ffed71f8c/0730abe67949b5cc.png!q70.dpg',
      title: "首页Banner2"
    }
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
  ],
  productList: [{
    "styleType": 1001,
    "skuId": "100083907951",
    "name": "诺梵金松露巧克力年货礼盒新年大礼包500g",
    "image": "https://m.360buyimg.com/n1/jfs/t1/135882/35/41627/238563/65b8c051F13ddb240/29f92e76f3b86d19.jpg",
    "pPrice": "129",
    "shopId": 1000082422,
  },
  {
    "skuId": "100001492717",
    "name": "旺旺 仙贝 零食膨化食品饼干糕点  家庭装 400g",
    "shortName": "旺旺 仙贝 400g",
    "image": "https://m.360buyimg.com/n1/jfs/t1/138541/8/8121/83207/5f5b0c69Eda7d4a39/67c54c91a1c26563.jpg",
    "pPrice": "23.5",
    "shopId": 1000079565,
    "sellPoints": [
      "家庭装",
      "色泽金黄",
      "膨化零食"
    ],
  },
  {
    "skuId": "100084667520",
    "name": "茶颜悦色休闲膨化零食大礼包 薯条海苔办公室下午茶歇年货共10件",
    "shortName": "茶颜悦色休闲零食大礼包10件",
    "image": "https://m.360buyimg.com/n1/jfs/t1/242670/30/4280/162902/65b9971eF7fa85329/c1711c6e6065821a.png",
    "pPrice": "69.9",
    "shopId": 1000422408,
  },
  {
    "skuId": "1119955",
    "name": "立白全自动超浓缩大桶装洗衣粉1.8kg低泡易漂不伤手 工厂酒店清洁",
    "shortName": "立白超浓缩洗衣粉1.8kg桶装",
    "image": "https://m.360buyimg.com/n1/jfs/t1/164992/14/26061/103544/6162a91cEd27be522/4f23b7400a915eac.jpg",
    "pPrice": "37.9",
    "shopId": 1000001759,
  },
  {
    "skuId": "4947426",
    "name": "安佳(Anchor)新西兰进口 动物黄油淡味无盐454g 烘焙原料煎牛排曲奇",
    "shortName": "安佳 动物黄油原味无盐 454g/块",
    "image": "https://m.360buyimg.com/n1/jfs/t1/199781/1/13561/71508/616c9484E651be1c0/bccf7b85a23e8c34.jpg",
    "pPrice": "43.9",
    "shopId": 1000090721,
  },
  {
    "skuId": "100068434620",
    "name": "Classic Teddy精典泰迪童装儿童长袖T恤男童圆领上衣中大童时尚春装 杏黄 130 ",
    "image": "https://m.360buyimg.com/n1/jfs/t1/235045/18/13079/77389/65bdd110Faa503acc/eda729c9095a0379.jpg",
    "pPrice": "59.9",
    "shopId": 1000101604,
  },
  {
    "skuId": "100056320290",
    "name": "巴拉巴拉儿童秋衣上衣春秋保暖套装女童中大童甜美风206322169009",
    "shortName": "巴拉巴拉内衣彼得潘小仙女印花",
    "image": "https://m.360buyimg.com/n1/jfs/t1/111067/2/35597/17786/64a3cafaFd3a52451/419a4e353da78626.jpg",
    "pPrice": "169",
    "shopId": 1000007826,
  },
  {
    "skuId": "5151404",
    "name": "十月稻田 23年新米 五常稻香米 五常大米 5kg 东北大米",
    "shortName": "十月稻田 五常大米 5kg",
    "image": "https://m.360buyimg.com/n1/jfs/t1/239157/19/3782/235335/65bcd63fF3b201952/3efc11629208e6ee.jpg",
    "pPrice": "76",
    "shopId": 1000014142,
  },
  {
    "skuId": "100078093208",
    "name": "碧芭宝贝大鱼海棠pro拉拉裤XL码试用装4片(12-17kg)尿不湿体验装小包装",
    "shortName": "大鱼海棠pro拉拉裤XL码试用装4片",
    "image": "https://m.360buyimg.com/n1/jfs/t1/108828/40/48821/74089/65bb3ae1Fb12f0dd1/03dc26057d839361.jpg",
    "pPrice": "19.9",
    "shopId": 1000121162,
  },
  {
    "skuId": "100002193311",
    "name": "高洁丝（Kotex）臻选奢爽纯棉组合8包64片（240*26+150*20+280*12+420*6）卫生巾",
    "shortName": "高洁丝臻选卫生巾8包64片",
    "image": "https://m.360buyimg.com/n1/jfs/t1/241601/12/3904/573577/65ae3d5fF4db08269/8c4395506101fea4.png",
    "pPrice": "39.9",
    "shopId": 1000002396,
  }],
  loading: false,
  finished: false,
  list: [
    {
      "styleType": 1001,
      "skuId": "100083907951",
      "name": "诺梵金松露巧克力年货礼盒新年大礼包500g",
      "image": "https://m.360buyimg.com/n1/jfs/t1/135882/35/41627/238563/65b8c051F13ddb240/29f92e76f3b86d19.jpg",
      "pPrice": "129",
      "shopId": 1000082422,
    },
    {
      "skuId": "100001492717",
      "name": "旺旺 仙贝 零食膨化食品饼干糕点  家庭装 400g",
      "shortName": "旺旺 仙贝 400g",
      "image": "https://m.360buyimg.com/n1/jfs/t1/138541/8/8121/83207/5f5b0c69Eda7d4a39/67c54c91a1c26563.jpg",
      "pPrice": "23.5",
      "shopId": 1000079565,
      "sellPoints": [
        "家庭装",
        "色泽金黄",
        "膨化零食"
      ],
    },
  ]
})

const onSwipeChange = (index: number) => {
  // showToast('当前 Swipe 索引：' + index);
}

const onBox = (index: number) => {
  showToast('当前 Box 索引：' + index);
}

const onLoad = () => {
  console.log('ss')
  // state.productList = state.productList.concat(state.list)
  setTimeout(() => {
    state.productList = [...state.productList, ...state.productList]
    // 加载状态结束
    state.loading = true;
    // 数据全部加载完成
    if (state.productList.length >= 20) {
      state.finished = true;
    }
  }, 600);
}

const onGoods = (id: string) => {
  router.push({ path: '/goods/detail', query: { id } });
}

const { keywords, bannerList, boxList, productList, loading, finished, list } = toRefs(state)

</script>

<template>
  <van-sticky>
    <van-search v-model="keywords" shape="round" background="#f54837" placeholder="请输入搜索关键词" />
  </van-sticky>
  <van-swipe :autoplay="3000" indicator-color="#fff" class="swiper-wrapper keep-px-swiper w-full" lazy-render
    @change="onSwipeChange">
    <van-swipe-item v-for="item in bannerList" :key="item.id">
      <van-image width="100%" height="100%" fit="cover" :src="item.picUrl" :alt="item.title" />
    </van-swipe-item>
  </van-swipe>
  <div class="scroll-wrapper overflow-hidden whitespace-nowrap pb-2 bg-white" ref="bscroll">
    <div class="inline-block">
      <div class="inline-block" v-for="(boxs, index) in boxList" :key="index">
        <div class="flex flex-wrap w-375">
          <div class="text-center mt-2 w-1/5" v-for="(box, j) in boxs.children" :key="j" @click="onBox(j)">
            <div>
              <van-image width="70%" height="100%" fit="cover" :src="box.icon" />
            </div>
            <div class="text-xs break-words">{{ box.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="list m-2" v-masonry transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item bg-white mb-2.5 rounded-lg" v-for="item in productList" :key="item.skuId"
        @click="onGoods(item.skuId)">
        <van-image class="img-item" width="100%" height="100%" fit="cover" :src="item.image"></van-image>
        <main class="px-2">
          <div class="text-sm leading-4 break-words text-slate-800">{{ item.name }}</div>
          <div class="flex flex-wrap pt-2" v-if="item.sellPoints">
            <span class="text-gray-500 text-xs mr-1" v-for="(label, j) in item.sellPoints" :key="j">{{ label }}</span>
          </div>
          <div class="py-2 flex justify-between">
            <div class="price">
              <span class="text-xs">￥</span>
              <span>{{ getInt(item.pPrice) }}.</span>
              <span class="text-xs">{{ getDecimal(item.pPrice) }}</span>
            </div>
            <van-image width="24px" height="24px" fit="cover" :src="addIcon" />
          </div>
        </main>
      </div>
    </div>
  </van-list>
  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
.keep-px-swiper {
  max-height: 220px;
}

.swiper-wrapper {
  height: 175px;
}

.list {
  // width: 359px;
  margin-left: 3px;
}

.item {
  width: 177px;
  margin-left: 5px;
}

.price {
  color: #ff3710;
}
</style>

<style>
.img-item img {
  border-start-start-radius: 0.5rem;
  border-start-end-radius: 0.5rem;
}
</style>