import type { Univer, FUniver, IWorkbookData } from "@univerjs/core";
import type { FWorksheet } from '@univerjs/sheets/facade';
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
  // 创建 sheet页
  createSheet(name: string, rows: number, column: number) {
    const activeWorkbook = this.getActiveWorkbook()
    return activeWorkbook?.create(name, rows, column)
  }
  getActiveWorkbook() {
    return this.univerAPI.getActiveWorkbook();
  }
  getActiveSheet() {
    return this.univerAPI.getActiveWorkbook()?.getActiveSheet();
  }
  getData() {
    return this.getActiveWorkbook()?.save();
  }
  refresh() {
    
  }
  resize () {
    
  }
  setWorkbookName() {
    
  }
  getWorkbookName() {
    return this.getActiveWorkbook()?.getName();
  }
  getSheets() {
    return this.getActiveWorkbook()?.getSheets();
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
  getActiveRange() {
    return this.getActiveWorkbook()?.getActiveRange();
  }
  refreshFormula() {
    
  }
}