<template>
    <div>
        <div>
            <ul v-for="(m,index) in messageList" :key="index" >
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <li><router-link :to="`/home/message/details/${m.id}/${m.title}`">{{m.title}}</router-link></li> -->
                
                <!-- 跳转路由并携带params参数,to的对象写法 -->
                <li>
                    <router-link :to="{
                        name:'xiangqing',
                        // path:'/home/message/details',
                        // params:{
                        //     id:m.id,
                        //     title:m.title
                        // }
                        query:{
                            id:m.id,
                            title:m.title                          
                        }
                    }">
                    {{m.title}}
                    </router-link>
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
        }
    }
</script>