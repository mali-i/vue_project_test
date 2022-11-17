<template>
  <div class="school">    
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    
  </div>
</template>

<script>
import pubsub from 'pubsub-js'   //引入的pubsub是一个对象，上面有很多方法
export default {
    name:'SchoolLabel',

    data(){
        return{           
            name:'尚硅谷',
            address:'北京昌平'         
        }
    },
    mounted() {
      this.pubId = pubsub.subscribe('hello',(msgName,data)=>{  //订阅别的地方的hello，调用后面的回调函数
        console.log(this)
        console.log('我是school组件。有人发布了hello消息，hello消息的回调执行了',msgName,data)
      })    
      // pubsub跟定时器类似，后续取消订阅的时候需要取消指定id，所以这里在this身上挂载一个
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId)
    },

}
</script>

<style scoped>
  .school{
    background:skyblue;    
    margin: 20px;
    padding:10px;
  }
</style>
    

