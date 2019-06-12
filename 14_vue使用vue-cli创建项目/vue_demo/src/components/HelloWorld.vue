<template>
    <div>
      <p class="msg">{{msg}}</p>
    </div>
</template>

<script>
    export default {//向外默认配置一个配置对象(与Vue一致)
      data(){//在这里(组件)里面必须写函数---要求
        return {
          msg:'hello world'
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .msg{
    color:red;
    font-size: 50px;
  }
</style>
