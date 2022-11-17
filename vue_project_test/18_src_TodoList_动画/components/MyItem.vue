<template>
  <transition name="todo" appear>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @click="todoCheckChange(todo.id)" />
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input ref="inputTitle" v-show="todo.isEdit" type="text" :value="todo.title" @blur="todoBlur(todo,$event)"/>
        </label>
        <button class="btn btn-danger" @click="todoDelete(todo.id)" >删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="todoEdit(todo)" >编辑</button> <!-- blur:失去焦点事件 -->
    </li>
  </transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo'],  
    methods:{
      //勾选or取消勾选
      todoCheckChange(id){               
        this.$bus.$emit('checkChange',id)
      },      
      //删除一个Todo
      todoDelete(id){                
        if(confirm('确认删除吗？')){  //确认是否删除
          //用全局事件总线写
          // this.$bus.$emit('deleteTodo',id)  
          // 用消息发布写
          pubsub.publish('deleteTodo',id)  //'deleteTodo'是订阅消息的消息名

        }
      },
      //编辑
      todoEdit(todo){
        // if(todo.hasOwnProperty('isEdit')){  //判断todo身上是否有isEdit属性
        //由于cli和eslint版本问题，todo.hasOwnProperty用法会报错，改用下面一句的方法
        if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo,'isEdit',true)
        }   
        
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
        
      },
      //失去焦点后，更新数据(真正执行修改逻辑)
      todoBlur(todo,e){
        todo.isEdit = false
        if(!e.target.value.trim()) return alert('输入不能为空')
        this.$bus.$emit('updateTodo',todo.id,e.target.value)   //触发事件总线$bus身上的updateTodo事件,传入input框的value值
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

.todo-enter-active{  /* 样式类名 */
    animation: atguigu 0.5s linear;
}

.todo-leave-active{  /* 样式类名 */
    animation: atguigu 0.5s reverse;
}

/* 动画 */
/* 关键帧 */
@keyframes atguigu {   /* 动画 */
    from{
        transform:translateX(-100%)
    }
    to{
        transform:translateX(0px)
    }
}

</style>