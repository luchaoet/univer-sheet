import type { IFunctionInfo, IFunctionNames, BaseFunction } from '@univerjs/engine-formula'
import type { 
  ILocales, Ctor, Plugin, CommandType, IAccessor, UniverInstanceType, 
  Univer, FUniver, IWorkbookData, UnitModel, IFreeze
} from '@univerjs/core';
import type { FSheetHooks, FWorksheet, FWorkbook, FRange, FSelection } from '@univerjs/sheets/facade';
import type { MenuItemType } from '@univerjs/ui';
import { Observable } from 'rxjs'

// export type * from '@univerjs/core'
export {
  IFunctionInfo, IFunctionNames, BaseFunction,
  ILocales, Ctor, Plugin, CommandType, IAccessor,
  MenuItemType
}

export type Locale = "EN_US" | "ZH_CN";

type IFormulaCustomValue = {
  locales: ILocales
  functionInfo: IFunctionInfo
  functionClass: Ctor<BaseFunction>
}

export type IFormulaCustom = Record<IFunctionNames, IFormulaCustomValue>
export type IComponentRegister = Record<string, any>

export type CustomMenuItemType = {
  id: string,
  order?: number,
  icon: string,
  tooltip: {zhCN: string, enUS: string} | string,
  title: {zhCN: string, enUS: string} | string,

  ribbonStartGroup?: string,
  contextMenuPosition?: string,
  contextMenuGroup?: string,

  commandType: CommandType,
  menuItemType: MenuItemType.BUTTON,

  handler: (accessor: IAccessor) => Promise<boolean>,
  disabled$?: (accessor: IAccessor, observable: Observable<boolean>) => Observable<boolean>,
  hidden$?: (accessor: IAccessor, targetUniverType: UniverInstanceType, observable: Observable<boolean>) => Observable<boolean>,
}
export type CustomMenuType = CustomMenuItemType[]

export type UnitOptions = {
  sort?: boolean
  locale?: Locale
  filter?: boolean
  numfmt?: boolean
  comment?: boolean
  hyperLink?: boolean
  findReplace?: boolean
  makeCurrent?: boolean
  watermark?: boolean
  advanced?: boolean
  zenEditor?: boolean
  theme?: string | object
  crosshairHighlight?: boolean
  formulaCustom?: IFormulaCustom
  conditionalFormatting?: boolean
  componentRegister?: IComponentRegister
  plugins?: Array<typeof Plugin>,
  customMenu?: CustomMenuType,
}

export type SheetInstance = {
  univer: Univer,
  univerAPI: FUniver,
  save: () => IWorkbookData | null,
  dispose: () => void,
  createSheet: (data: Partial<unknown>) => UnitModel<object, number>,
  getSheetHooks: () => FSheetHooks,
  getActiveSheet: () => FWorksheet | null,
  getActiveWorkbook: () => FWorkbook | null,
  getRange: (startRow: number, startColumn: number, endRow?: number, endColumn?: number) => FRange | null,
  getSelection: () => FSelection | null,
  getActiveRange: () => FRange | null,
  getFreeze: () => IFreeze | null,
  getFrozenRows: () => number | null,
  getFrozenColumns: () => number | null,
  setFrozenRows: (rows: number) => void,
  setFrozenColumns: (columns: number) => void,
  cancelFreeze: () => void,
}