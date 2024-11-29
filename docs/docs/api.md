# API

通过 `createUniverSheet` 函数创建的 `sheetInstance` 对象，提供了以下方法：

## 单元格

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| exitEditMode ||||
| setCellValue ||||
| getCellValue ||||
| clearCell ||||
| setCellFormat | |||

## 行列

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| insertRow ||||
| deleteRow ||||
| insertColumn ||||
| deleteColumn ||||
| setFrozen ||||
| cancelFrozen ||||
| hideRow ||||
| hideColumn ||||
| showRow ||||
| showColumn ||||

## 选区

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| getRange ||||
| getRangeValue ||||
| setRangeValue ||||
| clearRange ||||
| setRangeFormat ||||

## 权限控制

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| setWorkbookPermission | `(isEditable: boolean)` | `void` | 设置整个工作簿是否可编辑 |
| setSheetPermission | `(sheetId: string, isEditable: boolean)` | `Promise` | 设置某个工作表是否可编辑 |
| setRangePermission | `(sheetId: string, ranges: IRange[], isEditable: boolean)` | `Promise` | 设置某个选取范围是否可编辑 |

## 工作表

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| getSheet ||||
| getAllSheets ||||
| getSheetData ||||
| updateSheetData ||||

## 工作簿

| 方法 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| createWorkbook | data | - | 初始化工作簿 |
| getData ||||
| resize ||||
| refresh ||||
| destroy ||||
| undo ||||
| redo ||||
| refreshFormula ||||

## 使用 univer 本身的 api

通过 `createUniverSheet` 函数创建的 `sheetInstance` 对象，具有两个属性用于访问 univer 本身的 api：

- `univerSheet.univer`：[univer 对象](https://reference.univer.ai/@univerjs/core/classes/Univer)
- `univerSheet.univerAPI`： [univerAPI 对象](https://reference.univer.ai/@univerjs/core/classes/FUniver)
