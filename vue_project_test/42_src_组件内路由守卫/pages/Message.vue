<template>
    <div>
        <div>
            <ul v-for="(m,index) in messageList" :key="index" >              
                <!-- 跳转路由并携带params参数,to的对象写法 -->
                <li>
                    <router-link :to="{
                        name:'xiangqing',
                        query:{   //用query传递参数
                            id:m.id,
                            title:m.title                          
                        }
                    }">
                    {{m.title}}
                    </router-link>
                    <button @click=pushShow(m)>push查看</button>
                    <button @click=replaceShow(m)>replace查看</button>
                </li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    export default {
        name:'Message',
        data(){
            return{
                messageList:[
                    {
                        id:'001',
                        title:'消息001'
                    },
                    {
                        id:'002',
                        title:'消息002'
                    },
                    {
                        id:'003',
                        title:'消息003'
                    }
                ]
            }
        },
        methods:{
            pushShow(m){
                // console.log(this.$router)
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title                          
                    }
                })
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',  //push 想往哪跳就往哪跳，想带啥参数就带啥参数
                    query:{
                        id:m.id,
                        title:m.title                          
                    }
                })
            },
            beforeDestroy() {
                console.log('我是Message组件，我即将被销毁')
            },
        }
    }
</script>