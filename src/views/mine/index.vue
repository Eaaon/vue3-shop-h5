<script setup lang="ts">
import { computed, onMounted, ref, reactive, toRefs } from 'vue'
import Tabbar from '@/components/Tabbar/index.vue'
import avatar from '@/assets/images/avatar_default.png';
import { useRouter } from 'vue-router';

import { clinicApproveList, clinicApprove } from '@/api/oss'

import icon_pending_payment from '@/assets/icons/pending_payment.png';
import icon_logistics from '@/assets/icons/logistics.png';
import icon_pending_comment from '@/assets/icons/pending_comment.png';
import icon_refund from '@/assets/icons/refund.png';
import icon_order from '@/assets/icons/order.png';
import icon_like from '@/assets/icons/like.png';
import icon_coupon from '@/assets/icons/coupon.png';
import icon_location from '@/assets/icons/location.png';
import icon_service from '@/assets/icons/service.png';
import icon_feedback from '@/assets/icons/feedback.png';
import icon_setting from '@/assets/icons/setting.png';

const router = useRouter();

const state = reactive({
  userInfo: {
    avatarUrl: '',
    name: 'Colin'
  }
})

// 我的钱包
const countList = ref<Recordable[]>([
  {
    value: '1',
    label: '积分',
    path: '/my/score',
  },
  {
    value: '2',
    label: '优惠券',
    path: '/my/coupon',
  },
  {
    value: '12',
    label: '余额',
    path: '/order/list?status=3',
  },
]);

// 我的订单
const orderList = ref<Recordable[]>([
  {
    value: '',
    label: '待支付',
    icon: icon_pending_payment,
    path: '/order/list?status=0',
    count: undefined,
    countKey: 'count_id_no_transfer',
  },
  {
    value: '',
    label: '待收货',
    icon: icon_logistics,
    path: '/order/list?status=2',
    count: undefined,
    countKey: 'count_id_no_confirm',
  },
  {
    value: '',
    label: '待评价',
    icon: icon_pending_comment,
    path: '/order/list?status=3',
    count: undefined,
    countKey: 'count_id_no_reputation',
  },
  {
    value: '',
    label: '退款/售后',
    icon: icon_refund,
    path: '/refund',
    count: undefined,
  },
  {
    value: '',
    label: '全部订单',
    icon: icon_order,
    path: '/order/list?status=',
    count: undefined,
  },
]);

// 常用功能
const toolList = ref<Recordable[]>([
  { icon: icon_like, title: '我的收藏', path: '/my/like' },
  { icon: icon_coupon, title: '优惠券', path: '/my/coupon' },
  { icon: icon_location, title: '收货地址', path: '/my/location' },
  { icon: icon_service, title: '联系客服', path: '/my/service' },
  { icon: icon_feedback, title: '意见反馈', path: '/my/feedback' },
  { icon: icon_setting, title: '设置', path: '/my/setting' },
]);

const { userInfo } = toRefs(state)

const goPage = (path: string) => {
  router.push({ path });
}

const onLoad = () => {
  const params = {
    page: 1,
    size: 10,
    keywords: ''
  }
  clinicApproveList(params).then(data => {
    if (data) {
      // if (data.content) {
      //   state.list = state.list.concat(data.content);
      // } else {
      //   state.list = [];
      // }
      // state.page++
      // state.finished = !data.hasNext
      // state.isEmpty = !state.list || state.list.length === 0;
    } else {
      // state.error = true
    }
    // state.loading = false
  })
}

onMounted(() => {
  onLoad()
})

</script>

<template>
  <div class="container">
    <header class="flex items-center pl-5 pt-7 pb-3">
      <van-image width="50" height="50" round fit="cover" :src="userInfo.avatarUrl || avatar" alt="" />
      <div class="pl-3 pr-2 text-white">{{ userInfo.name }}</div>
      <van-icon name="arrow" color="#fff" size="14" />
    </header>
    <section class="flex m-3 py-3 bg-white rounded-md">
      <div v-for="(item, index) in countList" :key="index" class="w-1/3 text-center" @click="goPage(item.path)">
        <div>{{ item.value }}</div>
        <div class="text-xs pt-2 text-light-gray">{{ item.label }}</div>
      </div>
    </section>
    <section class="flex m-3 py-3 bg-white rounded-md">
      <div v-for="(item, index) in orderList" :key="index" class="w-1/5 text-center" @click="goPage(item.path)">
        <van-icon size="24" :name="item.icon" :badge="item.count" />
        <div class="text-xs pt-1 text-gray">{{ item.label }}</div>
      </div>
    </section>
    <section class="flex flex-wrap m-3 pb-4 bg-white rounded-md">
      <div v-for="(item, index) in toolList" :key="index" class="w-1/4 text-center pt-4" @click="goPage(item.path)">
        <van-icon size="24" :name="item.icon" />
        <div class="text-xs pt-1 text-gray">{{ item.title }}</div>
      </div>
    </section>
  </div>
  <Tabbar style="height: 50px;"></Tabbar>
</template>

<style lang="scss" scoped>
.container {
  background: url('@/assets/images/login_bg.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 196px;
}
</style>