<template>
  <div class="school">    
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">点我发送学校名称</button>
  </div>
</template>

<script>
export default {
    name:'SchoolLabel',  
    props:['getSchoolNameSchoolVC'] ,
    data(){
        return{           
            name:'尚硅谷',
            address:'北京昌平'         
        }
    },
    methods: {
      sendSchoolName(){
        //通知App
        this.getSchoolNameSchoolVC(this.name);
      }
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
    

