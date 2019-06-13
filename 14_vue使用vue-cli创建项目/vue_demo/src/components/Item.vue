<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{comment.user}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
    export default {//向外默认配置一个配置对象
      props: {//这个指定了属性名和属性的类型
        comment:Object,
        deleteComments:Function,
        index:Number
      },
      methods:{
        deleteItem(){
          const {comment,index,deleteComments} = this
          console.log(index)
          if(window.confirm(`确定删除${comment.user}的评论吗？`)){
            deleteComments(index)
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
