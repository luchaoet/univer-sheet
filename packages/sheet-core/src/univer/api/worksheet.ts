import type { Univer, FUniver } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCoreWorksheet extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  getSheetHooks() {
    return this.univerAPI.getSheetHooks()
  }
  getSelection() {
    return this.getActiveSheet()?.getSelection() 
  }
}