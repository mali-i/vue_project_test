<template>
 <div>
    <Student name="张三" :age="18" sex="男" />    <!-- 单向数据绑定v-bind 这样子age就是number类型，就可以加减等运算了 -->
    <Student name="李梅" :age="20" sex="女" />
  </div>
</template>

<script>
    //App大哥组件要汇总所有的组件
    //引入SchoolLabel组件
    import Student from './components/Student'

    export default {
        name: "App",
        //注册子组件
        components: { Student }

        }       
    
</script>
