import type { Univer, FUniver } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCoreWorksheet extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  getSheetId() {
    return this.getActiveSheet()?.getSheetId() || null
  }
  getSheetName() {
    return this.getActiveSheet()?.getSheetName() || null
  }
  getSheetHooks() {
    return this.univerAPI.getSheetHooks()
  }
  getSelection() {
    return this.getActiveSheet()?.getSelection() 
  }
}