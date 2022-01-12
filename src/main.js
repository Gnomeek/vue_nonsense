import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './custom.scss'

Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md', 'lg', 'xl', 'xxl']
})
Vue.config.productionTip = false
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
