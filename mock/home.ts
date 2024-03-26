import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random }  from 'mockjs'

const bannerList = Mock.mock({
  'content|1-5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': '@id',
    'picUrl': Random.image('375x175'),
    'linkUrl': 'https://www.baidu.com/',
    'title|1-10': "★"
  }]
})

export default [
  //ClinicList.vue请求
  {
    url: `/banner/list`,
    method: 'get',
    response: ({ query }: any) => {
      return  {
        codeDesc: "成功",
        data: bannerList.content
      }
    },
  },
]as MockMethod[]