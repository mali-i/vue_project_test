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
            component:About,
            meta:{title:'关于'}           
        },
        { 
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    //独享路由守卫
                    beforeEnter:(to,from,next) => {
                        if(to.meta.isAuth){  //判断是否需要鉴权    
                            console.log('@我是News的独享路由守卫,你的localStorage中学校是atguigu我才放行')
                            if(localStorage.getItem('school') === 'atguigu'){
                                console.log('放行')
                                next()
                            }else{
                                alert('News的独享路由守卫：你的学校名不对，无权限查看！')
                                console.log('不放行')
                            }        
                        }else{
                            next()
                        }
                    }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',                            
                            path:'details',
                            component:Details,

                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//暴露之前加个路由守卫
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{  //在每一次路由切换之前，都会帮你调用一次函数    
//     // if(to.path === '/home/news' || to.path === '/home/message'){
//     if(to.meta.isAuth){  //判断是否需要鉴权    
//         console.log('@我是路由守卫,你的localStorage中学校是atguigu我才放行')
//         if(localStorage.getItem('school') === 'atguigu'){
//             console.log('放行')
//             next()
//         }else{
//             alert('你的学校名不对，无权限查看！')
//             console.log('不放行')
//         }        
//     }else{
//         next()
//     }
// })  
//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('我是后置路由守卫')
    //在这个时机更新html的标题
    document.title = to.meta.title || '硅谷系统'
})

//把路由暴露出去
export default router