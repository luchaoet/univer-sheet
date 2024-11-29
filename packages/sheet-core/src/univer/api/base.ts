import type { Univer, FUniver } from "@univerjs/core";

export class SheetCoreBase {
  univer: Univer;
  univerAPI: FUniver;

  constructor(univer: Univer, univerAPI: FUniver) {
    this.univer = univer;
    this.univerAPI = univerAPI;
  }

  getSheetHooks() {
    return this.univerAPI.getSheetHooks()
  }
  getActiveWorkbook() {
    return this.univerAPI.getActiveWorkbook();
  }
  getActiveSheet() {
    return this.getActiveWorkbook()?.getActiveSheet();
  }
}