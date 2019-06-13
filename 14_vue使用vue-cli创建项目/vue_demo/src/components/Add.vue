<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="user">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {//向外默认配置一个配置对象
      props:{
        addComment:{
          type: Function,
          require: true
        }
      },
      data (){
        return {
          user:'',
          content:''
        }
      },
      methods: {
        add (){
          //1. 检查输入的合法性
          const user = this.user.trim()
          const content = this.content.trim()
          if(!user || !content){
            alert("姓名或者内容不能为空")
            return
          }
          //2. 根据输入的数据，封装成一个comment对象
          const comment ={
            user,
            content
          }
          //3. 添加到comments中
          this.addComment(comment)
          //清除输入
          this.content = ''

        }



      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
