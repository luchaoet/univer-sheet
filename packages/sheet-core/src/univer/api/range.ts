import type { Univer, FUniver, CellValue, ICellData } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCoreRange extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  getRange(startRow: number, startColumn: number, endRow?: number, endColumn?: number) {
    const sheet = this.univerAPI.getActiveWorkbook()?.getActiveSheet();
    return sheet?.getRange(startRow, startColumn, endRow || startRow, endColumn || startColumn)
  }
  setRangeValue(row: number, column: number, value: CellValue | ICellData): Promise<boolean> {
    const sheet = this.univerAPI.getActiveWorkbook()?.getActiveSheet();
    const range = sheet?.getRange(row, column);
    return range ? range.setValue(value) : Promise.resolve(false)
  }
  getRangeValue(row: number, column: number) {
    const sheet = this.univerAPI.getActiveWorkbook()?.getActiveSheet();
    const range = sheet?.getRange(row, column);
    return range ? range.getValue() : null;
  }
  setRangeFormat() {
    
  }
  clearRange() {
    
  }
}