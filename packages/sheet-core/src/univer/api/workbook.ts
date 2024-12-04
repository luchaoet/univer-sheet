import type { Univer, FUniver, IWorkbookData } from "@univerjs/core";
import type { FRange } from '@univerjs/sheets/facade';
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
  createWorkbook(data: Partial<IWorkbookData>) {
    return this.univer.createUnit(UniverInstanceType.UNIVER_SHEET, data);
  }
  getData() {
    return this.getActiveWorkbook()?.save();
  }
  refresh() {
    return this.getActiveSheet()?.refreshCanvas();
  }
  resize () {
    
  }
  setWorkbookName(name: string) {
    
  }
  getWorkbookName() {
    return this.getActiveWorkbook()?.getName();
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
  refreshFormula() {
    const formula = this.univerAPI.getFormula()
    return formula.executeCalculation()
  }
}