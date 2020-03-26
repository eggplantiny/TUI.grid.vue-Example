import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'

import './utils/polyfill'

import './styles/main.scss'
import 'tui-grid/dist/tui-grid.css'
import 'tui-pagination/dist/tui-pagination.css'

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
