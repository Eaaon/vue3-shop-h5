import request from '@/utils/http'

export function bannerListApi(params: any) {
  return request({
    url: `/banner/list`,
    method: 'get',
    params
  })
}