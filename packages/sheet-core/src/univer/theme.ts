import { isString, isObject } from "@univerjs/engine-render";
import { Tools, defaultTheme, greenTheme } from "@univerjs/presets"

export const getTheme = (theme: string | object) => {
  if (isString(theme)) {
    return theme === 'green' ? greenTheme : defaultTheme
  } else if (isObject(theme)) {
    return Tools.deepMerge({}, defaultTheme, theme)
  }
}