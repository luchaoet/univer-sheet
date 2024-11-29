# 权限控制

使用 univer 官方提供的权限控制略微有些麻烦，为了方便使用，我们封装了权限控制功能，也尽量不因为版本升级而导致 API 不兼容。

[官方文档](https://docs.univer.ai/en-US/guides/sheets/features/core/permission)

## 工作簿权限

```ts
 // 禁止整个工作簿编辑
instance.setWorkbookPermission(false)
```

## 工作表权限

```ts
 // 禁止工作表编辑
instance.setSheetPermission(sheetId, false)
```

## 单元格范围权限

```ts
// 禁止范围内的单元格编辑
instance.setRangePermission(sheetId, ranges, false)
```
