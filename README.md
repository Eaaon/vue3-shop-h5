## 🎨 简介
该项目采用 Vue3、Vite、Vant4、TypeScript 等新技术方案。

## 🌈 安装与使用
> 环境要求: 版本要求Node 16+

```
# 使用npm运行需要配置淘宝代理
npm config set registry https://registry.npmmirror.com

# 通过 github 拉取（最新）
git clone https://github.com/Eaaon/vue3-shop-h5.git

# 进入项目目录
cd vue3-shop-h5

# 安装依赖
yarn

# 启动服务
yarn dev
```

## ✨ 特性

- **Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API
- **Vant4**：Vant UI 的 Vue3 版本
- **Pinia**: 传说中的 Vuex5
- **Vite**：真的很快
- **Vue Router4**：路由 的 Vue3 版本
- **TypeScript**：JavaScript 语言的超集
- **Scss**：CSS 预处理器
- **ESlint**：代码校验
- **Prettier**：代码格式化
- **Axios**：发送网络请求（已封装好）
- **UnoCSS**：具有高性能且极具灵活性的即时原子化 CSS 引擎[样式搜索链接](https://unocss.dev/interactive/)可参考[tailwindcss](https://tailwindcss.com/docs/margin)
- **mockjs**: 本地请求
- **mitt**: 组件通讯

## 🔥 目录结构
```
├─ dist               # 打包dist
├─ mock               # mock服务
├─ node_modules       # 模块和插件
├─ public             # 静态资源
├─ src                # 主目录
│  ├─ api             # 接口文件
│  ├─ assets          # 资源文件
│  │  ├── icons       # icon sprite 图标文件夹
│  │  ├── images      # 项目存放图片的文件夹
│  │  └── svgs        # 项目存放svg图片的文件夹
│  ├─ components      # 通用业务组件（全局可用）
│  ├─ enums           # 枚举
│  ├─ router          # 路由配置
│  ├─ store           # 状态管理中心
│  ├─ styles          # 全局样式
│  ├─ types           # Typescript 类型
│  ├─ utils           # 工具库
│  ├─ views           # 所有业务页面
│  ├─ App.vue         # 视图入口
│  └─ main.ts         # 入口文件
├─ .editorconfig      # 文件代码规范
├─ .env.development   # 开发环境
├─ .env.production    # 生产环境
├─ .eslintrc.js       # eslint配置
├─ .gitignore         # git提交忽略文件配置
├─ .prettierrc.js     # prettier配置
├─ index.html         # html入口
├─ package.json       # 对项目或者模块包的描述
├─ postcss.config.cjs # postcss移动端适配配置       
├─ README.md          # 项目手册
├─ tsconfig.json      # ts编译配置
├─ unocss.config.ts   # unocss编译配置
└─ vite.config.ts     # vite配置
```

## 🔨 使用工具

- **eslint**：插件化JavaScript代码检测工具
> Js编码规范，检测并提示错误或警告信息

- **prettier**：代码格式化工具
> 代码风格管理，更好的代码风格效果

- **editorconfig**：文件代码规范
> 保持多人开发一致编码样式

## 🔧 vscode工具
- **TypeScript Vue Plugin (Volar)**：TypeScript Vue3开发必备
- **Vue Language Features (Volar)**: Vue3开发必备
- **Prettier - Code formatter**: 代码格式化
- **UnoCSS**：原子化CSS

## 📱 移动端适配和样式设置
### 1、安装依赖
```
npm install -D postcss-px-to-viewport-8-plugin
```

### 2、配置设计尺寸
在 postcss.config.cjs 配置设置尺寸 375设计稿,px按照实际尺寸写就可以了

### 3、UnoCSS安装和配置
```
npm install -D unocss
在uno.config.ts 配置
// main.ts
import 'uno.css'
```

### 4、将unocss的rem转换成px
```
yarn add -D @unocss/preset-rem-to-px
// uno.config.ts
import { defineConfig } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx(),
    // ...other presets
  ],
})
```

## 🔑 vite使用[mock](https://www.viterc.cn/en/vite-plugin-mock.html)
## 🔭 第三方接口测试[Yapi](https://yapi.pro/)

## 💎 第三方组件
### 1、轮播（swiper）
### 2、滚动（@better-scroll/core）
### 3、瀑布流（masonry-layout、vue-masonry)

## 🎃 不同环境配置
### 1、测试环境 => .env.test
### 2、开发环境 => .env.development
### 3、生产环境 => .env.production

```
  // package.json
  "scripts": {
    "dev": "vite", //yarn dev 开发环境
    "test": "vite --mode test", //yarn test 测试环境
    "prod": "vite --mode production", //prod test 生产环境
    "build": "vue-tsc && vite build", //yarn run build dev 生产环境构建产物
    "build dev": "vite build --mode development", //yarn run build dev 开发环境构建产物
    "build prod": "vite build --mode production", //yarn run build prod 生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  },
```

## 🎈 如需自己使用Vite创建项目
```
 # 使用 NPM:
 npm create vite@latest
 # 使用 Yarn::
 yarn create vite
 # 使用 PNPM:
 pnpm create vite
```

```
√ Project name: ... vue3-shop-h5
√ Select a framework: » Vue
√ Select a variant: » TypeScript
Scaffolding project in E:\github\h5\vue3-shop-h5...

Done. Now run:

  cd vue3-shop-h5
  npm install
  npm run dev
```

## 😀 Emoji[路径](https://www.emojiall.com/zh-hans/categories/H)

## ⭐ 作者

如果觉得项目不错，或者有帮助到你，希望你可以去 Github 或者 Gitee 帮我点个 ⭐ Star，这将是对我极大的鼓励与支持。