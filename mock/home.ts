import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random }  from 'mockjs'

const bannerList = Mock.mock({
  'code': '000000',
  'msg':'成功',
  'status':'200',
  'data': {
    'page': 10,
    'size': 1,
    'total': 10,
    'hasNext': true,
    'list|1-5': [{
      'id|+1': '@id',
      'picUrl': Random.image('375x175'),
      'linkUrl': 'https://www.baidu.com/',
      'title|1-10': "★"
    }]
  },
})


export default [
  //ClinicList.vue请求
  {
    url: `/banner/list`,
    method: 'get',
    response: ({ query }: any) => {
      return bannerList
    },
  },
]as MockMethod[]