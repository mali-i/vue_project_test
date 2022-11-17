//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建一个路由器
const router = new VueRouter({
    routes:[
        //每一个路由都是一个配置对象
        { 
            path:'/about',
            component:About
        },
        { 
            path:'/home',
            component:Home
        }
    ]
})
//把路由暴露出去
export default router