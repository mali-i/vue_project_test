<template>
    <div class="category">
        <h3>游戏分类</h3>
        <slot :games="games">我是默认的一些内容</slot>
    </div>  
</template>

<script>
    export default {
        name:'CategoryLabel',
        props:[],
        data() {
            return {
                games:['羊了个羊','跳一跳','合成神龙']
            }
        },
    }
</script>

<style>
.category{    
    background: skyblue;
    width: 200px;
    height: 300px;
}

h3{
    background: orange;
    text-align: center;
}
</style>
