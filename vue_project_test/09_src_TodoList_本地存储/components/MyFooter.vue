<template>
    <div class="todo-footer" v-show="todosTotal" >
    <label>
        <!-- <input type="checkbox" :checked="isAll" @change="allCheckedOrUnchecked" /> -->
        <input type="checkbox" v-model="isAll" />
    </label>
    <span>
        <span>已完成{{doneTotal}}</span> / 全部{{todosTotal}}
    </span>
    <button class="btn btn-danger" @click="clearAllChecked" >清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todosArr','allCheck','clearChecked'],
    computed:{
      doneTotal(){
        // return this.todosArr.reduce((pre,todoObj)=>{
        //   return pre + (todoObj.done ? 1:0)
        // },0)
        return this.todosArr.reduce((pre,todoObj) => pre + (todoObj.done ? 1:0),0)

      },
      todosTotal(){
        return this.todosArr.length
      },
      isAll:{
        get(){
          return this.doneTotal === this.todosTotal && this.todosTotal > 0
        },
        set(value){
          this.allCheck(value) 
        }
      }
     
    },
    methods:{
      clearAllChecked(){
        this.clearChecked();
      }
    }

}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>