<script setup lang="ts">
import { onMounted, reactive, ref, toRefs, onBeforeUnmount } from 'vue';
import type { PropType } from 'vue';
import BScroll from '@better-scroll/core';
import GoodsDetail from './GoodsDetail.vue';

const props = defineProps({
  list: { type: Array as PropType<Recordable[]>, default: () => [] },
})

const wrapperRef = ref(null)
let bs = null

onMounted(() => {
  if (props.list.length > 1) {
    bs = new BScroll(wrapperRef.value, {
      scrollX: true,
      click: true
    })
  }
})

onBeforeUnmount(() => {
  bs && bs.destroy()
})

const state = reactive({
  showPopup: false,
  showDialog: false,
  remark: ''
})

const { showPopup, showDialog, remark } = toRefs(state)

const popupStyle = {
  'overflow': 'hidden'
};

const onShowPopup = () => {
  state.showPopup = true
}

</script>

<template>
  <div class="py-2" v-if="props.list.length == 1">
    <goods-detail :list="props.list"></goods-detail>
  </div>
  <div class="my-4 flex items-center" v-else @click="onShowPopup">
    <div class="scroll-wrapper flex-1" ref="wrapperRef">
      <div class="scroll-content">
        <div class="scroll-item pr-1" v-for="(item, index) in props.list" :key="index">
          <van-image width="64px" height="64px" fit="contain" radius="4" :src="item.url" alt="" />
        </div>
      </div>
    </div>
    <div class="text-gray-700 pl-2 text-sm">共{{ props.list.length }}件<van-icon name="arrow" /></div>
  </div>
  <div class="flex text-sm">
    <div class="flex-1">配送</div>
    <div class="text-right">
      <div>快递运输</div>
      <div>预计3月14日24:00前发货</div>
    </div>
  </div>
  <div class="flex text-sm mt-4">
    <div @click="showDialog = true">退换无忧<van-icon name="info-o" class="ml-2" size="14" /></div>
    <div class="text-right flex-1">
      <div>商家赠送</div>
      <div>享运费补贴或免费取件服务</div>
    </div>
  </div>

  <van-field v-model="remark" label="留言" placeholder="建议留言前先与商家沟通确认" input-align="right" class="remark-input" />

  <van-popup v-model:show="showPopup" round closeable position="bottom" :style="popupStyle" :lock-scroll="true">
    <div class="relative text-center p-4">
      <div class="text-xl font-bold">商品清单</div>
      <div class="text-gray-500 text-sm popup-count">共{{ props.list.length }}件</div>
    </div>
    <div class="px-4 overflow-y-auto relative" style="max-height:80vh">
      <goods-detail :list="props.list"></goods-detail>
    </div>
  </van-popup>

  <van-dialog v-model:show="showDialog" title="退换无忧须知">
    <div class="overflow-y-auto dialog-content px-5">
      一、自营商品：1、如果您在购买自营商品时选择了退换无忧服务，那么该订单在7天内退货、15天内换货时，可以享受1次上门取件服务，此服务不再单独收费且此服务不影响商品的七天无理由退货政策。如果该订单内包含多件商品，该服务不限制具体商品数量，但是限制使用此服务的次数为1次；2、如果您申请上门取件的地址超出了上门取件的范围，需要您自行委托第三方配送，在您提供有效快递单号和费用凭证，并经审核通过后，您支付的运费将以余额的形式按照《非客户原因退换货逆向运费补偿标准》返还您相应的费用。
      二、第三方商家商品：1、7天内退货，15天内换货，可获得运费赔付或免费1次京配上门取件服务。同一个订单中发生多次退换，已经赔付一次后，其他商品则不再享受服务；2、退换货完成后可以开始理赔申请，审核时间为1个工作日，审核通过后理赔款将及时划至您的小金库或钱包余额或银行卡中。理赔款预计2个工作日到账，还请您及时关注账户变化，以实际到账时间为准。
    </div>
  </van-dialog>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
}

.scroll-content {
  display: inline-block;
}

.scroll-item {
  display: inline-block;
}

.popup-count {
  position: absolute;
  top: 16px;
  right: 44px;
}

.dialog-content {
  max-height: 60vh;
  line-height: 2;
  font-size: 13px;
  text-align: justify;
  white-space: pre-wrap;
  width: -moz-fit-content;
  width: fit-content;
  word-break: break-all;
  text-indent: 0;
}

.remark-input {
  padding-left: 0;
  padding-right: 0;
}
</style>