import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// scss
import '@/styles/index.scss'

// 引入自定义组件
import './components/global'

// 引入全局filters
import './filters/index'

// 路由拦截
import './router/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
