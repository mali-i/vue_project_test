<!-- 
    需求：
        当你点击姓名所在元素标签时，弹窗显示名字
-->
<template>
  <div>    
    <h2 @click="showName">学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
// 引入一个混合
import { mixin } from '../mixin.js'

export default {
    name:'SchoolLabel',  
    data(){
        return{           
            name:'尚硅谷atguigu',
            address:'北京昌平'         
        }
    } ,
    methods:{
      test(){
        this.hello()
      }
    },
    //应用混合
    //一个新的配置项
    mixins:[mixin]

}
</script>
    

