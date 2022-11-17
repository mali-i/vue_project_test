<template>
    <div class="container">
        <Category title="美食">
            <!-- 传入美食图片 -->
            <img alt="美食图片" src="https://ts1.cn.mm.bing.net/th/id/R-C.862e3724bf81688d83147429ce8eee0b?rik=LXnFex91TCcJBA&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f2afb76f6a8d4a152b0546ed8c9caf3d5&ehk=ggkMTkkK4WwEPEPYCbVcCV6mqTZDwbjqvhv3z1Zz14s%3d&risl=&pid=ImgRaw&r=0">
        </Category>
        <Category title="游戏">
            <ul v-for="(item,index) in games" :key="index" >
                <li>{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"></video>
        </Category>
    </div>  
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {Category},
        data() {
            return {
                foods:['烧烤','烤冷面','火锅'],
                games:['羊了个羊','跳一跳','合成神龙'],
                films:['《隐入尘烟》','《万里归途》','《流浪地球》']
            }
        },
        }
</script>

<style>
.container{
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
