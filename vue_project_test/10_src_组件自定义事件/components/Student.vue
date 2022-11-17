<template>
  <div class="student">    
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2> 
    <button @click="sendStudentName">点我发送学生姓名</button>
    <button @click="unbind">解绑atguigu事件</button> 
    <button @click="selfdefined2">第二个自定义事件</button>
    <h2>number当前的值：{{number}}</h2> 
    <button @click="add">点我number+1</button>
    <button @click="death">点我销毁Student的vc</button>

  </div>
</template>

<script> 
    export default {
        name:'StudentLabel', 
        data(){
            return{           
                name:'张三',
                sex:'男'  ,
                number:0       
            }
        } ,
        methods: {
        add(){
            this.number++;
            console.log('add被调用了(这属于原生js)')
        },
        death(){
            console.log('Student组件：我人没了')
            this.$destroy()   //显然这里的this指的是Student组件实例
        },
        sendStudentName(){
            // 怎么触发那个自定义事件捏？
            // 借助下面这个api : &emit
            this.$emit('atguigu',this.name,666,888,999)   //触发Student组件实例身上的atguigu事件
        },
        selfdefined2(){
            this.$emit('demo')   //触发Student组件的第二个自定义事件
        },

        unbind(){
            //找student组件的实例对象vc解绑
            this.$off('atguigu')  //适用于解绑一个自定义事件
            // this.$off(['atguigu','demo'])   //解绑多个自定义事件
            // this.$off()  //解绑所有的自定义事件
        }, 
    }     

    }
</script>

<style  scoped>
    .student{
        background:pink;
        margin: 20px;
        padding:10px;
    }
</style>
    

