<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <ul v-for="(p,index) in personList" :key="index" >
        <li>{{p.name}}</li>
    </ul>
    <h3 style="color: red;">上面Count组件的当前求和为：{{sum}}</h3>
  </div>
</template>

<script>

    export default {
        name:'PersonLabel',
        data(){
            return{
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }

        },
        methods: {
            addPerson(){
                this.$store.commit('ADD_PERSON',this.name)
                this.name=''
            }
        },

    }
</script>

<style>

</style>