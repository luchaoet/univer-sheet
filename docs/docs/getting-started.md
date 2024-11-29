# 快速上手

## 原生 HTML

```html
<head>
  <link rel="stylesheet" href="http://172.19.7.93:9999/@xquant/sheet-core/lib/index.css" />
</head>
<body>
  <div id="container"></div>
  <script type="module">
    import { createUniverSheet } from '@xquant/sheet-core';

    const container = document.getElementById('container');

    const data = {}

    const options = {}

    const sheetInstance  = createUniverSheet(container, data, options)
  </script>
</body>
```

## Vue2

提供封装的组件，使用方式如下：

### 安装

::: code-group

```bash [npm]
npm install @xquant/sheet-core @xquant/sheet-vue2 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

```bash [yarn]
yarn add @xquant/sheet-core @xquant/sheet-vue2 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

```bash [pnpm]
pnpm add @xquant/sheet-core @xquant/sheet-vue2 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

:::

### 使用

```vue
<template>
  <UniverSheet  @init="sheetInit" :data="workbook" />
</template>

<script>
import UniverSheet from "@xquant/sheet-vue2"; 
import "@xquant/sheet-core/lib/index.css"

export default {
  components: {
    UniverSheet
  },
  data () {
    return {
      workbook: {}
    }
  },
  methods: {
    sheetInit(instance) {
      // 获取实例（应避免将它放在 data 中，否则会被 vue 进行深度 reactive）
      this.sheetInstance = instance
    }
  }
}
</script>
```

:::warning
在编辑 sheet 的场景下，可能初始的 workbook 数据会很大，不应该将其放在 data 函数里面，否则 vue 进行深度 reactive 会有一定的性能损耗。此时可通过手动调用 `this.sheetInstance.createWorkbook(data)` 来设置 workbook 数据。
:::

## Vue3

### 安装

::: code-group

```bash [npm]
npm install @xquant/sheet-core @xquant/sheet-vue3 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

```bash [yarn]
yarn add @xquant/sheet-core @xquant/sheet-vue3 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

```bash [pnpm]
pnpm add @xquant/sheet-core @xquant/sheet-vue3 --registry http://172.19.5.13:8081/repository/xquant-npm-public/
```

:::

### 使用

```vue
<template>
  <UniverSheet @init="sheetInit" :data="workbook" />
</template>

<script lang="ts" setup>
import { shallowRef } from "vue";
import UniverSheet from "@xquant/sheet-vue3"; 
import "@xquant/sheet-core/lib/index.css"

const workbook = shallowRef({})
// 获取实例
let sheetInstance = null

const sheetInit = (instance) => {
  sheetInstance = instance
}
</script>
```
