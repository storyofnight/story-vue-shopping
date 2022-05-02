// 本地在线开发
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 树状图依赖包

// eslint-disable-next-line import/no-duplicates
import ZkTable from 'vue-table-with-tree-grid'

// eslint-disable-next-line import/no-duplicates
import TreeTable from 'vue-table-with-tree-grid'
// Vue 富文本编辑器插件 vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
Vue.use(ZkTable)
Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false
// 获取后台数据库数据地址
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  NProgress.start()
  console.log(config)
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  NProgress.done()
  return config
})

axios.interceptors.request.use(config => {
  return config
})
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
// 全局时间过滤器
Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // yyyy-mm-dd hh:mm:ss
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
