<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0 ">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"
            :deleteComments="deleteComments" :index="index"/>
    </ul>
  </div>
</template>

<script>
    import Item from './Item'
    export default {//向外默认配置一个配置对象
      //声明接受属性:这个属性就会成为组件对象的属性
      props: ['comments','deleteComments'],//只会指定属性名
      components:{
        Item
      },
      template:"<Item/>"
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .reply {
    margin-top: 0px;
  }

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
