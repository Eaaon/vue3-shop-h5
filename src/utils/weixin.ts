import request from '@/utils/request'
import { showToast } from 'vant'

import wx from "weixin-js-sdk"

let first_url = window.location.href.split('#')[0]
let url_signed = new Map()

const initApiList = [
  'checkJsApi',
  'updateAppMessageShareData',
  'updateTimelineShareData',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'openLocation',
  'getLocation',
  'hideOptionMenu',
  'showOptionMenu',
  'hideMenuItems',
  'showMenuItems',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'closeWindow',
  'scanQRCode',
  'chooseWXPay',
  'openProductSpecificView',
  'addCard',
  'chooseCard',
  'openCard'
]

async function sign_url() {
  let _url = window.location.href.split('#')[0]

  if (isIphone()) {
    _url = first_url
  }

  // if(last_url == _url) return
  let params = {
    url: _url,
    channel: 'Dental5Customer' //sessionStorage.getItem("channel")
  }

  let sign = url_signed.get(_url)

  if (!sign || sign.expire < Date.now()) {

    sign = await request({
      url: `/userapi/clouds/weixin/sign/query`,
      method: 'get',
      params
    }) 

    if (sign) {
      sign.expire = Date.now() + 7000000 //7000秒
      url_signed.set(_url, sign)
    } else {
      return false
    }
  }


  wx.config({
    appId: sign.appId,
    timestamp: sign.signTimestamp,
    nonceStr: sign.signRandomString,
    signature: sign.weixinSignature,
    jsApiList: initApiList

  });

  let ready = await wxready()
  return ready

}

function wxready() {
  return new Promise(function (resove, reject) {
    wx.ready(function () {
      resove(true)
    })
  })
}


//判断是否IOS环境
function isIphone() {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
  return isIOS
}


function chooseImage(count = 9) {
  return new Promise(function (resove, reject) {
    wx.ready(function () {
      wx.chooseImage({
        count: count, // 默认9
        sizeType: ["original"],
        // sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: (res: any) => {
          resove(res.localIds) // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        },
        fail: (res: any) => {
          showToast("图片选择失败，请刷新页面重试");
        }
      });
    })
  })
}

function getImageData(id: string | number) {
  return new Promise(function (resove, reject) {
    wx.ready(function () {
      wx.getLocalImgData({
        localId: id, // 图片的localID
        success: (res: any) => {
          let data = res.localData
          if (data.indexOf("data:image") != 0) {
            data = 'data:image/jpeg;base64,' + data
          }
          data = data.replace(/\r|\n/g, '')
          resove(data) // localData是图片的base64数据，可以用img标签显示
        }
      })
    })
  })
}

function previewImage(url: string, list: any) {
  wx.ready(function () {
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: list // 需要预览的图片http链接列表
    });
  })
}

function getLocation() {
  wx.getLocation({
    // type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: (res: any) => {
      sessionStorage.setItem("LBSLongitude", res.longitude);
      sessionStorage.setItem("LBSLatitude", res.latitude);
      // let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      // let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      // let speed = res.speed; // 速度，以米/每秒计
      // let accuracy = res.accuracy; // 位置精度
    }
  })
}


let chooseBase64Image = async function (count: number) {
  let base64_images = []
  let ids: any = await chooseImage(count);
  for (const id of ids) {
    let base64 = await getImageData(id);
    base64_images.push(base64)
  }
  return base64_images
}

let checkLogin = async function () {
  let data = await request({
    url: `/userapi/my/weixin/info`,
    method: 'get',
    params:{
      channel: 'Dental5Customer'
    }
  })
    
  if (data && data.userPhone && data.userPhone != '' && data.userPhone != "") {
    return true
  } else {
    return false;
  }

}

let shareMessage = function (options: any) {
  wx.showOptionMenu()
  wx.updateTimelineShareData(options)
  wx.updateAppMessageShareData(options)
}

export default {
  sign_url,
  isIphone,
  chooseImage,
  chooseBase64Image,
  getImageData,
  previewImage,
  getLocation,
  checkLogin,
  shareMessage
}