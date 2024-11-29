import { LocaleType, Tools } from '@univerjs/presets';
import { Locale } from '../types'
import { ILocales, ILanguagePack } from '@univerjs/core'

import UniverPresetSheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN';
import UniverPresetSheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US';

import UniverPresetSheetsFilterZhCN from '@univerjs/presets/preset-sheets-filter/locales/zh-CN';
import UniverPresetSheetsFilterEnUS from '@univerjs/presets/preset-sheets-filter/locales/en-US';
import SheetsSortZhCN from '@univerjs/presets/preset-sheets-sort/locales/zh-CN';
import SheetsSortEnUS from '@univerjs/presets/preset-sheets-sort/locales/en-US';
import UniverPresetSheetsDataValidationZhCN from '@univerjs/presets/preset-sheets-data-validation/locales/zh-CN';
import UniverPresetSheetsDataValidationEnUS from '@univerjs/presets/preset-sheets-data-validation/locales/en-US';
import UniverPresetSheetsConditionalFormattingZhCN from '@univerjs/presets/preset-sheets-conditional-formatting/locales/zh-CN';
import UniverPresetSheetsConditionalFormattingEnUS from '@univerjs/presets/preset-sheets-conditional-formatting/locales/en-US';
import UniverPresetSheetsHyperLinkZhCN from '@univerjs/presets/preset-sheets-hyper-link/locales/zh-CN';
import UniverPresetSheetsHyperLinkEnUS from '@univerjs/presets/preset-sheets-hyper-link/locales/en-US';
import UniverPresetSheetsDrawingZhCN from '@univerjs/presets/preset-sheets-drawing/locales/zh-CN';
import UniverPresetSheetsDrawingEnUS from '@univerjs/presets/preset-sheets-drawing/locales/en-US';
import sheetsThreadCommentZhCN from '@univerjs/presets/preset-sheets-thread-comment/locales/zh-CN';
import sheetsThreadCommentEnUS from '@univerjs/presets/preset-sheets-thread-comment/locales/en-US';
import UniverPresetSheetsFindReplaceZhCN from '@univerjs/presets/preset-sheets-find-replace/locales/zh-CN';
import UniverPresetSheetsFindReplaceEnUS from '@univerjs/presets/preset-sheets-find-replace/locales/en-US';
import sheetsCrosshairHighlightZhCN from '@univerjs/sheets-crosshair-highlight/locale/zh-CN';
import sheetsCrosshairHighlightEnUS from '@univerjs/sheets-crosshair-highlight/locale/en-US';
import watermarkZhCN from '@univerjs/watermark/locale/zh-CN';
import watermarkEnUS from '@univerjs/watermark/locale/en-US';
import UniverPresetSheetsAdvancedZhCN from '@univerjs/presets/preset-sheets-advanced/locales/zh-CN';
import UniverPresetSheetsAdvancedEnUS from '@univerjs/presets/preset-sheets-advanced/locales/en-US';
import SheetsZenEditorZhCN from '@univerjs/sheets-zen-editor/locale/zh-CN';
import SheetsZenEditorEnUS from '@univerjs/sheets-zen-editor/locale/en-US';

const zhCN = Tools.deepMerge(
  {},
  UniverPresetSheetsCoreZhCN,
  UniverPresetSheetsFilterZhCN,
  SheetsSortZhCN,
  UniverPresetSheetsDataValidationZhCN,
  UniverPresetSheetsConditionalFormattingZhCN,
  UniverPresetSheetsHyperLinkZhCN,
  UniverPresetSheetsDrawingZhCN,
  sheetsThreadCommentZhCN,
  UniverPresetSheetsFindReplaceZhCN,
  sheetsCrosshairHighlightZhCN,
  watermarkZhCN,
  UniverPresetSheetsAdvancedZhCN,
  SheetsZenEditorZhCN,
)

const enUS = Tools.deepMerge(
  {},
  UniverPresetSheetsCoreEnUS,
  UniverPresetSheetsFilterEnUS,
  SheetsSortEnUS,
  UniverPresetSheetsDataValidationEnUS,
  UniverPresetSheetsConditionalFormattingEnUS,
  UniverPresetSheetsHyperLinkEnUS,
  UniverPresetSheetsDrawingEnUS,
  sheetsThreadCommentEnUS,
  UniverPresetSheetsFindReplaceEnUS,
  sheetsCrosshairHighlightEnUS,
  watermarkEnUS,
  UniverPresetSheetsAdvancedEnUS,
  SheetsZenEditorEnUS,
)

export const getLocale = (locale: Locale): LocaleType => {
  return LocaleType[locale] || 'zhCN'
}

export const getLocales = (
  locale: LocaleType,
  FunctionZhCN: { formulaCustom: Record<string, ILanguagePack>; },
  FunctionEnUS: { formulaCustom: Record<string, ILanguagePack>; }
): ILocales => {
  return {
    [locale]: locale === 'zhCN'
      ? Tools.deepMerge({}, FunctionZhCN, zhCN)
      : Tools.deepMerge({}, FunctionEnUS, enUS)
  }
}