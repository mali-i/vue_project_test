<template>
  <div>
    <h3 :style="{opacity}">欢迎浏览News</h3>
    <ul v-for="i in 3" :key="i" >
    <li>news1<input type="text" /></li>
  </ul> 
  </div>
</template>

<script>
    export default {
        name:'News',
        data(){
          return{
            opacity:1
          }
        },
        beforeDestroy(){
          console.log('我是News组件，我即将被销毁')
          clearInterval(this.timer)
        },
        mounted() {
          // this.timer = setInterval(()=>{
          //   console.log('@，我是News里的定时器我正在工作')
          //   this.opacity -= 0.01
          //   if(this.opacity <= 0) this.opacity = 1
          // },16)
        },
        //引出新的生命钩子activated、deactivated
        activated(){
          console.log('News组件被激活了')
          this.timer = setInterval(()=>{
            console.log('@，我是News里的定时器我正在工作')
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
          },16)
        },
        deactivated() {
          console.log('News组件失活了')
          clearInterval(this.timer)
        },
    }
</script>
