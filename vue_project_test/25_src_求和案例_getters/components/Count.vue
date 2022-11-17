<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数时加</button>
        <button @click="incrementWait">等一会儿加</button>
        <h1>当前放大10倍为:{{$store.getters.bigSum}}</h1>
    </div>
</template>

<script>
    export default {
        name:'CountLabel',
        data() {
            return {
                n:1,  //用户选择的加项的值                
            }
        },
        methods: {
            increment(){
                console.log('使用vuex的store')
                this.$store.commit('JIA',this.n)   //因为加和减不需要在actions中进行逻辑判断，所以可以直接commit到mutations中         
            },
            decrement(){
                console.log('使用vuex的store')
                this.$store.commit('JIAN',this.n)     
            },
            incrementOdd(){   //把业务逻辑放到actions中去
                console.log('使用vuex的store')
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                console.log('使用vuex的store')
                this.$store.dispatch('jiaWait',this.n)       
            }
        },
    }
</script>

