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

export default countOptions