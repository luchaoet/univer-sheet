import type { Univer, FUniver, IObjectMatrixPrimitiveType, ICellData } from "@univerjs/core";
import type { FWorksheet } from '@univerjs/sheets/facade';
import { SheetCoreBase } from "./base";

export class SheetCoreWorksheet extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  // 创建 sheet 页
  createSheet(name: string, rows: number, column: number) {
    const activeWorkbook = this.getActiveWorkbook()
    return activeWorkbook?.create(name, rows, column)
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
  deleteSheetBySheetId(sheetId: string): void {
    const sheet = this.getSheetBySheetId(sheetId)
    sheet && this.getActiveWorkbook()?.deleteSheet(sheet);
  }
  deleteSheetByName(name: string): void {
    const sheet = this.getSheetByName(name)
    sheet && this.getActiveWorkbook()?.deleteSheet(sheet);
  }
  getSheetData(): IObjectMatrixPrimitiveType<ICellData> {
    const sheets = this.getActiveWorkbook()?.save()?.sheets || {};
    const sheetId = this.getSheetId()
    return sheetId ? sheets[sheetId]?.cellData || {} : {}
  }
  getSheetDataBySheetId(sheetId: string): IObjectMatrixPrimitiveType<ICellData> {
    const sheets = this.getActiveWorkbook()?.save()?.sheets || {};
    return sheets[sheetId]?.cellData || {}
  }
  getSheetDataByName(name: string) {
    const sheets = this.getActiveWorkbook()?.save()?.sheets || {};
    const sheetId = this.getSheetByName(name)?.getSheetId();
    return sheetId ? sheets[sheetId]?.cellData || {} : {}
  }
}