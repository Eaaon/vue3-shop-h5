import request from '@/utils/http'

const purchase = 'purchaseapi'

export function saleApproveList(params: any) {
  return request({
    url: `/${purchase}/approve/mobile/delivery/page/list`,
    method: 'get',
    params
  })
}

export function saleApprove(data: any) {
  return request({
    url: `/${purchase}/approve/mobile/delivery/update`,
    method: 'post',
    data
  })
}


export function purchaseApproveList(params: any) {
  return request({
    url: `/${purchase}/approve/mobile/purchase/order/page/list`,
    method: 'get',
    params
  })
}

export function purchaseApprove(data: any) {
  return request({
    url: `/${purchase}/approve/mobile/purchase/order/update`,
    method: 'post',
    data
  })
}

export function storageApproveList(params: any) {
  return request({
    url: `/${purchase}/approve/mobile/purchase/storage/page/list`,
    method: 'get',
    params
  })
}

export function storageApprove(data: any) {
  return request({
    url: `/${purchase}/approve/mobile/purchase/storage/update`,
    method: 'post',
    data
  })
}
