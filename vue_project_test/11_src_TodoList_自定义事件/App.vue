<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <MyHeader 
          @addTodo='addTodo'
          />  <!-- 给MyHeader组件的实例绑定了一个事件addTodo，该事件的回调函数是“addTodo”-->
        <MyList 
          :todosArr="todosArr" 
          :checkChange="checkChange" 
          :deleteTodo="deleteTodo"
          /> 
        <MyFooter
          :todosArr="todosArr" 
          @allCheck="allCheck"
          @clearChecked="clearChecked"
        />
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'



export default {
    name:'App',
    components:{
        MyHeader,
        MyFooter,
        MyList
        },
    data(){
      return{
        todosArr:JSON.parse(localStorage.getItem('todosArr')) || []
        // localStorage.getItem('todosArr') 这样拿，拿的是一个json的字符串，
        // 要用JSON.parse解析
        // []是为了在Footer中可以计算，因为前者初始化时时null，null不好计算，这样就导致Footer中计算length时会报错
      }
    },
    watch:{
      todosArr:{
        deep:true,
        handler(value){
        localStorage.setItem('todosArr',JSON.stringify(value))
      }

      }
    },
    methods:{
      addTodo(x){       
        this.todosArr.unshift(x)
        return 
      },
      checkChange(id){   // checkbox被修改时，对应的data也要变
        this.todosArr.forEach((todoObj)=>{     
          if(todoObj.id === id) todoObj.done = !todoObj.done 
          return
        })
      },
      deleteTodo(id){
          this.todosArr = this.todosArr.filter((todoObj)=>{
          return todoObj.id !== id
      
      })
      },
      allCheck(done){
        this.todosArr.forEach((todoObj)=>{
          todoObj.done = done
        })
        return
      },
      //清除已完成
      clearChecked(){
        this.todosArr = this.todosArr.filter((todoObj)=>{
          return !todoObj.done
        })
      }

    }
  }

</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>