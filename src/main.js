import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iView from 'iview'
// 自定义主题
import './ctmsTheme/dist/iview.css'
// 验证规则可在 rules.js文件添加
import rules from '@/utils/rules'

Vue.config.productionTip = false
Vue.prototype.$rules = rules
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
