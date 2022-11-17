<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" :appear="true"> <!-- transition-group -->
        <h1 v-show="!isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">你好啊</h1>  <!--真实开发中这里应该是列表，会用v-model -->
    </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test2Label',
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

    /* 
        一个元素向我们而来的时候，Vue给我们准备了3个样式的类名
            进入的起点 v-enter
            整个进入的过程中 v-enter-active
            进入的终点 v-enter-to
        一个元素离我们而去的时候，Vue给我们准备了3个样式的类名
            离开的起点 v-leave
            整个离开的过程中 v-leave-active
            离开的终点 v-leave-to
    */

    /* 进入的起点、离开的终点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;  
    }
    /* 进去的终点、离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0px);
    }
</style>