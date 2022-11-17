<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @click="checkChange(todo.id)" />
        <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="todoDelete(todo.id)" >删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo','checkChangeMyItem','todoDeleteMyItem'],  //变量命名用驼峰命名法把，短横杠容易编译出错
    methods:{
      //改变勾选
      checkChange(id){               
        this.checkChangeMyItem(id) //通知App 
      },      
      //删除一个Todo
      todoDelete(id){                
        if(confirm('确认删除吗？')){  //确认是否删除，如果true，通知App
          this.todoDeleteMyItem(id)   //这里this. 容易忘记写！
        }
      }
    }
    

}


</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

/* 鼠标悬浮时改变背景色，实现高亮效果 */
li:hover{  
  background: #ddd;
}
/* 鼠标悬浮时，才显示【删除】按钮 */
li:hover button{
  display: block;
}



li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>