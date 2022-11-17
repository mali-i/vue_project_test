//引入Vue
import Vue from 'vue'
//引入App大哥组件
import App from './App.vue'
//引入store
import store from './store'    //index.js是Vue认识的名字，写'./store'默认Vue会先去找文件下的index文件。你也可以写全‘./store/index.js’

//关闭Vue生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',  //app容器
    render:h => h(App),  //渲染App标签,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
})
