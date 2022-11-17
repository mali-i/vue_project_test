const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false   //组件命名可以不用驼峰命名
  /* 据官方风格指南，除了根组件（App.vue）外，自定义组件名称应该由多单词组成，防止和html标签冲突。
而最新的vue-cli创建的项目使用了最新的vue/cli-plugin-eslint插件，在vue/cli-plugin-eslint v7.20.0版本之后就引用了vue/multi-word-component-names规则，所以在编译的时候判定此次错误。
  */


  // 开启代理服务器（方式一）
  // devServer: { // 目前所处位置是8080，那么代理服务器的位置也是8080
  //   proxy: 'http://localhost:5000'  //告诉代理服务器将请求转发给谁？
  // },
  // 开启代理服务器（方式二）
    // devServer: {
    //   proxy: {
    //     '/api': {  //请求前缀，如果请求前缀是api，就走代理；不是就不走这个代理 ==> 灵活配置
    //       target: 'http://localhost:5000',
    //       pathRewrite:{'^/api':''},  //匹配所有以api开头的字符串，用空字符串代替
    //       ws: true,  //用于支持websocket。默认为true
    //       changeOrigin: true  // 用于控制请求头中的host值。默认为true。 为true骗请求的服务器，端口和它一样(5000)。为false则如实说自己的端口号(8080)
    //     },
    //     '/demo':{
    //       target: 'http://localhost:5001',
    //       pathRewrite:{'^/demo':''},
    //     }
    //   }
    // }

})

