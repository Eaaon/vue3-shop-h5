<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import { routerKey, useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
import Sku from '@/components/Sku/index.vue'

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
  picList: [] as Employee[],
  star: 5,
  tabInfo: {
    productList: [
      'https://img30.360buyimg.com/sku/jfs/t1/129283/18/32539/53277/63808b37E1a222fdc/cfad29463ce00c70.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/148335/26/17217/179743/5fcdbeacE4b82ef65/cbed64b127c2f3ff.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/148037/10/17316/184821/5fcdbeacEd2f24143/2c988e664735c78d.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/148722/1/17375/302795/5fcdbeadE0a5ee641/83a1616040f94b1c.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/133435/31/18777/212324/5fcdbeadE6bf3e562/e1f32fcd305c6ff7.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/148339/32/17396/209817/5fcdbeadE4c636478/0d6e17cde37dec57.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/138831/8/17412/216509/5fcdbeadE44a07231/80ba93852391f8e0.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/154556/26/8877/115778/5fcdbeacE04c9e654/c889b7d8cf9f90e0.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/141219/34/17380/137605/5fcdbeacE5863ce32/a4ab914d5a3bcf54.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/141458/25/17350/222079/5fcdbeadE004d1351/8234799f4c517da1.jpg'
    ]
  },
  cartCount: ''
})

// Sku
const skuNextActionType = ref('goBuy');
const skuShow = ref(false);

const onPlay = () => {
  router.push({ path: '/video', query: { url: '' } });
  // window.location.href = 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0b51af60247650131859009537/v.f20.mp4'
}

const onConcatService = () => {
  showToast('未开放：客服');
}

const onCart = () => {
  router.push({ path: '/cart', query: { url: '' } });
}

const onSkuShow = (type: string) => {
  skuNextActionType.value = type;
  skuShow.value = true;
}

const { picList, star, tabInfo, cartCount } = toRefs(state)

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
          <van-rate class="ml-1" v-model="star" size="12" gutter="2" />
        </div>
        <div class="text-xs text-gray-500">2024-02-02</div>
      </div>
      <div class="py-3 text-sm text-gray-600">
        洗衣粉很好，去污能力强，洗衣粉采用无磷配方，柔顺不伤手，洗完还有淡淡的清香，慢慢的一大袋很划算，估计能用了2到3个月，赞
      </div>
    </div>
  </div>

  <div class="bg-white mt-2 pb-12">
    <van-tabs v-model:active="tabActive" animated color="#f5503a">
      <van-tab title="商品介绍">
        <van-image width="100%" height="100%" fit="contain" position="top" block="true"
          v-for="(item, i) of tabInfo.productList" :key="i" :src="item" />
      </van-tab>
      <van-tab title="规格参数" class="px-4 pb-10">
        <van-divider :style="{ color: '#666', borderColor: '#ddd', lineHeight: '1' }">包装清单</van-divider>
        <div class="text-xs text-gray-600">立白 全自动超浓缩 洗衣粉1.8kg 桶装 × 1</div>
        <van-divider :style="{ color: '#666', borderColor: '#ddd', lineHeight: '1' }">商品参数</van-divider>
        <table cellpadding="0" cellspacing="1" width="100%" border="0" class="Ptable param_table">
          <tbody>
            <tr>
              <td>商品编号</td>
              <td>1119955</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th colspan="2">主体</th>
            </tr>
            <tr>
              <td>总净含量</td>
              <td>1.8kg</td>
            </tr>
            <tr>
              <td>保质期</td>
              <td>2年</td>
            </tr>
          </tbody>
        </table>
      </van-tab>
      <van-tab title="售后保障" class="px-4 pb-10 text-gray">
        <van-divider :style="{ color: '#666', borderColor: '#ddd', lineHeight: '1' }">服务承诺</van-divider>
        <div class="text-xs">
          商城向您保证所售商品均为正品行货，自营商品开具机打发票或电子发票。凭质保证书及商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
        </div>
        <div class="text-xs mt-1">
          注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
        </div>
        <van-divider :style="{ color: '#666', borderColor: '#ddd', lineHeight: '1' }">权利声明</van-divider>
        <div class="text-xs">
          商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是商城重要的经营资源，未经许可，禁止非法转载使用。
        </div>
        <div class="text-xs mt-1">
          注：本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。
        </div>
        <van-divider :style="{ color: '#666', borderColor: '#ddd', lineHeight: '1' }">价格说明</van-divider>
        <div class="text-xs">
          <strong>1.价格：</strong>价格为商品的销售价，是您最终决定是否购买商品的依据。
        </div>
        <div class="text-xs mt-1">
          <strong>2.划线价：</strong>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
        </div>
        <div class="text-xs mt-1">
          <strong>3.折扣：</strong>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
        </div>
        <div class="text-xs mt-1">
          <strong>4.异常问题：</strong>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
        </div>
      </van-tab>
    </van-tabs>
  </div>

  <van-action-bar>
    <van-action-bar-icon icon="thumb-circle-o" text="首页" to="/home" replace />
    <van-action-bar-icon icon="chat-o" text="客服" @click="onConcatService" />
    <van-action-bar-icon icon="cart-o" text="购物车" :badge="cartCount" @click="onCart" />
    <van-action-bar-button type="warning" text="加入购物车" @click="onSkuShow('addCart')" />
    <van-action-bar-button type="danger" text="立即购买" @click="onSkuShow" />
  </van-action-bar>

  <Sku v-model:show="skuShow"></Sku>
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

.param_table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 10px;
  width: 100%;
  color: #666;
}

.param_table td,
.param_table th {
  border: 1px solid #dadada;
  padding: 8px;
  text-align: left;
}
</style>