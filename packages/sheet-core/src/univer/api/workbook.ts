import type { Univer, FUniver, IWorkbookData } from "@univerjs/core";
import type { FWorksheet, FRange } from '@univerjs/sheets/facade';
import { UniverInstanceType } from '@univerjs/core';
import { SheetCoreBase } from "./base";
export class SheetCoreWorkbook extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  dispose() {
    const unitId = this.getActiveWorkbook()?.getId()
    if(unitId){
      this.univerAPI.disposeUnit(unitId)
    }
  }
  // 创建工作簿
  createUniverSheet(data: Partial<unknown>) {
    return this.univer.createUnit(UniverInstanceType.UNIVER_SHEET, data);
  }
  // 创建工作簿
  createWorkbook(data: Partial<IWorkbookData>) {
    return this.univerAPI.createUniverSheet(data);
  }
  // 创建 sheet 页
  createSheet(name: string, rows: number, column: number) {
    const activeWorkbook = this.getActiveWorkbook()
    return activeWorkbook?.create(name, rows, column)
  }
  getData() {
    return this.getActiveWorkbook()?.save();
  }
  refresh() {
    
  }
  resize () {
    
  }
  setWorkbookName(name: string) {
    
  }
  getWorkbookName() {
    return this.getActiveWorkbook()?.getName();
  }
  getSheets() {
    return this.getActiveWorkbook()?.getSheets();
  }
  getSheetBySheetId(sheetId: string): FWorksheet | null {
    return this.getActiveWorkbook()?.getSheetBySheetId(sheetId) || null;
  }
  getSheetByName(name: string): FWorksheet | null {
    return this.getActiveWorkbook()?.getSheetByName(name) || null;
  }
  setActiveSheet(sheet: FWorksheet): FWorksheet | null {
    return this.getActiveWorkbook()?.setActiveSheet(sheet) || null;
  }
  insertSheet() {
    return this.getActiveWorkbook()?.insertSheet()
  }
  deleteSheet(sheet: FWorksheet): void {
    this.getActiveWorkbook()?.deleteSheet(sheet)
  }
  undo() {
    return this.getActiveWorkbook()?.undo();
  }
  redo() {
    return this.getActiveWorkbook()?.redo();
  }
  setEditable(value: boolean) {
    this.getActiveWorkbook()?.setEditable(value);
  }
  setActiveRange(range: FRange): void {
    this.getActiveWorkbook()?.setActiveRange(range);
  }
  getActiveRange() {
    return this.getActiveWorkbook()?.getActiveRange();
  }
  refreshFormula() {
    
  }
}