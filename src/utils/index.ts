/**
 * 动态引入静态资源
 */
export function getAssetURL(name: string) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

/**
 * 获取链接某个参数
 * @description 兼容search，hash并存情况
 * @param {string} key 参数名称
 * @param {string} [url]  链接
 * @returns {string} 返回参数值
 * @example
 * ```js
 * getQueryString('name'); // null
 * getQueryString('name', 'http://www.baidu.com?name=1&age=2'); // 1
 * ```
 */
export function getQueryString(key: string, url: string) {
  const reg = new RegExp(`([?&]+)${key}=([^&#]*)`);
  const href = url || window.location.href;
  const results = href.substring(1).match(reg);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2]);
}