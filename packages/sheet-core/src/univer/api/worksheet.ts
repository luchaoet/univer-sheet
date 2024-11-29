import type { Univer, FUniver } from "@univerjs/core";
import { UniverInstanceType } from '@univerjs/core';
import { SheetCoreBase } from "./base";

export class SheetCoreWorksheet extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  createSheet(data: Partial<unknown>) {
    return this.univer.createUnit(UniverInstanceType.UNIVER_SHEET, data);
  }
  getSheetHooks() {
    return this.univerAPI.getSheetHooks()
  }
  getSelection() {
    return this.getActiveSheet()?.getSelection() 
  }
  getActiveRange() {
    return this.getActiveSheet()?.getActiveRange() 
  }
  setFrozenColumns(columns:number) {
    const worksheet = this.getActiveSheet();
    worksheet?.setFrozenColumns(columns);
  }
   setFrozenRows(rows:number) {
    const worksheet = this.getActiveSheet();
    worksheet?.setFrozenRows(rows);
  }
  getFreeze() {
    const worksheet = this.getActiveSheet();
    return worksheet?.getFreeze();
  }
  getFrozenColumns() {
    const worksheet = this.getActiveSheet();
    return worksheet?.getFrozenColumns();
  }
  getFrozenRows() {
    const worksheet = this.getActiveSheet();
    return worksheet?.getFrozenRows();
  }
  cancelFreeze() {
    const worksheet = this.getActiveSheet();
    return worksheet?.cancelFreeze();
  }
}