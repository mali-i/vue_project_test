<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-show="isShow" class="come">你好啊</h1> -->

    <!-- vue中动画和过度标签：transition -->
    <!-- vue跟样式的类名对话 -->
    <transition :appear="true">
        <h1 v-show="isShow">你好啊</h1>
    </transition>

  </div>
</template>

<script>
export default {
    name:'TestLabel',
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

    .v-enter-active{  /* 样式类名 */
        animation: atguigu 5s linear;
    }

    .v-leave-active{  /* 样式类名 */
        animation: atguigu 5s reverse;
    }

    /* 动画 */
    /* 关键帧 */
    @keyframes atguigu {   /* 动画 */
        from{
            transform:translateX(-100%)
        }
        to{
            transform:translateX(0px)
        }
    }

</style>