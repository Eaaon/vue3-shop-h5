<script setup lang="ts">
import { ref } from 'vue';

const keyword = ref('');
const active = ref(0);
const tabList = ref<Recordable[]>([
  { name: '全部', status: '' },
  { name: '待支付', status: '0' },
  { name: '待发货', status: '1' },
  { name: '待收货', status: '2' },
  { name: '待评价', status: '3' },
]);
const listQueryType = ref('query');
const listRef = ref<any>(null);

const onSearch = () => {

}

const onTabClicked = () => {
  listQueryType.value = 'query';
  listRef.value?.refresh();
} 
</script>

<template>
  <div class="container">
    <van-sticky>
      <header>
        <form action="#" class="search-form">
          <van-search v-model="keyword" class="search-field" shape="round" show-action placeholder="搜索订单（订单编号）"
            @search="onSearch">
            <template #action>
              <div v-if="keyword" @click="onSearch">搜索</div>
            </template>
          </van-search>
        </form>
        <van-tabs v-model:active="active" @click-tab="onTabClicked">
          <van-tab v-for="(item, index) in tabList" :key="index" :title="item.name" />
        </van-tabs>
      </header>
    </van-sticky>
  </div>
</template>

<style lang="scss" scoped></style>