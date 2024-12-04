import { createUniver as create,  } from '@univerjs/presets';
import type { PluginCtor, Plugin, IWorkbookData } from '@univerjs/core';
// import { UniverInstanceType } from '@univerjs/core';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
// import { setUniverMap, getUniverMap } from './map'
import { getTheme } from './theme'
import { UnitOptions } from '../types'
import { getLocales, getLocale } from './locales'
import { UniverSheetsFilterPreset } from '@univerjs/presets/preset-sheets-filter';
import { UniverSheetsSortPreset } from '@univerjs/presets/preset-sheets-sort';
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation';
import { UniverSheetsConditionalFormattingPreset } from '@univerjs/presets/preset-sheets-conditional-formatting';
import { UniverSheetsHyperLinkPreset } from '@univerjs/presets/preset-sheets-hyper-link';
import { UniverSheetsDrawingPreset } from '@univerjs/presets/preset-sheets-drawing';
import { UniverSheetsThreadCommentPreset } from '@univerjs/presets/preset-sheets-thread-comment';
import { UniverSheetsFindReplacePreset } from '@univerjs/presets/preset-sheets-find-replace';
import { UniverSheetsCrosshairHighlightPlugin } from '@univerjs/sheets-crosshair-highlight';
import '@univerjs/sheets-crosshair-highlight/facade';
import { UniverWatermarkPlugin } from '@univerjs/watermark';
import '@univerjs/watermark/facade';
import { UniverSheetsAdvancedPreset } from '@univerjs/presets/preset-sheets-advanced';
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import customMenuPlugin from './plugin/customMenuPlugin'
import { SheetCore } from './api';

export * from './map'
export {
  SheetCore
}

export function createUniverSheet(container: HTMLElement, data: Partial<IWorkbookData> | false, options: UnitOptions = {}, emit?: Function): SheetCore {
  const locale = getLocale(options.locale || 'ZH_CN');
  const locales = getLocales(locale, {formulaCustom: {}}, {formulaCustom: {}});
  const theme = getTheme(options.theme || "default");
  const customMenu = customMenuPlugin(options.customMenu);

  const presets = [
    UniverSheetsCorePreset({container}),
    UniverSheetsDataValidationPreset(),
    UniverSheetsDrawingPreset(),
    options.filter && UniverSheetsFilterPreset(),
    options.sort && UniverSheetsSortPreset(),
    options.conditionalFormatting && UniverSheetsConditionalFormattingPreset(),
    options.hyperLink && UniverSheetsHyperLinkPreset(),
    options.comment && UniverSheetsThreadCommentPreset(),
    options.findReplace && UniverSheetsFindReplacePreset(),
    options.print && UniverSheetsAdvancedPreset()
  ].filter(i => !!i);

  const optionPlugins = options?.plugins || [];
  const plugins = [
    ...optionPlugins,
    ...customMenu,
    options.crosshairHighlight && UniverSheetsCrosshairHighlightPlugin,
    options.watermark && UniverWatermarkPlugin,
    options.zenEditor && UniverSheetsZenEditorPlugin,
  ].filter(i => !!i) as (PluginCtor<Plugin> | [PluginCtor<Plugin>, any])[]

  const { univerAPI, univer } = create({
    locale,
    locales,
    theme,
    presets,
    plugins,
  })
  // 如果传递了数据就初始表格
  if (data) {
    univerAPI.createUniverSheet(data);
  }
  const api = new SheetCore(univer, univerAPI, emit)
  console.log('api', api)
  return api
}


// export function useUniverAPI(ref: any) {
//   return getUniverMap(ref?.uuid)
// }