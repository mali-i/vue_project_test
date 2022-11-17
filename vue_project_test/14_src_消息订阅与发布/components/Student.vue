<template>
  <div class="student">    
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>     
    <button @click="sendStudentNameToSchool">点击发布hello消息</button>
  </div>
</template>

<script> 
    import pubsub from 'pubsub-js'
    export default {
        name:'StudentLabel', 
        data(){
            return{           
                name:'张三',
                sex:'男'  ,    
            }
        },
        methods: {
            sendStudentNameToSchool(){
                pubsub.publish('hello',666)    //发布消息
            }
        },
    }
</script>

<style  scoped>
    .student{
        background:pink;
        margin: 20px;
        padding:10px;
    }
</style>
    

