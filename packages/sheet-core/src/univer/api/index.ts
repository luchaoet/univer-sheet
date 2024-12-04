import { SheetCoreCell } from "./cell";
import { SheetCoreBase } from "./base";
import { SheetCoreGrid } from "./grid";
import { SheetCorePermission } from "./permission";
import { SheetCoreRange } from "./range";
import { SheetCoreWorkbook } from "./workbook";
import { SheetCoreWorksheet } from "./worksheet";
import type { Univer, FUniver, IRange } from "@univerjs/core";
export class SheetCore extends SheetCoreBase {
  constructor(univer: Univer, univerAPI: FUniver, emit?: Function) {
    super(univer, univerAPI)

    if(emit) {
      this.getActiveWorkbook()?.onBeforeCommandExecute((command) => {
        emit('beforeCommandExecute', command);
      })
      this.getActiveWorkbook()?.onCommandExecuted((command) => {
        emit('commandExecuted', command);
      })
      this.getActiveWorkbook()?.onSelectionChange((selections: IRange[]) => {
        emit('selectionChange', selections);
      })
      this.getActiveWorkbook()?.onCellHover((cell) => {
        emit('cellHover', cell)
      })
      this.getActiveWorkbook()?.onCellClick((cell) => {
        emit('cellClick', cell)
      })

      this.getSheetHooks()?.onCellPointerMove((cellPos) => {
        emit('cellPointerMove', cellPos)
      })
      this.getSheetHooks()?.onCellPointerOver((cellPos) => {
        emit('cellPointerOver', cellPos)
      })
      this.getSheetHooks()?.onCellDragOver((cellPos) => {
        emit('cellDragOver', cellPos)
      })
      this.getSheetHooks()?.onCellDrop((cellPos) => {
        emit('cellDrop', cellPos)
      })
      
      this.getSheetHooks()?.onBeforeCellEdit((params) => {
        emit('beforeCellEdit', params)
      })
      this.getSheetHooks()?.onAfterCellEdit((params) => {
        emit('afterCellEdit', params)
      })

      this.getActiveSheet()?.onCellDataChange((params) => {
        emit('cellDataChange', params)
      })
    }
  }
}

export interface SheetCore extends SheetCoreRange, SheetCoreCell, SheetCoreGrid, SheetCoreWorkbook, SheetCoreWorksheet, SheetCorePermission {}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(SheetCore, [SheetCoreRange, SheetCoreCell, SheetCoreGrid, SheetCoreWorkbook, SheetCoreWorksheet, SheetCorePermission]);

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}