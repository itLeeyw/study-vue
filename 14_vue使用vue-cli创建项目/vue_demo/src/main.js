//入口js
//main.js:作用创建vue实例
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: { App:App },//将组件名映射成标签
  template: '<App/>'
})
