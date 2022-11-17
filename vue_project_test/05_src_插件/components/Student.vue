<!-- 
    需求：
        当你点击姓名所在元素标签时，弹窗显示名字
-->
<template>
  <div>    
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
    import { mixin } from '../mixin.js'

    export default {
        name:'StudentLabel',  //组件的名字，由于麻烦的eslint，这里得用大驼峰命名法
        data(){
            return{           
                name:'张三',
                sex:'男'         
            }
        },
        //应用混合
    //一个新的配置项
    mixins:[mixin]  
    }
</script>
    

