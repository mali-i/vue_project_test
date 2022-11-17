//引入Vue
import Vue from 'vue'
//引入App大哥组件
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'
import router from './router'
//使用VueRouter
Vue.use(VueRouter)


//关闭Vue生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',  //app容器
    render:h => h(App),  //渲染App标签
    router
})
