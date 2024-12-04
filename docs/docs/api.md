# API

## createUniverSheet

创建一个 `SheetCore` 对象, 使用vue2/vue3组件时可忽略该方法，内部已经创建了该对象，可通过 `init` 事件获取

### 函数签名

```ts
function createUniverSheet: SheetCore (
  container: HTMLElement, 
  data: Partial<IWorkbookData> | false, 
  options: UnitOptions = {}){
    //...
}
```

通过 `createUniverSheet` 函数创建的 `SheetCore` 对象，提供了以下方法：

## 单元格

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| setCellValue | `(row: number, column: number, value: CellValue \| ICellData)` |`Promise<boolean>`| 设置单元格的值 |
| getCellValue | `(row: number, column: number)` | `CellValue \| null` | 获取单元格的值 |
| clearCell | `(row: number, column: number)` | `void` | 清除单元格的值 |
| setCellFormat | `(row: number, column: number, format: string)` | `void` | 设置单元格公式 |

## 行列

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| getMaxColumns | - |`number`| 获取当前sheet页最大列数 |
| getMaxRows | - |`number`| 获取当前sheet页最大行数 |
| insertRowAfter |`(afterPosition: number)`|`Promise<FWorksheet>`| 在指定行位置之后插入一行 |
| insertRowBefore |`(beforePosition: number)`|`Promise<FWorksheet>`|在指定行位置之前插入一行|
| insertRows |`(rowIndex: number, numRows: number = 1)`|`Promise<FWorksheet>`|在指定位置开始插入一个或多个连续的空白行|
| insertRowsAfter |`(afterPosition: number, howMany: number = 1)`|`Promise<FWorksheet>`|在指定行后插入多行|
| insertRowsBefore |`(beforePosition: number, howMany: number)`|`Promise<FWorksheet>`|在指定行前插入多行|
| deleteRow |`(rowPosition: number)`|`Promise<FWorksheet>`|删除指定行|
| deleteRows |`(rowPosition: number, howMany: number)`|`Promise<FWorksheet>`|删除从指定行位置开始的若干行|
| insertColumnAfter |`(afterPosition: number)`|`Promise<FWorksheet>`|在指定列位置之后插入一列|
| insertColumnBefore |`(beforePosition: number)`|`Promise<FWorksheet>`|在指定列位置之前插入一列|
| insertColumns |`(columnIndex: number, numColumns: number = 1)`|`Promise<FWorksheet>`|在指定位置开始插入一个或多个连续的空白列|
| insertColumnsAfter |`(afterPosition: number, howMany: number)`|`Promise<FWorksheet>`|在指定列位置后插入指定数量的列|
| insertColumnsBefore |`(beforePosition: number, howMany: number)`|`Promise<FWorksheet>`|在指定列位置之前插入若干列|
| deleteColumn |`(columnPosition: number)`|`Promise<FWorksheet>`|删除指定列位置处的列|
| deleteColumns |`(columnPosition: number, howMany: number)`|`Promise<FWorksheet>`|删除从指定列位置开始的若干列|
| hideRow |`(startRow: number, startColumn: number, endRow?: number, endColumn?: number)`|`Promise<FWorksheet>`|隐藏指定范围内的行|
| hideRows |`(rowIndex: number, numRows: number = 1)`|`Promise<FWorksheet>`|隐藏从指定索引开始的一个或多个连续行|
| hideColumn |`(column: FRange)`|`Promise<FWorksheet>`|隐藏指定范围内的一列或多列|
| hideColumns |`(columnIndex: number, numColumns: number = 1)`|`Promise<FWorksheet>`|隐藏从指定索引开始的一个或多个连续列|
| showColumn |`(column: FRange)`|`Promise<FWorksheet>`|取消隐藏指定范围内的列|
| showColumns |`(columnIndex: number, numColumns: number = 1)`|`Promise<FWorksheet>`|取消隐藏从指定索引开始的一个或多个连续列|
| setRowHeight |`(rowPosition: number, height: number)`|`Promise<FWorksheet>`|设置行高（以像素为单位）|
| setRowHeights |`(startRow: number, numRows: number, height: number)`|`Promise<FWorksheet>`|设置指定行的高度（以像素为单位）|
| setColumnWidth |`(columnPosition: number, width: number)`|`Promise<FWorksheet>`|设置列宽（以像素为单位）|
| setColumnWidths |`(startColumn: number, numColumns: number, width: number)`|`Promise<FWorksheet>`|设置指定列的宽度（以像素为单位）|
| setFreeze |`(freeze: IFreeze)`|`boolean`|设置冻结状态|
| getFreeze |-|`IFreeze`|获取冻结状态|
| setFrozenColumns |`(columns: number)`|`boolean`|设置冻结列的数量|
| setFrozenRows |`(rows: number)`|`void`|设置冻结行的数量|
| getFrozenColumns |-|`number`|获取冻结列的数量|
| getFrozenRows |-|`number`|获取冻结行的数量|
| cancelFreeze |-| `boolean` |取消整个 sheet 的冻结|

## 选区

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| getRange |`(startRow: number, startColumn: number, endRow?: number, endColumn?: number)`|`FRange`|获取范围|
| getRangeValue |`(startRow: number, startColumn: number, endRow?: number, endColumn?: number)`|`CellValue \| null`|获取范围的值|
| setRangeValue |`(startRow: number, startColumn: number, endRow: number, endColumn: number, value: CellValue \| ICellData)`|`Promise<boolean>`|设置选区的值|
| clearRange |`(startRow: number, startColumn: number, endRow?: number, endColumn?: number)`|`Promise<boolean>`| 清空当前选区内容 |
| setRangeFormat |`(startRow: number, startColumn: number, endRow: number, endColumn: number, format: string)`|`Promise<boolean>`| 设置选区公式 |
| setActiveRange |`(startRow: number, startColumn: number, endRow?: number, endColumn?: number)`|`void`|激活指定选区|
| getActiveRange |`(value: boolean)`|`FRange`|获取当前激活选区|

## 权限控制

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| setWorkbookPermission | `(isEditable: boolean)` | `void` | 设置整个工作簿是否可编辑 |
| setSheetPermission | `(sheetId: string, isEditable: boolean)` | `Promise` | 设置某个工作表是否可编辑 |
| setRangePermission | `(sheetId: string, ranges: IRange[], isEditable: boolean)` | `Promise` | 设置某个选取范围是否可编辑 |

## 工作表

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| getSheets |-|`FWorksheet[]`|获取所有sheet页数据|
| getSheetBySheetId |`(sheetId: string)`|`FWorksheet \| null`|通过ID获取sheet页|
| getSheetByName |`(name: string)`|`FWorksheet \| null`|通过名称获取sheet页|
| setActiveSheet |`(sheet: FWorksheet)`|`FWorksheet \| null`|激活sheet页|
| insertSheet | - |`FWorksheet`|插入空白sheet页|
| createSheet |`(name: string, rows: number, column: number)`|`FWorksheet`|创建带有特定配置的sheet页|
| deleteSheetBySheetId |`(sheetId: string)`|`void`|通过ID删除sheet页|
| deleteSheetByName |`(name: string)`|`void`|通过名称删除sheet页|
| getSheetData |-| `IObjectMatrixPrimitiveType<ICellData>` | 快捷返回当前sheet页的数据 |
| getSheetDataBySheetId |`(sheetId: string)`| `IObjectMatrixPrimitiveType<ICellData>` | 通过sheetId获取sheet页的数据 |
| getSheetDataByName |`(name: string)`| `IObjectMatrixPrimitiveType<ICellData>` | 通过sheet名称获取sheet页的数据 |

## 工作簿

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| createWorkbook | data | - | 初始化工作簿 |
| getData |-|`IWorkbookData`|保存并获取工作簿数据|
| getWorkbookName |-|`string`|获取工作簿名称|
| refresh | - | `void` | 重绘 canvas |
| dispose |-|`boolean`|销毁工作簿|
| undo |-|`Promise<boolean>`|工作簿撤销|
| redo |-|`Promise<boolean>`|工作簿重做|
| setEditable |`(value: boolean)`|`void`|修改工作簿的编辑权限|
| refreshFormula |-|-|执行计算|

## 使用 univer 本身的 api

通过 `createUniverSheet` 函数创建的 `sheetInstance` 对象，具有两个属性用于访问 univer 本身的 api：

- `univerSheet.univer`：[univer 对象](https://reference.univer.ai/@univerjs/core/classes/Univer)
- `univerSheet.univerAPI`： [univerAPI 对象](https://reference.univer.ai/@univerjs/core/classes/FUniver)
