<template>
  <div>
    <h1>{{msg}} </h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2><button @click="addAge">点我年龄加1</button>
  </div>
</template>

<script>
export default {
    name:'StudentLabel',  //组件的名字，由于麻烦的eslint，这里得用大驼峰命名法
    data(){
        return{
            msg:'我是一个尚硅谷的学生' ,
            myAge:this.age
        }
    },
    methods: {
        //硬要修改props传入的数据的话，得在data中桥接一下
        addAge(){
            this.myAge++
        }
    },
    //新的配置项：props  用于向组件中传入数据以复用组件
    //props有三种接收方式

    //第一种：简单声明接收
    props:['name','sex','age']

    //第二种：接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    //第三种：接收的同时对数据：进行类型限制——默认值的指定+必要性的限制
    // props:{
    //     name:{
    //         type:String, //name的类型是字符串
    //         required:true //name是必要的
    //     },
    //     age:{
    //         type:Number,
    //         default:99 //默认值
    //     },
    //     sex:{
    //         type:String,
    //         required:true
    //     }
    // }
}
</script>
    

