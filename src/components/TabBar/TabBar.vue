<template>
    <div class="tabbar">
        <span class="tab_item" :class="{on: '/home' === $route.path}" @click="switchTo('/home')">
            <span class="item_icon">
                <i class="iconfont icon-home"></i>
            </span>
            <span>首页</span>
        </span>
        <a href="javascript:;" class="tab_item" :class="{on: '/city' === $route.path}" @click="switchTo('/city')">
            <span class="item_icon">
                <i class="iconfont icon-city"></i>
            </span>
            <span>城市</span>
        </a>
        <a href="javascript:;" class="tab_item" :class="{on: '/mine' === $route.path}" @click="switchTo('/mine')">
            <span class="item_icon">
                <i class="iconfont icon-mine"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        methods: {
            switchTo (path) {
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tabbar
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .tab_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999
            &.on
                color #02a774
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>
