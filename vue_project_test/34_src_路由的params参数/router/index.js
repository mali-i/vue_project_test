//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'

//创建一个路由器
const router = new VueRouter({
    routes:[
        //每一个路由都是一个配置对象
        { 
            name:'guanyu',
            path:'/about',
            component:About
        },
        { 
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'details/:id/:title',
                            component:Details
                        }
                    ]
                }
            ]
        }
    ]
})
//把路由暴露出去
export default router