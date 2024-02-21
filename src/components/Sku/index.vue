<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'Sku',
  emits: ["update:show"],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const count = ref(1)
    const state = reactive({
      tagList: [
        {
          name: '1勺抵4勺丨全自动浓缩粉1.8kg',
          id: '001',
        }, {
          name: '3倍洁净丨超洁清新粉3kg',
          id: '002',
        }, {
          name: '3倍洁净丨超洁清新粉3.5kg',
          id: '003',
        },
      ],
      active: 0
    })

    const onClose = () => {
      context.emit("update:show", false)
    }
    const onTag = (i: number) => {
      state.active = i
    }
    const onSubmit = () => {
      onClose()
    }
    return {
      count,
      state,
      onClose,
      onTag,
      onSubmit
    }
  },
});
</script>

<template>
  <van-popup :show="show" round closeable close-icon="close" position="bottom" :style="{ maxHeight: '80%' }"
    @update:show="onClose">
    <header class="py-5 px-5 flex items-end">
      <van-image width="100" height="100" fit="cover"
        src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/180427/1/42133/74788/65530c18Fdc847235/5e44387898120cd8.jpg!q80.dpg.webp" />
      <div class="text-xs pl-2">
        <div class="red-price">
          <span>到手价￥</span>
          <span class="text-2xl">32</span>
          <span>.01</span>
        </div>
        <div>
          <span class="text-light-gray pr-2">已选</span>
          <span>1勺抵4勺丨全自动浓缩粉1.8kg,1个</span>
        </div>
      </div>
    </header>
    <main class="sku-main overflow-y-auto">
      <div class="px-4 text-sm font-bold h-10 leading-10">产品</div>
      <div class="px-2 flex flex-wrap items-center px-1.5 overflow-hidden sku_choose">
        <span class="item rounded-full h-7 leading-7 ml-3 mb-2 px-4 overflow-hidden" :class="{ 'active': state.active == i }" v-for="(item, i) of state.tagList" :key="item.id"
          @click="onTag(i)">{{ item.name }}</span>
      </div>
      <div class="px-5 py-4 flex justify-between">
        <div>数量</div>
        <van-stepper v-model="count" theme="round" button-size="22" max="99" integer />
      </div>
    </main>
    <footer class="px-4 py-2">
      <van-button type="danger" round block @click="onSubmit">确定</van-button>
    </footer>
  </van-popup>
</template>

<style lang="scss" scoped>
.sku-main {
  max-height: calc(80vh - 200px);
}

.sku_choose .item {
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
  color: #262626;
  max-width: 270px;
  min-width: 20px;
  font-size: 11px;
  
}

.sku_choose .item.active {
  background: #fcedeb;                                            
  border: 1px solid #f2270c;
  color: #f2270c;
  font-weight: 700;
}
</style>
