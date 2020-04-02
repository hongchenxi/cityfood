<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"/>
    </header>
</template>

<script>
    export default {
        name: "HeaderTop",
        props: {
            title: String
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        background-color #fff
        position fixed
        z-index 100
        left 0
        right 0
        width 100%
        height 45px
        .header_menu
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            background-color yellow
            text-align center
            .icon-menu
                font-size 25px
                color #999

        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #000
            text-align center
            .header_title_text
                font-size 24px
                font-width 500
                color #000
                display block
        .header_search
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            background-color yellow
            text-align center
            .icon-menu
                font-size 25px
                color #999

</style>
