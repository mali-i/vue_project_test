//该文件用于创建Vuex中最为核心的store
//引入Vue核心
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    // jia:function(context,value){  //context是指mini版的store，中译：上下文
    //     console.log('actions中的jia被调用了，马上发给mutations')
    //     context.commit('JIA',value)   
    // },
    // jian(context,value){
    //     console.log('actions中的jian被调用了，马上发给mutations')
    //     context.commit('JIAN',value) 
    // },
    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了，马上发给mutations')
        if(context.state.sum % 2){
            context.commit('JIAODD',value)
        }
       
    },
    jiaWait(context,value){
        console.log('actions中的jiaWait被调用了，马上发给mutations')
        setTimeout(()=>{
            context.commit('JIAWAIT',value)
        },1000)
    }
}
//准备mutations——用于操作数据(state)
const mutations = {
    JIA(state,value){   //第一个参数state就是存储数据的state
        console.log('mutations中的JIA被调用了')
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了')
        state.sum -= value
    },
    JIAODD(state,value){
        console.log('mutations中的JIANODD被调用了')
        state.sum += value
    },
    JIAWAIT(state,value){
        console.log('mutations中的JIAWAIT被调用了')
        state.sum += value
    }
}
//准备state——用于存储数据
const state = {
    sum:0,             //当前求和值
    school:'尚硅谷',
    subject:'前端'
}
//准备getters配置项——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store，暴露store
const store = new Vuex.Store({    //既然用了Vuex，那就得import它
    actions:actions,    //当属性名和变量名一样时，可以直接简写。
    mutations,
    state,
    getters
})
export default store