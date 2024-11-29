import UniverSheet from './App.vue'
import type { App } from 'vue';

export default {
  install(app: App) {
    app.component(UniverSheet.name, UniverSheet);
  }
};
export { UniverSheet };
