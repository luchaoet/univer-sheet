# 自定义

## 自定义工具条 / 右键菜单

```vue
<template>
  <UniverSheet  :custom-menu="customMenu" />
</template>
```

#### customMenu 示例
```js
import { RibbonStartGroup, ContextMenuGroup, MenuItemType } from '@xquant/sheet-core'
```
```json
[
  {
    ribbonStartGroup: RibbonStartGroup.OTHERS,
    contextMenuGroup: ContextMenuGroup.OTHERS,
    id: 'custom-menu.operation.button',
    commandType: CommandType.OPERATION,
    menuItemType: MenuItemType.BUTTON,
    handler: async (accessor: IAccessor) => {
      console.log('Single button operation', accessor);
      return true;
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.981 6.981 0 0 0-5.147 2.256A7.966 7.966 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.979 6.979 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
      </svg>`,
    tooltip: '这是我自定义的一个按钮',
    title: {
      zhCN: '自定义按钮',
      enUS: 'Button',
    }
  },
  {
    // ...
  }
]
```
| 属性 | 类型 |可选值 | 描述 |
| --- | --- | --- | --- |
|ribbonStartGroup|`string`|`RibbonStartGroup.HISTORY` `RibbonStartGroup.FORMAT` `RibbonStartGroup.LAYOUT` `RibbonStartGroup.FORMULAS_INSERT` `RibbonStartGroup.FORMULAS_VIEW` `RibbonStartGroup.FILE` `RibbonStartGroup.OTHERS`|在工具栏的位置|
|contextMenuGroup|`string`|`ContextMenuGroup.FORMAT` `ContextMenuGroup.LAYOUT` `ContextMenuGroup.DATA` `ContextMenuGroup.OTHERS`|在右键菜单的位置|
|id|`string`|-|唯一id|
|commandType|`number`|`CommandType.COMMAND` `CommandType.OPERATION` `CommandType.MUTATION`|命令类型|
|menuItemType|`number`|`MenuItemType.BUTTON` `MenuItemType.SELECTOR` `MenuItemType.BUTTON_SELECTOR` `MenuItemType.SUBITEMS`|按钮类型|
|handler|`async (accessor: IAccessor) => {}`|-|按钮点击触发函数|
|icon|`string`|-|svg图标|
|tooltip|`string \| {zhCN: string, enUS: string}`|-|按钮气泡提示|
|title|`string \| {zhCN: string, enUS: string}`|-|按钮提示|
|disabled|-|-|禁用，暂未支持|
|hidden|-|-|隐藏，暂未支持|