<template>
    <div class="app">
        <h1>萝卜官网</h1>
        <p>这是某个需要预渲染的页面</p>
        <h2>SEO要点</h2>
        <p>h1标签是很重要的</p>
        <p>网站的子标题用h2标签也是需要的</p>
        <p>logo图片最好用img，其中的alt描述别漏了</p>
        <p>重要页面的TKD（title，keywords，description）一定要设置哦</p>
        <p>对出站链接设置nofollw标签，防止网站权重分散</p>
        <p>设置友链交互</p>
        <p>针对搜索引擎的sitemap文件的设置与提交</p>
    </div>
</template>

<script>
export default {
    name: 'app',
    metaInfo: {
        title: '萝卜官网', // set a title
        meta: [
            {
                // set meta
                name: 'keyWords',
                content: '关键词'
            },
            {
                name: 'description',
                content: '描述'
            }
        ]
    }
}
</script>

<style lang="less">
body {
    background-color: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft YaHei, sans-serif;
    margin: 0;
    font-size: 18px;
}
.app {
    background-color: #fff;
    margin: 20px auto;
    padding: 24px 32px;
    width: 50vw;
    min-width: 652px;
    max-width: 1300px;
}
</style>
