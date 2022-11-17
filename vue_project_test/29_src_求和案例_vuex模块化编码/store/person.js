//引入nanoid
import {nanoid} from 'nanoid'
//引入axios
import axios from 'axios'
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
export default personOptions