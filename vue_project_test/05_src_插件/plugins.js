export default{
    install(Vue){  
        console.log('@@@install',Vue)
        // console.log(a,b,c)     
        
        //定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        });

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时调用bind
            bind(element,binding){
                element.value = binding.value;
            },
            //指令所在元素被插入到页面时调用inserted
            inserted(element){
                element.focus();  //获取焦点
            },
            //指令所在的模板被重新解析时调用update
            update(element,binding){
                element.value = binding.value;
            }
        });

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        });

        //往Vue原型上放一个hello方法(vm和vc就都能用了)
        Vue.prototype.hello = ()=>{alert('你好啊')}


    }
}

