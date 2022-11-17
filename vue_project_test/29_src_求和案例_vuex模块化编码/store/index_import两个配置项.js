//该文件用于创建Vuex中最为核心的store
//引入Vue核心
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入countOptions配置
import countOptions from './count.js'
//引入personOptions配置
import personOptions from './person.js'

//应用Vuex插件
Vue.use(Vuex)


//创建store，暴露store
const store = new Vuex.Store({    //既然用了Vuex，那就得import它
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
export default store