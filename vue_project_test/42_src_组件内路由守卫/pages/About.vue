<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        
        //通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
            console.log('马上要进入About组件')
            if(to.meta.isAuth){  //判断是否需要鉴权    
                console.log('@我是About的组件内路由守卫,你的localStorage中学校是atguigu我才放行')
                if(localStorage.getItem('school') === 'atguigu'){
                    console.log('放行')
                    next()
                }else{
                    alert('About的组件内路由守卫：你的学校名不对，无权限查看！')
                    console.log('不放行')
                }        
            }else{
                next()
            }
        },
        //通过路由规则，离开该组件时被调用
        beforeRouteLeave(to,from,next){
            console.log('马上要离开About组件')
            next()
        }
    }
</script>