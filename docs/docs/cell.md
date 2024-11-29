# 单元格

单元格是表格中最基本的组成单位，用于存储数据。[官方文档](https://docs.univer.ai/en-US/guides/sheets/getting-started/cell-data)

| 属性名 | 全称 | 说明 | 示例 |
| --- | --- | --- | --- |
| s | style id or style object | 一个指向 IStyleData 数据的 id 或数据对象本身 | `{}` |
| v | Origin value | 原始值 | - |
| t | data type  | 数据类型，1 string, 2 number, 3 boolean, 4 force string | 1 |
| f | formula  | 公式 |  `=SUM(A1:B4)` |
| si | formula id | 公式 id | - |
| p | Univer Docs | 富文本 | - |
| custom | custom | 自定义业务数据 | - |

## 原始值

```ts
// IWorksheetData
{
  cellData: {
    0: {
      0: { v: '1' },
      1: { v: 1 },
    },
  }
}
```

## 单元格样式

Univer 会将相同的样式提取出来，生成一个唯一的 id，并在单元格中引用这个 id。这样可以减少数据存储需要的空间。

```ts
// IWorkbookData
{
  styles: {
    'random_style_id_1': {
      fs: 12,
      bg: {
        rgb: '#ff0000'
      }
    }
  }
}
```

单元格中引用样式：

```ts
// IWorksheetData
{
  cellData: {
    0: {
      0: {
        v: 'A1',
        s: 'random_style_id_1'
      },
      1: {
        v: 'B1',
        s: 'random_style_id_1'
      },
    },
  }
}
```

:::tip
单元格样式本身也可以直接配置成一个对象，但是这样会占用更多的空间。
:::

|属性|描述|
|----|----|
|ff|字体|
|fs|字号|
|it|斜体|
|bl|粗体|
|ul|下划线|
|st|删除线|
|ol|上划线|
|bg|背景颜色|
|bd|边框|
|cl|字体颜色|
|va|上标或下标|
|tr|文本旋转|
|td|文本方向|
|ht|水平对齐方式|
|vt|垂直对齐方式|
|tb|截断溢出|
|pd|内边距|
