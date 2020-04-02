<template>
    <form class="search_form" @submit.prevent="search">
        <div class="search_container">
            <span><i class="iconfont icon-search"></i></span>
            <input type="search" placeholder="搜索城市和特产" class="search_input">
        </div>
    </form>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .search_form
        clearFix()
        background-color #fff
        position: fixed
        left 0
        top 0
        right 0
        padding 12px 8px
        display flex
        align-items center
        .search_container
            width 100%
            background-color #f2f2f2
            border-radius 20px
            >span
                width 20%
                height 100%
                .icon-search
                    font-size 16px
                    margin 0 10px
                    color #999
            input
                flex 1
                height 35px
                padding 0 4px
                font-weight 200
                outline none
                &.search_input
                    width 80%
                    font-size 14px
                    color #333
                    background-color #f2f2f2
</style>
