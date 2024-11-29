import type { Univer, FUniver, CellValue, ICellData } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCoreCell extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  exitEditMode () {
    // 退出编辑模式
  }
  setCellFormat () {
  }
  setCellValue(row: number, column: number, value: CellValue | ICellData): Promise<boolean> {
    const sheet = this.univerAPI.getActiveWorkbook()?.getActiveSheet();
    const range = sheet?.getRange(row, column);
    return range ? range.setValue(value) : Promise.resolve(false)
  }
  getCellValue(row: number, column: number) {
    const sheet = this.univerAPI.getActiveWorkbook()?.getActiveSheet();
    const range = sheet?.getRange(row, column);
    return range ? range.getValue() : null;
  }
  clearCell(row: number, column: number) {
    this.setCellValue(row, column, '')
  }
}