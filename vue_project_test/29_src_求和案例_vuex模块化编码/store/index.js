//该文件用于创建Vuex中最为核心的store
//引入Vue核心
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入nanoid
import {nanoid} from 'nanoid'
//引入axios
import axios from 'axios'
//应用Vuex插件
Vue.use(Vuex)

//求和相关的配置
const countOptions = {
    //命名空间
    namespaced:true,
    actions:{
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
    },
    mutations:{
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
        },
    },
    state:{
        sum:0,          
        school:'尚硅谷',
        subject:'前端'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

//人员管理相关的配置
const personOptions = {
    namespaced:true,
    actions:{
        //来点业务逻辑
        addPersonWang(context,value){
            if(value.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的必须姓王！')
            }

        },
        //联系服务器要名字
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',response.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            const p = {id:nanoid(),name:value}
            state.personList.unshift(p)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
            {id:'002',name:'李四'},
            
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}


//创建store，暴露store
const store = new Vuex.Store({    //既然用了Vuex，那就得import它
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
export default store