<template>
  <div class="school">    
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    
  </div>
</template>

<script>
export default {
    name:'SchoolLabel',

    data(){
        return{           
            name:'尚硅谷',
            address:'北京昌平'         
        }
    },
    methods: {
      getStudentName(name){
        console.log('我是School,我接收到了学生的姓名：',name)
      }
    },
    mounted() {
      //谁接收数据，就在谁这儿绑定事件
      this.$bus.$on('getStudentName',this.getStudentName)
    },  
    beforeDestroy() {
      this.$bus.$off('getStudentName')
    }

}
</script>

<style scoped>
  .school{
    background:skyblue;    
    margin: 20px;
    padding:10px;
  }
</style>
    

