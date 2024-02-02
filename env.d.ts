/**
 * 在ts文件里面看到ts找不到.vue文件
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}