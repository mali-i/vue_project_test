//引入Vue
import Vue from 'vue'
//引入App大哥组件
import App from './App.vue'
//引入vue-resource
import vueResource from 'vue-resource'
//关闭Vue生产提示
Vue.config.productionTip = false

//使用vue-resource
Vue.use(vueResource)


//创建vm
new Vue({
    el:'#app',  //app容器
    render:h => h(App),  //渲染App标签
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
})
