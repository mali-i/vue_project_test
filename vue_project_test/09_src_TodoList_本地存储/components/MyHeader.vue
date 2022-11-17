<template>
    <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="titleNew" @keyup.enter="addNewTodo"/>
    </div>
</template>

<script>
//导入nanoid,(唯一id时用)
import {nanoid} from 'nanoid'   //nanoid是用的分别暴露，所以要用花括号{} 且花括号里的nanoid是个函数，直接调用把

export default {
    name:'MyHeader',
    data(){
      return{
        titleNew:''
      }
    },
    props:['addTodo'],  //传的是一个函数
    methods:{
      addNewTodo(){
        //校验数据
        if(!this.titleNew.trim()) return alert('输入不能为空')
        //将用户的输入包装成一个todo对象
        const todoNew = {id:nanoid(),title:this.titleNew,done:false}        
        // console.log(todoNew)
        //通知App组件去添加一个todo对象
        this.addTodo(todoNew)
        //清空输入
        this.titleNew = ''

      }
    }

}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>