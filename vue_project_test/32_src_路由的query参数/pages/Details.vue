<template>
  <div>
    <hr/>
    <p>消息id:{{$route.query.id}}</p>
    <p>消息主题:{{$route.query.title}}</p>

  </div>
</template>

<script>
    export default {
        name:'Details',
        mounted(){
            console.log(this)
        }
    }
</script>
