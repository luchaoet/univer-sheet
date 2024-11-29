import DefaultTheme from 'vitepress/theme'
import UniverSheet from '@xquant/sheet-vue3'
import "@xquant/sheet-core/index.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(UniverSheet)
  }
}