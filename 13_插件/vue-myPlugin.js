/*
vue 的插件库
*/
(function(){
    // 需要向外暴露的插件对象
    const MyPlugin = {}
    // 插接件对象必须有一个install 方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("Vue 函数对象的方法myGlobalMethod()")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function(el, binding){
            el.textContent = binding.value.toUpperCase()
        })
      
        // 3. 注入组件
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
        })
      
        // 4. 添加实例方法 所以标准化下方法前面加一个$
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log("Vue 函数对象的方法$myMethod()")
        }
      }
      window.MyPlugin = MyPlugin;
})()