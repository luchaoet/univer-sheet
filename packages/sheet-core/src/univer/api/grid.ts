import type { Univer, FUniver, IFreeze } from "@univerjs/core";
import type { FWorksheet, FRange,  } from '@univerjs/sheets/facade';
import { SheetCoreBase } from "./base";

export class SheetCoreGrid extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  getMaxColumns() {
    return this.getActiveSheet()?.getMaxColumns() || 0
  }
  getMaxRows() {
    return this.getActiveSheet()?.getMaxRows() || 0
  }
  insertRowAfter(afterPosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertRows(afterPosition) : Promise.reject()
  }
  insertRowBefore(beforePosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertRowBefore(beforePosition) : Promise.reject()
  }
  insertRows(rowIndex: number, numRows: number = 1) {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertRows(rowIndex, numRows) : Promise.reject()
  }
  insertRowsAfter(afterPosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertRowsAfter(afterPosition, howMany) : Promise.reject()
  }
  insertRowsBefore(beforePosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertRowsBefore(beforePosition, howMany) : Promise.reject()
  }
  deleteRow(rowPosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.deleteRow(rowPosition) : Promise.reject()
  }
  deleteRows(rowPosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.deleteRows(rowPosition, howMany) : Promise.reject()
  }

  insertColumnAfter(afterPosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertColumnAfter(afterPosition) : Promise.reject()
  }
  insertColumnBefore(beforePosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertColumnBefore(beforePosition) : Promise.reject()
  }
  insertColumns(columnIndex: number, numColumns: number = 1): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertColumns(columnIndex, numColumns) : Promise.reject()
  }
  insertColumnsAfter(afterPosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertColumnsAfter(afterPosition, howMany) : Promise.reject()
  }
  insertColumnsBefore(beforePosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.insertColumnsBefore(beforePosition, howMany) : Promise.reject()
  }
  deleteColumn(columnPosition: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.deleteColumn(columnPosition) : Promise.reject()
  }
  deleteColumns(columnPosition: number, howMany: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.deleteColumns(columnPosition, howMany) : Promise.reject()
  }

  hideRow(row: FRange): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.hideRow(row) : Promise.reject()
  }
  hideRows(rowIndex: number, numRows: number = 1): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.hideRows(rowIndex, numRows) : Promise.reject()
  }
  showRow(row: FRange): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.unhideRow(row) : Promise.reject()
  }
  showRows(rowIndex: number, numRows: number = 1): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.showRows(rowIndex, numRows) : Promise.reject()
  }

  hideColumn(column: FRange): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.hideColumn(column) : Promise.reject()
  }
  hideColumns(columnIndex: number, numColumns: number = 1): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.hideColumns(columnIndex, numColumns) : Promise.reject()
  }
  showColumn(column: FRange): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.unhideColumn(column) : Promise.reject()
  }
  showColumns(columnIndex: number, numColumns: number = 1): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.showColumns(columnIndex, numColumns) : Promise.reject()
  }

  setRowHeight(rowPosition: number, height: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.setRowHeight(rowPosition, height) : Promise.reject()
  }
  setRowHeights(startRow: number, numRows: number, height: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.setRowHeights(startRow, numRows, height) : Promise.reject()
  }
  setColumnWidth(columnPosition: number, width: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.setColumnWidth(columnPosition, width) : Promise.reject()
  }
  setColumnWidths(startColumn: number, numColumns: number, width: number): Promise<FWorksheet> {
    const activeSheet = this.getActiveSheet();
    return activeSheet ? activeSheet.setColumnWidths(startColumn, numColumns, width) : Promise.reject()
  }

  setFreeze(freeze: IFreeze): boolean {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.setFreeze(freeze) || false
  }
  cancelFreeze() {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.cancelFreeze() || false
  }
  getFreeze() {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.getFreeze();
  }
  setFrozenColumns(columns: number): void {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.setFrozenColumns(columns);
  }
  setFrozenRows(rows: number): void {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.setFrozenRows(rows);
  }
  getFrozenColumns(): number {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.getFrozenColumns() || 0;
  }
  getFrozenRows(): number {
    const activeSheet = this.getActiveSheet();
    return activeSheet?.getFrozenRows() || 0;
  }
}