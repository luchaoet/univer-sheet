import type { Univer, FUniver, CellValue, ICellData } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCoreRange extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  getRange(startRow: number, startColumn: number, endRow?: number, endColumn?: number) {
    const sheet = this.getActiveSheet();
    return sheet?.getRange(startRow, startColumn, endRow || startRow, endColumn || startColumn)
  }
  setRangeValue(startRow: number, startColumn: number, endRow: number, endColumn: number, value: CellValue | ICellData): Promise<boolean> {
    const sheet = this.getActiveSheet();
    const range = sheet?.getRange(startRow, startColumn, endRow, endColumn);
    return range ? range.setValue(value) : Promise.resolve(false)
  }
  getRangeValue(row: number, column: number, endRow?: number, endColumn?: number) {
    const range = this?.getRange(row, column, endRow, endColumn);
    return range ? range.getValue() : null;
  }
  setRangeFormat(startRow: number, startColumn: number, endRow: number, endColumn: number, format: string) {
    const range = this?.getRange(startRow, startColumn, endRow, endColumn);
    range && range.setValue({f: format});
  }
  clearRange(startRow: number, startColumn: number, endRow?: number, endColumn?: number) {
    const range = this?.getRange(startRow, startColumn, endRow, endColumn);
    range && range.setValue({v: null});
  }
  setActiveRange(startRow: number, startColumn: number, endRow?: number, endColumn?: number): void {
    const sheet = this.getActiveSheet();
    const range = sheet?.getRange(startRow, startColumn, endRow || startRow, endColumn || startColumn)
    range && this.getActiveWorkbook()?.setActiveRange(range);
  }
  getActiveRange() {
    return this.getActiveWorkbook()?.getActiveRange();
  }
}