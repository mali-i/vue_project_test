<template>
 <div>
    <h1 class="title">你好啊</h1>
    <School/>
    <hr/>
    <Student/>
    <hr/>      
  </div>
</template>

<script>
    //App大哥组件要汇总所有的组件    
    
    import School from './components/School.vue'
    import Student from './components/Student.vue'


    export default {
        name: "App",
        //注册子组件
        components: {School,Student}
        }       
    
</script>

<style scoped>
  .title{
    color: blue;
  }
</style>
