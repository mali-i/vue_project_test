<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
    
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name:'App',
      methods: {
        getStudents(){
          // 借助代理服务器
                                        //这里的‘/api’就是前缀（前缀就是忽略了协议名主机名后的最前方）  
          axios.get('http://localhost:8080/api/students').then(
            response =>{   //请求成功
              console.log('请求成功了',response.data)
            },
            error => {    //请求失败
              console.log('请求失败了',error.message)
            }
          )
        },
        getCars(){
          axios.get('http://localhost:8080/demo/cars').then(
            response =>{   //请求成功
              console.log('请求成功了',response.data)
            },
            error => {    //请求失败
              console.log('请求失败了',error.message)
            }
          )
        }
      },
    }

</script>
