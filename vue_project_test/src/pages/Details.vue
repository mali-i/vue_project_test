<template>
  <div>
    <hr/>
    <ul>
      <li>消息编号：{{id}}</li>
      <li>消息标题:{{title}}</li>
      <!-- <li>a:{{a}}</li> -->
      <!-- <li>b:{{b}}</li> -->
    </ul>    
  </div>
</template>

<script>
    export default {
        name:'Details',
        props:['id','title'],
        mounted(){
            console.log(this.$route)
        }
    }
</script>
