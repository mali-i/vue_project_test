<template>
    <div>
        <h1>欢迎来到{{school}}，学习{{subject}}</h1>
        <h3>当前求和为：{{sum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时加</button>
        <button @click="incrementWait(n)">等一会儿加</button>
        <h3>当前放大10倍为:{{bigSum}}</h3>
        <h3 style="color: red;">下面Person组件的人数为：{{personList.length}}</h3>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'CountLabel',
        data() {
            return {
                n:1,  //用户选择的加项的值                
            }
        },
        computed:{            
            ...mapState('countAbout',{school:'school',subject:'subject',sum:'sum'}),
            ...mapState('personAbout',{personList:'personList'}),
            ...mapGetters('countAbout',{bigSum:'bigSum'})
        },
        methods: {           
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),           
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        },
    }
</script>

