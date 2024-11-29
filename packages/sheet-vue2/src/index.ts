import UniverSheet from './App.vue'
import type { App } from 'vue'

UniverSheet.install = function (Vue: App) {
  Vue.component(UniverSheet.name, UniverSheet);
}
export default UniverSheet

export type UniverSheetInstance = InstanceType<typeof UniverSheet>
