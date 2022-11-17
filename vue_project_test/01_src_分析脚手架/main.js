/*
    该文件时整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'    //ES6的引入语法
//引入App组件，它时所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象---vm
new Vue({
  //将App组件放入容器中
  render: h => h(App),
}).$mount('#app')   //绑定容器app
