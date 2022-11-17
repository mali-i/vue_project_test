<template>
  <div>
    <ul v-for="i in 3" :key="i" >
    <li>news1<input/></li>
  </ul> 
  </div>
</template>

<script>
    export default {
        name:'News',
        beforeDestroy(){
          console.log('我是News组件，我即将被销毁')
        }
    }
</script>
