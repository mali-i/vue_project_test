<template>
 <div class="title">
    <h4>利用props传数据</h4>
    <!-- 通过父组件给子组件传递函数类型的props，实现：子给父传递数据 -->
    <School :getSchoolNameSchoolVC="getSchoolName" />  

    <h4>组件自定义事件</h4>
    <!-- 组件自定义事件 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法，使用@或者v-on)  -->
    <!-- 由于v-on在Student标签上，所以是给Student的组件实例对象vc(vuecomponent)身上绑定了一个事件，事件名叫atguigu，如果有人触发了该事件，demo就会被调用 -->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1"/>     简写：@atguigu=""  -->


     <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法，使用ref)  第二种写法更加灵活(在挂载里面用定时器)  -->     
    <!-- <Student ref="student" @demo="m1"/>     这样写用this.&refs.student 就能拿到Student组件的实例对象，接下来就用$on就可以绑定事件 -->
     
    <Student v-on:atguigu="getStudentName" @demo="m1" />     <!-- 简写：@atguigu="" --> 

  </div>
</template>

<script>
    //App大哥组件要汇总所有的组件        
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name: "App",
        //注册子组件
        components: {School,Student},
        methods: {
          getSchoolName(name){
            console.log('App收到了学校名：',name)
          },
          getStudentName(name,...params){
            console.log('Student组件的自定义事件被调用了。App收到了学生姓名：',name,params)   //所以现在当务之急是赶紧触发一下这个demo事件
                                          //原则：你给谁绑定的事件，你就找谁去触发去
          },
          m1(){
            console.log('我是Student组件的第二个自定义事件')
          }
        },

        // //钩子
        // mounted() {
        //   this.$refs.student.$on('atguigu',this.getStudentName)  //当atguigu被触发时，进行getStudentName回调
          
        //   // setTimeout(() => {
        //   //   this.$refs.student.$on('atguigu',this.getStudentName)  //当atguigu被触发时，进行getStudentName回调
        //   //   // 事件只能触发一次，换个api: $once
        //   //   // this.$refs.student.$once('atguigu',this.getStudentName)

        //   //   //要是用v-on，事件还是只能触发一次呢？就在template中加个修饰符，比如： <Student v-on:atguigu.once="getStudentName" /> 

        //   // }, 3000)          
        // }

    }
        
    
</script>

<style scoped>
  .title{
    background:gray;
    padding:10px;
  }
</style>
