import type { Univer, FUniver, IWorkbookData } from "@univerjs/core";
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
  createWorkbook(data: Partial<IWorkbookData>) {
    return this.univerAPI.createUniverSheet(data);
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