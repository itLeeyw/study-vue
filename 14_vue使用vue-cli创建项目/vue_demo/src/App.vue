<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--3.使用组件标签-->
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
  //1. 引入已开发好的组件
  import HelloWorld from './components/HelloWorld'
  export default {
    //2. 映射标签
    components:{
      HelloWorld
    }
  }
</script>

<style>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
