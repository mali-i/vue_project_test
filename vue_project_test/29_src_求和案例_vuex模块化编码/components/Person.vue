<template>
  <div>
    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加一个姓王的</button>
    <button @click="addPersonServer">添加一个有网名的</button>
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
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }

        },
        methods: {
            addPerson(){
                this.$store.commit('personAbout/ADD_PERSON',this.name)
                this.name=''
            },
            addWang(){
                this.$store.dispatch('personAbout/addPersonWang',this.name)
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        mounted(){
            console.log(this.$store)
        }

    }
</script>

<style>

</style>