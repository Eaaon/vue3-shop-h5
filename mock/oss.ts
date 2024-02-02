import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random }  from 'mockjs'
import { resultPageSuccess } from './_util'
const books = 'booksapi'
const warehouse = 'warehouseapi'

/**
 * ClinicList.vue mock数据
 */
const mockClinicList = Mock.mock({
  'content|11-20': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'approveID|+1': '@id',
    'requestUser': '@cname',
    'requestTime': '@datetime',
    'requestStatus': Random.pick([10, 20]),
    'requestTag': '@cname',
    'requestReason': '@cparagraph',
    'clinicName': '@cname',
    'clinicStar|3-5': 5,
    'tagExcellent': '悦牙优选',
    'surveyScore|0-5': 5,
    'tagList|1-10': [{
      'tagName': '@cname',
      'tagColor': '@hex'
    }],
    "number|+1": 202
  }]
})

/**
 * ClinicGroupList.vue mock数据
 */
const mockClinicGroupList = Mock.mock({
  'content|1-30': [{
    'approveID': '@id',
    'groupName': '@cname',
    'requestUser': '@cname',
    'requestTime': '@datetime',
    'addNewClinic': {
      'addNew|1-10': [{
        'clinicID|+1': 1111,
        'clinicName': '@cname',
      }]
    },
    'deleteClinic': {
      'delete|1-10': [{
        'clinicID|+1': 1111,
        'clinicName': '@cname',
      }]
    }
  }]
})

/**
 * RefundList.vue mock数据
 */
const mockRefundList = Mock.mock({
  'content|1-20': [{
    'clinicID': '@id',
    'dataID': '@id',
    'cloudClinicID': '@id',
    'clinicName': '@cname',
    'pricingNo|+1': 20255456565,
    'patientName': '@cname',
    'paidAmount|1-100.2': 1,
  }]
})

export default [
  //ClinicList.vue请求
  {
    url: `/${books}/support/clinic/change/approve/list`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockClinicList.content)
    },
  },
  {
    url: `/${books}/support/clinic/approve`,
    method: 'post',
    response: ({ query }: any) => {
      mockClinicList.content = mockClinicList.content.filter((item: any) => {
        return !query.approveID.includes(item.approveID)
      })
      return {
        codeDesc: "成功",
        data: true,
        query: query
      }
    }
  },
  //ClinicGroupList.vue请求
  {
    url: `/${books}/support/mobile/group/approve/list`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockClinicGroupList.content)
    },
  },
  {
    url: `/${books}/support/clinic/group/approve`,
    method: 'post',
    response: ({ query }: any) => {
      mockClinicGroupList.content = mockClinicGroupList.content.filter((item: any) => {
        return !query.approveID.includes(item.approveID)
      })
      return {
        codeDesc: "成功",
        data: true,
        query: query
      }
    }
  },
  //RefundList.vue请求
  {
    url: `/${warehouse}/support/pricing/refund/approve/page`,
    method: 'get',
    response: ({ query }: any) => {
      return resultPageSuccess(query, mockRefundList.content)
    },
  },
  {
    url: `/${warehouse}/support/pricing/refund/approve`,
    method: 'post',
    response: ({ query }: any) => {
      mockRefundList.content = mockRefundList.content.filter((item: any) => {
        return !query.dataID.includes(item.dataID)
      })
      return {
        codeDesc: "成功",
        data: true,
        query: query
      }
    }
  },
] as MockMethod[]