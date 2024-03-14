<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import { decimalFormat, mobileShow } from '@/utils/format'
import { areaList } from '@vant/area-data';
import GoodsOrder from './components/GoodsOrder.vue';
import GoodsPay from './components/GoodsPay.vue';

const addressPopupShow = ref(false)
const chosenAddressId = ref('1')
const editAddressPopupShow = ref(false)
const searchResult = ref([]);

const state = reactive({
  addressInfo: {
    address: "东门步行街1112号",
    areaStr: "罗湖区",
    cityId: "140100",
    cityStr: "深圳市",
    dateAdd: "2024-03-11 09:54:32",
    dateUpdate: "2024-03-11 09:54:32",
    districtId: "140105",
    id: 1570725,
    isDefault: true,
    label: '公司',
    linkMan: "喷语言",
    mobile: "18825157201",
    provinceId: "140000",
    provinceStr: "广东省"
  },
  list: [
    {
      id: '1',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      isDefault: true,
    },
    {
      id: '2',
      name: '李四',
      tel: '1310000000',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
    {
      id: '3',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      isDefault: true,
    },
    {
      id: '4',
      name: '李四',
      tel: '1310000000',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
    {
      id: '5',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      isDefault: true,
    },
    {
      id: '6',
      name: '李四',
      tel: '1310000000',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
  ],
  disabledList: [
    {
      id: '7',
      name: '王五',
      tel: '1320000000',
      address: '浙江省杭州市滨江区江南大道 15 号',
    },
  ],
  goodsList: [
    {
      id: '11',
      title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
      subTitle: '适配S1P灰电动牙刷 3支',
      url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
      price: '39',
      count: 1,
      weight: '0.2244kg',
      express: '快递运输',
      time: '预计3月13日24:00前发货'
    },
    // {
    //   id: '12',
    //   title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
    //   subTitle: '适配S1P灰电动牙刷 3支',
    //   url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
    //   price: '39',
    //   count: 1,
    //   weight: '0.2244kg',
    //   express: '快递运输',
    //   time: '预计3月13日24:00前发货'
    // },
    // {
    //   id: '14',
    //   title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
    //   subTitle: '适配S1P灰电动牙刷 3支',
    //   url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
    //   price: '39',
    //   count: 1,
    //   weight: '0.2244kg',
    //   express: '快递运输',
    //   time: '预计3月13日24:00前发货'
    // },
    // {
    //   id: '15',
    //   title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
    //   subTitle: '适配S1P灰电动牙刷 3支',
    //   url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
    //   price: '39',
    //   count: 1,
    //   weight: '0.2244kg',
    //   express: '快递运输',
    //   time: '预计3月13日24:00前发货'
    // },
    // {
    //   id: '14',
    //   title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
    //   subTitle: '适配S1P灰电动牙刷 3支',
    //   url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
    //   price: '39',
    //   count: 1,
    //   weight: '0.2244kg',
    //   express: '快递运输',
    //   time: '预计3月13日24:00前发货'
    // },
    // {
    //   id: '15',
    //   title: '美的（Midea）电动牙刷头 成人精准清洁 净白呵护软毛刷头更换 杜邦软毛刷头三八妇女节礼物实用 适配S1P灰电动牙刷 3支',
    //   subTitle: '适配S1P灰电动牙刷 3支',
    //   url: 'https://img10.360buyimg.com/mobilecms/s200x200_jfs/t1/130854/26/41556/81817/65d2f0a1F59fde0f9/8c8c951525557136.jpg',
    //   price: '39',
    //   count: 1,
    //   weight: '0.2244kg',
    //   express: '快递运输',
    //   time: '预计3月13日24:00前发货'
    // }
  ]
})

const { addressInfo, list, disabledList, goodsList } = toRefs(state)

const formatAreaStr = (provinceStr: string, cityStr: string, countyStr: string) => {
  let str = provinceStr;
  cityStr.length > 1 && cityStr !== provinceStr && (str += `${cityStr}`);
  countyStr.length > 1 && (str += `${countyStr}`);
  return str;
}

const onPopupShow = () => {
  addressPopupShow.value = true
}

const onAdd = (info) => {
  editAddressPopupShow.value = true
}

const onEdit = (info) => {
  console.log('onEdit', info)
  editAddressPopupShow.value = true
}

const onSelect = (info) => {
  addressPopupShow.value = false
}

const onClickLeft = () => {
  addressPopupShow.value = false
}

const onSave = () => {

}

const onChangeDetail = () => {

}

const onDelete = () => {

}

const onAddressClickLeft = () => {
  editAddressPopupShow.value = false
}

</script>

<template>
  <div class="container">
    <header v-if="addressInfo.linkMan" class="flex flex-col justify-center relative p-4 bg-white address"
      @click="onPopupShow">
      <div class="flex items-center">
        <van-tag type="danger" class="mr-2" v-if="addressInfo.isDefault">默认</van-tag>
        <van-tag type="primary" class="mr-2" v-if="addressInfo.label">{{ addressInfo.label }}</van-tag>
        <div class="text-xs text-gray-600 truncate flex-1"> {{
      formatAreaStr(addressInfo.provinceStr, addressInfo.cityStr, addressInfo.areaStr) }}</div>
      </div>
      <div class="text-base font-bold truncate w-11/12 mt-1">{{ addressInfo.address }}</div>
      <div class="text-sm truncate w-11/12 mt-1">{{ addressInfo.linkMan }} {{ mobileShow(addressInfo.mobile) }}</div>
      <van-icon class="address-arrow" name="arrow" />
    </header>
    <van-contact-card v-else type="add" add-text="新增收货地址" @click="onPopupShow" />

    <van-popup v-model:show="addressPopupShow" position="right" :style="{ width: '100%', height: '100%' }">
      <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围"
        default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="onSelect" style="height:calc(100% - 46px);"
        class="overflow-y-auto" />
    </van-popup>

    <van-popup v-model:show="editAddressPopupShow" position="right" :style="{ width: '100%', height: '100%' }">
      <van-nav-bar title="编辑收货地址" left-text="返回" left-arrow @click-left="onAddressClickLeft" />
      <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
        :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
        @delete="onDelete" @change-detail="onChangeDetail" />
    </van-popup>

    <section class="mt-3 mx-2 bg-white p-4 rounded-lg">
      <div class="flex items-center">
        <van-icon class="section-header-icon" name="shop-o" />
        <div class="ml-3 text-sm">商品列表</div>
      </div>
      <goods-order :list="goodsList"></goods-order>
    </section>
    
    <section class="mt-3 mx-2 bg-white p-4 rounded-lg">
      <goods-pay :item="goodsList"></goods-pay>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.address-arrow {
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 16px;
}

.address {
  &:before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: -webkit-repeating-linear-gradient(135deg,
        #ff6c6c 0,
        #ff6c6c 20%,
        transparent 0,
        transparent 25%,
        #1989fa 0,
        #1989fa 45%,
        transparent 0,
        transparent 50%);
    background: repeating-linear-gradient(-45deg,
        #ff6c6c 0,
        #ff6c6c 20%,
        transparent 0,
        transparent 25%,
        #1989fa 0,
        #1989fa 45%,
        transparent 0,
        transparent 50%);
    background-size: 80px;
    content: '';
  }
}
</style>