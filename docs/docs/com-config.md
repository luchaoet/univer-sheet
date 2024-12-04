# 组件配置

主要包含组件属性、事件

```vue
<template>
  <UniverSheet 
    :data="{}" 
    theme="green"
    locale="ZH_CN"
    ...
    @init="init"
    @dispose="dispose"
    ...
  />
</template>
```

## 组件属性


| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 工作簿初始数据 |`IWorkbookData`|-| `{}` |
| theme | 主题 |`string`| `default` `green` | `default` |
| locale | 国际化|`string` | `EN_US` `ZH_CN` | `ZH_CN` |
| filter | 筛选功能 | `boolean` |-| `true` |
| sort | 排序功能 | `boolean` |-| `true` |
| conditionalFormatting | 条件格式功能 | `boolean` |-| `false` |
| hyperLink | 超链接功能 | `boolean` |-| `false` |
| comment | 评论功能 | `boolean` |-| `false` |
| findReplace | 查找替换功能 | `boolean` |-| `false` |
| crosshairHighlight | 十字高亮功能 | `boolean` |-| `false` |
| zenEditor | 禅编辑器功能 | `boolean` |-| `false` |
| watermark | 水印功能 | `boolean` |-| `false` |
| print | 打印功能 | `boolean` |-| `false` |

## 组件事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
|init|初始化完成时触发|`(instance: SheetCore) => void`|
|dispose|销毁时触发|-|
|beforeCommandExecute|univer命令执行前触发|`({id: string, type?: CommandType, params?: T}, options?: IExecutionOptions)`|
|commandExecuted|univer命令执行完成触发|`({id: string, type?: CommandType, params?: T}, options?: IExecutionOptions)`|
|cellClick|单元格点击触发|`(cell: IHoverRichTextInfo) => void`|
|cellHover|鼠标在单元格上悬停时触发|`(cell: IHoverRichTextPosition) => void`|
|cellPointerMove|鼠标在单元格上移动时触发|`(cell: IHoverCellPosition) => void`|
|cellPointerOver|鼠标移入单元格触发|`(cellPos: IHoverCellPosition) => void`|
|cellDragOver|当元素或文本选择被拖动到单元格时触发|`(cellPos: IDragCellPosition) => void`|
|cellDrop|当元素或文本选择被拖放到单元格上时触发|`(cellPos: IDragCellPosition) => void`|
|beforeCellEdit|单元格编辑前触发|`(params: IEditorBridgeServiceVisibleParam) => void`|
|afterCellEdit|单元格编辑后触发|`(params: IEditorBridgeServiceVisibleParam) => void`|
|selectionChange|选区变化时触发|`(range: IRange[]) => void`|
