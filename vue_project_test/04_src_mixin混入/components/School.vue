<!-- 
    需求：
        当你点击姓名所在元素标签时，弹窗显示名字
-->
<template>
  <div>    
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合
import { mixin } from '../mixin.js'

export default {
    name:'SchoolLabel',  
    data(){
        return{           
            name:'尚硅谷',
            address:'北京昌平'         
        }
    } ,
    //应用混合
    //一个新的配置项
    mixins:[mixin]

}
</script>
    

