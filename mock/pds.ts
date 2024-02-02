import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random }  from 'mockjs'
import { resultPageSuccess } from './_util'
const purchase = 'purchaseapi'

/**
 * MaterialList.vue mock数据
 */
const mockMaterialList = Mock.mock({
  'content|1-30': [{
    'deliveryID|+1': 1,
    'deliveryNo|10000-1000000': 111,
    'productCode|10000-1000000': 111,
    'productName': '@cname',
    'productImage': Random.image('200x200'),
    'requestCount|1-100': 1,
    'deliveryType': Math.random() > 0.5 ? 10 : 20,
    'expressName': '@cname',
    'expressPhone': /^1[34578]\d{9}$/,
    'expressAddress': '@county(true)',
    'userName': '@cname',
    'createTime': '@datetime'
  }]
})

/**
 * PurchaseList.vue mock数据
 */
const mockPurchaseList = Mock.mock({
  'content|1-30': [{
    'purchaseID|+1': 1111,
    'purchaseNo|+1': 1111,
    'productCode|10000-1000000': 111,
    'productName': '@cname',
    'productImage': Random.image('200x200'),
    'purchaseCount|1-100': 1,
    'purchasePrice|1-100.2': 2,
    'purchaseAmount|1-100.2': 2,
    'deliveryDate': '@datetime',
    'repositoryName': '@cname',
    'purchaseNotes': '@cparagraph',
    'userName': '@cname',
    'createTime': '@datetime',
  }]
})

/**
 * StorageList.vue mock数据
 */
const mockStorageList = Mock.mock({
  'content|1-30': [{
    'storageID|+1': 1111,
    'storageNo|+1': 1111,
    'purchaseNo|+1': 100111,
    'productCode|+1': 100111,
    'productName': '@cname',
    'productImage': Random.image('200x200'),
    'storageBatch|+1': 1111,
    'repositoryName': '@cname',
    'storageCount|1-100': 1,
    'storageNotes': '@cparagraph',
    'approveStatus': Random.pick([0, 1, 10]),
    'userName': '@cname',
    'createTime': '@datetime',
  }]
})

export default [
  //MaterialList.vue
  {
    url: `/${purchase}/approve/mobile/delivery/page/list`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockMaterialList.content)
    },
  },
  {
    url: `/${purchase}/approve/mobile/delivery/update`,
    method: 'post',
    response: ({ query }: any) => {
      mockMaterialList.content = mockMaterialList.content.filter((item: any) => {
        return !query.deliveryID.includes(item.deliveryID)
      })
      return {
        detail: "成功",
        data: true,
        query: query
      }
    }
  },
  //PurchaseList.vue
  {
    url: `/${purchase}/approve/mobile/purchase/order/page/list`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockPurchaseList.content)
    },
  },
  {
    url: `/${purchase}/approve/mobile/purchase/order/update`,
    method: 'post',
    response: ({ query }: any) => {
      mockPurchaseList.content = mockPurchaseList.content.filter((item: any) => {
        return !query.purchaseID.includes(item.purchaseID)
      })
      return {
        detail: "成功",
        data: true,
        query: query
      }
    }
  },
  //StorageList.vue
  {
    url: `/${purchase}/approve/mobile/purchase/storage/page/list`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockStorageList.content)
    },
  },
  {
    url: `/${purchase}/approve/mobile/purchase/storage/update`,
    method: 'post',
    response: ({ query }: any) => {
      mockStorageList.content = mockStorageList.content.filter((item: any) => {
        return !query.storageID.includes(item.storageID)
      })
      return {
        detail: "成功",
        data: true,
        query: query
      }
    }
  },
] as MockMethod[]