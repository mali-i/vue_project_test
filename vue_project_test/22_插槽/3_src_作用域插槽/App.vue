<template>
    <div class="container">
        <!-- 无序列表 -->
        <Category>    <!-- slot-scope="games" 收到作用域插槽传过来的数据 -->
            <template slot-scope="games">  <!-- 作用域插槽得包裹一层template-->
                <ul v-for="(item,index) in games.games" :key="index" >
                    <li>{{item}}</li>
                </ul>
            </template>
        </Category> 
        <!-- 有序列表 -->
        <Category>
            <template slot-scope="games">
                <ol v-for="(item,index) in games.games" :key="index" >
                    <li>{{item}}</li>
                </ol>
            </template>
        </Category> 
        <!-- 标题h4  -->
        <Category>
            <template slot-scope="{games}">   <!-- 解构赋值 -->
                <h4 v-for="(item,index) in games" :key="index" >{{item}}</h4>
            </template>
        </Category>

    </div>  
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {Category}
        }
</script>

<style>
.container,h4{
    display: flex;  /* 横向排开 */
    justify-content: space-around;  /* 主轴的对齐方式 */
}
img{
    width:100%
}
video{
    width:100%
}

</style>
