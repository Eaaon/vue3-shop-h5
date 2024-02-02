/**
 * 判断机型是否为Android
 */
function isAndroid() {
  let u = navigator.userAgent;
  return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1
}

/**
 * 判断机型是否为IOS
 */
function isIOS() {
  let u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export default {
  isAndroid,
  isIOS,
};