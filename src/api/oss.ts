import request from '@/utils/http'

const books = 'booksapi'
const warehouse = 'warehouseapi'

export function clinicApproveList(params: any) {
  return request({
    url: `/${books}/support/clinic/change/approve/list`,
    method: 'get',
    params
  })
}

export function clinicApprove(data: any) {
  return request({
    url: `/${books}/support/clinic/approve`,
    method: 'post',
    data
  })
}


export function clinicGroupApproveList(params: any) {
  return request({
    url: `/${books}/support/mobile/group/approve/list`,
    method: 'get',
    params
  })
}

export function clinicGroupApprove(data: any) {
  return request({
    url: `/${books}/support/clinic/group/approve`,
    method: 'post',
    data
  })
}

export function refundApproveList(params: any) {
  return request({
    url: `/${warehouse}/support/pricing/refund/approve/page`,
    method: 'get',
    params
  })
}

export function refundApprove(params: any) {
  return request({
    url: `/${warehouse}/support/pricing/refund/approve`,
    method: 'post',
    params
  })
}
