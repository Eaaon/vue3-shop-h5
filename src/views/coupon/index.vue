<script setup lang="ts">
import { ref } from 'vue';
import CouponCard from './components/CouponCard.vue'

let active = ref(0)
let isEdit = ref(false)
let list = ref<Recordable[]>([
  {
    name: '待使用',
  },
  {
    name: '已使用',
  },
  {
    name: '已过期',
  }
])

let coupons = ref<Recordable[]>([])

let normalCoupons = ref<Recordable[]>([
  {
    id: '001',
    available: 0,
    condition: '无门槛\n最多优惠12元',
    tag: '商城券',
    description: '仅可购买时尚美妆运动鞋服黄金首饰部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '1天08时36分后过期',
    useDescription: '仅可购买京东健康部分商品',
    couponNo: 'x321314832190',
    checked: false
  },
  {
    id: '002',
    available: 0,
    condition: '满6元可用',
    tag: '商城券',
    description: '仅可购买医疗器械部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '2024.03.19-2024.03.26',
    useDescription: '仅可购买医药部分商品',
    couponNo: '32131484430',
    checked: false
  }
])

let usedCoupons = ref<Recordable[]>([
  {
    id: '001',
    available: 1,
    condition: '无门槛\n最多优惠12元',
    tag: '商城券',
    description: '仅可购买时尚美妆运动鞋服黄金首饰部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '1天08时36分后过期',
    useDescription: '仅可购买京东健康部分商品',
    couponNo: 'x321314832190',
    checked: false
  },
  {
    id: '002',
    available: 1,
    condition: '满6元可用',
    tag: '商城券',
    description: '仅可购买医疗器械部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '2024.03.19-2024.03.26',
    useDescription: '仅可购买医药部分商品',
    couponNo: '32131484430',
    checked: false
  }
])

let expiredCoupons = ref<Recordable[]>([
  {
    id: '001',
    available: 2,
    condition: '无门槛\n最多优惠12元',
    tag: '商城券',
    description: '仅可购买时尚美妆运动鞋服黄金首饰部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '1天08时36分后过期',
    useDescription: '仅可购买京东健康部分商品',
    couponNo: 'x321314832190',
    checked: false
  },
  {
    id: '002',
    available: 2,
    condition: '满6元可用',
    tag: '商城券',
    description: '仅可购买医疗器械部分商品',
    value: 150,
    name: '优惠券名称',
    expiredTime: '2024.03.19-2024.03.26',
    useDescription: '仅可购买医药部分商品',
    couponNo: '32131484430',
    checked: false
  }
])
coupons = normalCoupons

const onTab = (index: number) => {
  active.value = index
  coupons = index == 0 ? normalCoupons : index == 1 ? usedCoupons : expiredCoupons
}

const onDelete = (id: string) => {
  coupons.value = coupons.value.filter(item => item.id !== id)
}
</script>

<template>
  <header class="flex text-sm text-gray-500 bg-white py-3 relative">
    <div class="flex-1 text-center" :class="{ 'on': active == i }" v-for="(item, i) of list" :key="i" @click="onTab(i)">
      {{ item.name }}
    </div>
    <div class="tab-active-bar" :class="'moved' + active"></div>
    <!-- <div class="w-16 text-center" @click="isEdit = !isEdit">{{ isEdit ? '完成' : '管理' }}</div> -->
  </header>
  <main class="mt-3 coupon-list">
    <div v-for="coupon of coupons" :key="coupon.id">
      <van-swipe-cell :stop-propagation="true">
        <!-- <template #left>
          <van-checkbox v-model="coupon.checked" class="check-box"></van-checkbox>
        </template> -->
        <coupon-card :item="coupon"></coupon-card>
        <template #right>
          <van-button text="删除" type="danger" class="delete-button" @click="onDelete(coupon.id)" />
        </template>
      </van-swipe-cell>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.on {
  color: #e93b3d;
}

.tab-active-bar {
  width: 60px;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 16px;
  background-color: #e93b3d;

  &.moved0 {
    transform: translateX(16px);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.moved1 {
    transform: translateX(141px);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.moved2 {
    transform: translateX(266px);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}

// .coupon-list {
//   .van-swipe-cell__right {
//     .van-button {
//       // height: inherit;
//       margin-right: 12px;
//       border-radius: 4px;
//     }
//   }
// }
.check-box{
  height: 100%;
  margin-left: 12px;
}
.delete-button{
  height: 100%;
  margin-right: 12px;
}
</style>