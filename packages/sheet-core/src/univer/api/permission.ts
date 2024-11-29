import{ RangeProtectionPermissionEditPoint, WorkbookEditablePermission, WorksheetEditPermission } from "@univerjs/sheets"
import type { Univer, FUniver, IRange } from "@univerjs/core";
import { SheetCoreBase } from "./base";

export class SheetCorePermission extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver) {
    super(univer, univerAPI)
  }
  setWorkbookPermission(isEditable: boolean) {
    const permission = this.univerAPI.getPermission();
    const unitId = this.univerAPI.getActiveWorkbook()!.id;
    // unitId is the workbook id, WorkbookEditablePermission is the permission point, import { WorkbookEditablePermission } from '@univerjs/sheets', false means the permission is not available
    permission.setWorkbookPermissionPoint(unitId, WorkbookEditablePermission, isEditable)
  }
  async setSheetPermission(sheetId: string, isEditable: boolean) {
    const permission = this.univerAPI.getPermission();
    const unitId = this.univerAPI.getActiveWorkbook()!.id;
    // Create worksheet permission, unitId is the workbook id, subUnitId is the sheet id, the generated permission is a basic permission used for rendering permission areas
   await permission.addWorksheetBasePermission(unitId, sheetId);
    permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetEditPermission, isEditable);
  }
  async setRangePermission(sheetId: string, ranges: IRange[]) {
    const permission = this.univerAPI.getPermission();
    const unitId = this.univerAPI.getActiveWorkbook()!.id;
    const res = await permission.addRangeBaseProtection(unitId, sheetId, ranges);
    // The response differs from worksheet permissions as a sheet may have multiple range protections, so ruleId is used for storing the unique permission rule, and permissionId is for combining permission points.
    const { permissionId } = res!;
    permission.setRangeProtectionPermissionPoint(unitId, sheetId, permissionId, RangeProtectionPermissionEditPoint, false);
  }
}