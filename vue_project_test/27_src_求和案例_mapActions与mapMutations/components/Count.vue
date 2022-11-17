<template>
    <div>
        <h1>欢迎来到{{school}}，学习{{subject}}</h1>
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时加</button>
        <button @click="incrementWait(n)">等一会儿加</button>
        <h1>当前放大10倍为:{{bigSum}}</h1>
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
            //借助mapState生成计算属性，从state中读取数据。 （对象写法）
            // ...mapState({school:'school',subject:'subject',sum:'sum'}),
            // ...mapGetters({bigSum:'bigSum'})

            ////借助mapState生成计算属性，从state中读取数据。 （数组写法）
            ...mapState(['school','subject','sum']),    //'school'两个作用：一是计算属性的属性名，二要去state中找'school'
            ...mapGetters(['bigSum']),
        },
        methods: {
            //程序员自己亲自去写方法
            // increment(){
            //     console.log('使用vuex的store')
            //     this.$store.commit('JIA',this.n)   //因为加和减不需要在actions中进行逻辑判断，所以可以直接commit到mutations中         
            // },
            // decrement(){
            //     console.log('使用vuex的store')
            //     this.$store.commit('JIAN',this.n)     
            // },
            // incrementOdd(){   //把业务逻辑放到actions中去
            //     console.log('使用vuex的store')
            //     this.$store.dispatch('jiaOdd',this.n)
            // },
            // incrementWait(){
            //     console.log('使用vuex的store')
            //     this.$store.dispatch('jiaWait',this.n)       
            // },

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
            // ...mapMutations(['JIA','JIAN']),

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
            
            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
            // ...mapActions(['jiaOdd','jiaWait'])



        },
    }
</script>

