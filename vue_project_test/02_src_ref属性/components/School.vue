<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolLabel',  //组件的名字，由于麻烦的eslint，这里得用大驼峰命名法
    data(){
        return{
            name:'尚硅谷',
            address:'北京昌平'
        }
    }

}
</script>
    

<style>
    .school{
        background:gray
    }

</style>