import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
