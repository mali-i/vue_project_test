<template>
  <div class="student">    
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>     
    <button @click="sendStudentNameToSchool">发送学生姓名给学校</button>
  </div>
</template>

<script> 
    export default {
        name:'StudentLabel', 
        data(){
            return{           
                name:'张三',
                sex:'男'  ,    
            }
        } ,
        methods: {
            sendStudentNameToSchool(){
                //触发School身上的事件，利用全局事件总线
                this.$bus.$emit('getStudentName',this.name)
            }
        }
    }
</script>

<style  scoped>
    .student{
        background:pink;
        margin: 20px;
        padding:10px;
    }
</style>
    

