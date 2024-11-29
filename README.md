# 安装

### vue2 
npm install @xquant/sheet-core @xquant/sheet-vue2 --save

### vue3
npm install @xquant/sheet-core @xquant/sheet-vue3 --save

# 使用

### vue2 
```javascript
// 局部引入或全局导入
import UniverSheet from "@xquant/sheet-vue2"; 
import "@xquant/sheet-vue2/lib/style.css"; 

import { useUniverAPI } from '@xquant/sheet-core'

<univer-sheet ref="sheet" />

mounted(() => {
  const instance = useUniverAPI(this.$refs.sheet)
})
```
### vue3
```javascript
// 局部引入或全局导入
import UniverSheet from "@xquant/sheet-vue3"; 
import "@xquant/sheet-vue3/lib/style.css"; 

import { useUniverAPI } from '@xquant/sheet-core'

<univer-sheet ref="sheet" />

const sheet = ref()

onMounted(() => {
  const instance = useUniverAPI(sheet.value)
  
})

```

# 配置

```javascript
  <univer-sheet 
    ref="sheet" 
    theme="green"  // 主题 green / default / {--primary-color: #1890ff; --primary-color-hover: #40a9ff;}
    locale="ZH_CN" 
    :sort="true"
    :filter="true"
    :numfmt="true"
    :comment="true"
    :hyper-link="true"
    :find-replace="true"
    :crosshair-highlight="true"
    :conditional-formatting="true"
    :watermark="true"
    :custom-menu="customMenu" // 自定义右键菜单/工具栏
  />
```

### 自定义右键菜单/工具栏
```javascript
import { CommandType, MenuItemType, IAccessor } from '@xquant/sheet-core'

const customMenu = [{
  id: 'custom-menu.operation.button', // 唯一id
  commandType: CommandType.OPERATION,
  menuItemType: MenuItemType.BUTTON,
  handler: async (accessor: IAccessor) => {
    console.log('Single button operation111', accessor);
    return true;
  },
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.981 6.981 0 0 0-5.147 2.256A7.966 7.966 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.979 6.979 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
    </svg>`,
  tooltip: '这是我自定义的一个按钮',
  title: {
    zhCN: '自定义按钮',
    enUS: 'Button',
  },
  disabled$: (accessor, Observable) => {
    return new Observable((subscriber) => {
      return subscriber.next(true)
    })
  },
  hidden$: (accessor, targetUniverType, Observable) => {
    return new Observable((subscriber) => {
      return subscriber.next(false)
    })
  },
}]
```