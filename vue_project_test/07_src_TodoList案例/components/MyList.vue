<template>
    <ul class="todo-main">
        <MyItem 
          v-for="todoObj in todosList" 
          :key="todoObj.id" 
          :todo="todoObj"   
          :checkChangeMyItem="checkChangeMyList"
          :todoDeleteMyItem="todoDeleteMyList" 
        />       <!--:todo="todoObj"给MyItem传值-->  
    </ul>                                        
</template>

<script>
import MyItem from './MyItem'

export default {
    name:'MyList',
    components:{ MyItem },
    props:['todosList','checkChangeMyList','todoDeleteMyList']


}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>