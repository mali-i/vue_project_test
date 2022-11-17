<template>
  <div>  <!-- 模板里面必须有个根元素 -->
    <image src="./assets/logo.png" alt="logo"></image>
    <SchoolLabel></SchoolLabel>  <!-- 在脚手架里面可以直接写自闭合 -->
    <StudentLabel></StudentLabel>
  </div>
</template>

<script>
    //引入组件
import SchoolLabel from './components/School'
import StudentLabel from './components/Student'

export default {
    name:'App',
    components:{
        SchoolLabel,
        StudentLabel
    }

}
</script>
