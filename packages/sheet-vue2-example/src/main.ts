
import Vue from 'vue';
import App from './App.vue';
import UniverSheet from "@xquant/sheet-vue2";
import "@xquant/sheet-core/index.css"
import './style.css'

Vue.config.productionTip = false;

Vue.use(UniverSheet)
new Vue({
  render: h => h(App),
}).$mount('#app')