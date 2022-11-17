<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <MyHeader :receive='receive'/>
        <MyList 
          :todosList="todosArr" 
          :checkChangeMyList="checkChange" 
          :todoDeleteMyList="todoDelete"
          /> <!-- 变量名和函数名不能重复！ -->
        <MyFooter
          :todosListMyFooter="todosArr" 
          :allCheckMyFooter="allCheck"
          :clearCheckedMyFooter="clearChecked"
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
        todosArr:[         //数据
          {id:'001',title:'抽烟',done:false},
          {id:'002',title:'喝酒',done:false},
          {id:'003',title:'开车',done:true}
        ]
      }
    },
    methods:{
      receive(x){       
        this.todosArr.unshift(x)
        return 
      },
      checkChange(id){   // checkbox被修改时，对应的data也要变
        this.todosArr.forEach((todoObj)=>{     
          if(todoObj.id === id) todoObj.done = !todoObj.done 
          return
        })
      },
      todoDelete(id){
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