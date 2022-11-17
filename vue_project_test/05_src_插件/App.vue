<template>
 <div>
    <School/>
    <hr/>
    <Student/>
    <hr/>      
  </div>
</template>

<script>
    //App大哥组件要汇总所有的组件    
    import Student from './components/Student.vue'
    import School from './components/School.vue'


    export default {
        name: "App",
        //注册子组件
        components: {
           Student, 
           School
       
          }
        }       
    
</script>
