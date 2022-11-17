//引入Vue
import Vue from 'vue'
//引入App大哥组件
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip = false


//创建vm
new Vue({
    el:'#app',  //app容器
    render:h => h(App) , //渲染App标签    
   
    
})
