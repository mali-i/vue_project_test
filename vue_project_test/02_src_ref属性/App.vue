<template>
 <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方DOM元素</button>
    <School ref="sch"></School>  
    
  </div>
</template>

<script>
    //App大哥组件要汇总所有的组件
    //引入SchoolLabel组件
    import School from './components/School'  //！发现这里组件文件命名还不能用大驼峰命名法嘞，不然渲染不出来

    export default {
        name: "App",
        //注册子组件
        components: {School},

        data() {
            return {
                msg:'欢迎学习Vue'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title) 
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)        
            
            }
        }       
    
    }
</script>
