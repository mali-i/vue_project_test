<template>
  <div>
    <hr/>
    <p>消息id:{{$route.params.id}}</p>
    <p>消息主题:{{$route.params.title}}</p>
  </div>
</template>

<script>
    export default {
        name:'Details',
        mounted(){
            console.log(this.$route)
        }
    }
</script>
