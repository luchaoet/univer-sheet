# 数据配置

主要包含工作簿（Workbook）和工作表（Worksheet）相关的配置。

## IWorkbookData

Univer Sheet 的工作簿数据配置，例如：

```ts
const workbookData: IWorkbookData = {
  id: 'unique-workbook-id',
  name: 'My Workbook',
  appVersion: '1.0.0',
  locale: LocaleType.EN_US,
  styles: { /* style definitions */ },
  sheetOrder: ['sheet1', 'sheet2'],
  sheets: {
    sheet1: { /* sheet data */ },
    sheet2: { /* sheet data */ }
  }
};
enum LocaleType {
    EN_US = 'enUS',
    ZH_CN = 'zhCN',
}
```


### IWorkbookData Properties

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| id | `string` | 工作簿唯一标识符 |
| name | `string` | 工作簿文件名 |
| appVersion | `string` | Univer 模型版本，用于实现跨版本兼容 |
| locale | `LocaleType` | i18n 配置 |
| styles | `Record<string, Nullable<IStyleData>>` | 工作簿 UI 样式配置 |
| sheetOrder | `string[]` | 工作表 ID 数组，由于渲染工作表的顺序 |
| sheets | `{ [sheetId: string]: Partial<IWorksheetData> }` | 工作表数据 |
| resources? | `IResources` | univer 插件相关的资源配置 |
| defaultStyle | `Nullable<IStyleData>` | 默认的工作表 UI 样式配置  |

::: tip
[IStyleData](https://docs.univer.ai/en-US/guides/sheets/getting-started/cell-data#cell-style)

[IResources](#插件配置)
:::

## IWorksheetData

Univer Sheet 的工作表数据配置，例如：

```ts
const worksheetData: IWorksheetData = {
  id: 'sheet1',
  name: 'Sheet 1',
  tabColor: '#FF0000',
  hidden: BooleanNumber.FALSE,
  freeze: { xSplit: 1, ySplit: 1, startRow: 1, startColumn: 1 },
  rowCount: 1000,
  columnCount: 26,
  defaultColumnWidth: 100,
  defaultRowHeight: 25,
  mergeData: [],
  cellData: {
    '0': {
      '0': {
        v: 123
      }
    }
  },
  rowData: [],
  columnData: [],
  rowHeader: { width: 40 },
  columnHeader: { height: 20 },
  showGridlines: BooleanNumber.TRUE,
  rightToLeft: BooleanNumber.FALSE
};
```

### IWorksheetData Properties

|字段名|类型|描述|
|----|----|----|
|id|`string`|工作表的唯一标识符。|
|name|`string`|工作表的名称。|
|tabColor|`string`|工作表标签的颜色。|
|hidden|`BooleanNumber`|工作表是否隐藏。默认值：BooleanNumber.FALSE。|
|freeze|`IFreeze`|冻结窗格设置。|
|rowCount|`number`|总行数。|
|columnCount|`number`|总列数。|
|defaultColumnWidth|`number`|列的默认宽度。|
|defaultRowHeight|`number`|行的默认高度。|
|mergeData|`IRange[]`|合并单元格范围的数组。|
|cellData|`IObjectMatrixPrimitiveType<ICellData>`|单元格内容的矩阵。|
|rowData|`IObjectArrayPrimitiveType<Partial<IRowData>>`|行数据对象的数组。|
|columnData|`IObjectArrayPrimitiveType<Partial<IColumnData>>`|列数据对象的数组。|
|rowHeader|`{ width: number; hidden?: BooleanNumber; }`|行标题配置。|
|columnHeader|`{ height: number; hidden?: BooleanNumber; }`|列标题配置。|
|showGridlines|`BooleanNumber`|是否显示网格线。|
|rightToLeft|`BooleanNumber`|工作表是否处于从右到左的模式。|

```ts
enum BooleanNumber {
  TRUE = 1,
  FALSE = 0,
}

interface IFreeze {
    xSplit: number;
    ySplit: number;
    startRow: number;
    startColumn: number;
}
```

:::tip
[更多类型参考](https://github.com/dream-num/univer/tree/dev/packages/core/src/sheets/typedef.ts)
:::

## 插件配置

Univer Sheet 的很多功能都是插件形式提供的，部分插件需要/产出的资源配置通过 `resources` 字段进行配置，例如：

:::warning
通常我们不会手动配置这个字段，因为 excel 文件数据经过 univer 导入以后会自动提取出插件相关的配置。
:::

### 插入图片

### 插入图表

### 水印
