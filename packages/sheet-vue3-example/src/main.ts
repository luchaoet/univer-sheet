import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UniverSheet from "@xquant/sheet-vue3";
import "@xquant/sheet-core/index.css"

const app = createApp(App);
app.use(UniverSheet)
app.mount('#app')
