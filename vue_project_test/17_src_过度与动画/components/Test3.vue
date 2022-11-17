<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition-group 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutup"
    > 
        <h1 v-show="!isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">你好啊</h1>  
    </transition-group>
  </div>
</template>

<script>
    import 'animate.css';   //引入的是样式，而不是js文件，所以直接import 'animate.css'
    export default {
        name:'Test3Label',
        data(){
            return{
                isShow:true
            }
        }    

    }
</script>

<style scoped>
    h1{
        background: orange;       
    }



</style>