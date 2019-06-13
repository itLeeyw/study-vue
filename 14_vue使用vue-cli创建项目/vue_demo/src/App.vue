<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :deleteComments="deleteComments" />
    </div>
  </div>
</template>

<script>
    import Add from './components/Add.vue'
    import List from './components/List.vue'
    export default {//向外默认配置一个配置对象
      data(){
        return {
          comments:[//数据在那个组件，更新数据的行为（方法操作）就应该在那个组件
            {
              user:'Leeyw',
              content:'Vue嘻嘻嘻'
            },
            {
              user:'李欲',
              content:'Vue哈哈哈'
            },
            {
              user:'lwh',
              content:'Vue啦啦啦'
            }
          ]
        }
      },
      methods:{
        //添加评论
        addComment(comment){
          this.comments.unshift(comment)
        },
        //删除指定下标评论
        deleteComments(index){
          this.comments.splice(index,1)
        }
      },
      components:{
        Add,
        List
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
