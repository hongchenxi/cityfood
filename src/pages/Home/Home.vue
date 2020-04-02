<template>
    <section class="home">
        <HeaderTop title="每日风物">
            <router-link class="header_menu" slot="left" to="/123">
                <i class="iconfont icon-menu"></i>
            </router-link>
            <router-link class="header_search" slot="right" to="/123">
                <i class="iconfont icon-search"></i>
            </router-link>
        </HeaderTop>
        <div class="home_content">
            <section class="title">
                <span class="date">Mar.09</span>
                <span>庚子年正月十五</span>
                <span>大雪</span>
            </section>
            <section class="banner">
                <div class="banner_content">
                    <!--<img src="" alt="">-->
                    <span class="location">
                        <i class="iconfont icon-city"></i>
                        <span>桂林</span>
                    </span>
                    <span class="play">
                        <span class="triangle"></span>
                    </span>
                    <div class="intro">
                        <span>桂林米粉</span>
                        <span>说桂林米粉是烹调艺术经典，那也一点不过誉</span>
                    </div>
                    <span class="like">
                        <i class="iconfont icon-like"></i>
                    </span>
                </div>
            </section>
            <section class="tag">
                <ul>
                    <li v-for="(index) in 3" :key="index" :class="{active: 1 === index}"></li>
                </ul>
                <span>往期风物<span class="iconfont icon-more"></span></span>
            </section>
            <section class="city-info">
                <section class="top">
                    <span class="city"><span class="iconfont icon-rili"></span>本周城市</span>
                    <div class="category">
                        <li>
                            <span>特产</span>
                            <span>1261</span>
                        </li>
                        <li>
                            <span>景点</span>
                            <span>83</span>
                        </li>
                        <li>
                            <span>非遗</span>
                            <span>16</span>
                        </li>
                        <li>
                            <span>品牌</span>
                            <span>183</span>
                        </li>
                    </div>
                    <span class="hot">
                        <span class="hot_count">365724 助力</span>
                        <span><i class="iconfont icon-hot"></i></span>
                    </span>
                </section>
                <section class="middle">
                    <span class="discuss_top_triangle"></span>
                    <div class="discuss">
                        <span class="avatars">
                            <li></li>
                            <li></li>
                            <li></li>
                        </span>
                        <span class="topic">聊聊你最喜欢的青岛美食</span>
                        <span class="count">1434人讨论中<i class="iconfont icon-more"></i></span>
                    </div>
                </section>
                <section class="bottom">
                    <div class="city_select">
                        <span class="mark">城市精选</span>
                        <div class="pic_wrapper">
                            <ul class="pic_list">
                                <li class="pic_item" v-for="(index) in 5" :key="index">
                                    <img src="" alt="">
                                    <div class="subtitle ellipsis" >没有什么烦恼是一瓶啤酒解决不了的，如果有那就一扎</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>
            <ImgBanner/>
            <section class="divider-tag">
                <span>风物精选</span>
            </section>
            <section class="articles">
                <div class="articles_container">
                    <div class="article_cell" v-for="(index) in 6" :key="index">
                        <div class="top">
                            <span>特产<span class="dot">•</span>青岛</span>
                            <div class="pic">
                                <img class="pic" src="" alt="">
                            </div>
                        </div>
                        <div class="middle">相信我，青岛人就生活在这样奇幻的山河湖海里</div>
                        <div class="bottom">
                            <span class="left"><div class="avatar"><img src="" alt=""></div><span>纵横浮生</span></span>
                            <span class="right">
                                <span><i class="iconfont icon-pinglun"></i>326</span>
                                <span><i class="iconfont icon-zan"></i>254</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop"
    import ImgBanner from "../../components/ImgBanner/ImgBanner"
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: "Home",
        components: {
            HeaderTop,
            ImgBanner
        },
        mounted() {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                },
            })
        }

    }
</script>

<style lang="stylus" scoped>
    .home
        width 100%

    .home_content
        position fixed
        top 45px
        bottom 46px
        width 100%
        background-color #fff
        overflow-y auto

        .title
            width 100%
            font-size 20px
            font-family "Songti SC"
            text-align center
            padding 20px 0
            background-color #fff

            .date
                font-weight 200
                color #333
                position relative

                &:after
                    content ""
                    width 1px
                    height 10px
                    background-color #333
                    position absolute
                    right -10px
                    top 50%
                    transform translateY(-50%)

            span:nth-of-type(2)
                margin-left 20px
                font-weight bold

            span:nth-of-type(3)
                font-weight bold

        .banner
            padding 10px 10px 0 10px
            height 180px
            background-color #fff

            .banner_content
                width 100%
                height 100%
                background-color pink
                border-radius 18px
                position: relative

                .location
                    position: absolute;
                    top 10px
                    right 10px
                    color #fff
                    padding 10px 14px
                    border-radius 18px
                    background-color rgba(0, 0, 0, .5)

                .play
                    position absolute
                    top 50%
                    left 50%
                    transform translate(-50%, -50%)
                    width 60px
                    height 60px
                    border-radius 50%
                    background-color rgba(0, 0, 0, .5)
                    display flex
                    align-items center
                    justify-content center

                    .triangle
                        width 0
                        height 0
                        border-top 10px solid transparent
                        border-left 10px solid pink
                        border-bottom 10px solid transparent
                        border-right 10px solid transparent
                        margin-left 10px

                .intro
                    color #fff
                    display flex
                    flex-direction column
                    position: absolute
                    bottom 20px
                    left 20px

                    span:nth-of-type(1)
                        font-size 18px
                        font-weight bold
                        margin-bottom 10px

                    span:nth-of-type(2)
                        font-size 14px


                .like
                    position: absolute
                    right 10px
                    bottom 20px

                    .icon-like
                        font-size 25px
                        color #fff

        .tag
            padding 10px 5px
            color #999
            font-size 14px
            text-align right

            ul
                display inline
                margin-right 10px

                li
                    margin-left 10px
                    display inline-block
                    width 6px
                    height 6px
                    border-radius 50%
                    background-color #999
                    margin-left 5px

                    &.active
                        background-color #333


        .city-info
            background-color #6c9aca
            border-top-left-radius 20px
            border-top-right-radius 20px

            .top
                position: relative
                /*background-color yellow*/
                height 180px

                .city
                    color #fff
                    font-size 16px
                    position: absolute
                    left 14px
                    top 20px
                    font-weight 500
                    display flex
                    align-items center

                    .icon-rili
                        font-size 25px

                .category
                    width 70%
                    height 80px
                    background-color rgba(255, 255, 255, .8)
                    position: absolute
                    top 20px
                    right 0
                    border-top-left-radius 40px
                    border-bottom-left-radius 40px
                    display flex
                    align-items center

                    li
                        flex 1
                        height 100%
                        display flex
                        align-items center
                        flex-direction column
                        justify-content center
                        position: relative;

                        &:nth-of-type(1)
                            margin-left 10px

                        &:after
                            content ""
                            background-color #fff
                            width 1px
                            height 40px
                            position: absolute;
                            right -5px
                            top 50%
                            transform translateY(-50%)

                        span:nth-of-type(1)
                            color #999
                            font-size 14px
                            margin-bottom 6px

                        span:nth-of-type(2)
                            color #333
                            font-size 18px
                            font-weight bold

                .hot
                    position: absolute
                    right 10px
                    top 120px
                    background-color rgba(0, 0, 0, .3)
                    border-radius 40px
                    padding 5px 10px
                    display flex
                    align-items center

                    .hot_count
                        font-size 14px
                        color #fff

                    .icon-hot
                        color red
                        font-size 25px


            .middle
                position: relative
                height 100px
                .discuss_top_triangle
                    position: absolute;
                    top -20px
                    left 40px
                    width 0
                    height 0
                    border-top 10px solid transparent
                    border-left 10px solid transparent
                    border-right 10px solid transparent
                    border-bottom 10px solid #304994

                .discuss
                    /*margin-top 20px*/
                    height 60px
                    background-color #304994
                    border-top-left-radius: 30px
                    border-bottom-left-radius: 30px
                    margin-left 10px
                    display flex
                    align-items center
                    .avatars
                        flex-shrink 0
                        margin: 0 5px 0 20px;
                        li
                            width 16px
                            height 16px
                            border-radius 50%
                            border 1px solid #fff
                            float left
                            &:nth-of-type(2)
                                margin 0 -5px
                                width 20px
                                height 20px
                    .topic
                        color #fff
                        font-size 16px
                        font-weight 500
                    .count
                        color #fff
                        font-size 14px
                        font-weight 200
                        position absolute
                        right 5px


            .bottom
                padding: 10px 0 10px 10px
                .city_select
                    background-color #385697
                    border-top-left-radius 20px
                    border-bottom-left-radius 20px
                    .mark
                        font-size 16px
                        color #fff
                        font-weight 500
                        display inline-block
                        margin-top 14px
                        margin-left 14px
                    .pic_wrapper
                        width 100%
                        overflow hidden
                        white-space nowrap
                        margin-top 16px
                        .pic_list
                            font-size 0
                            overflow-x auto
                            .pic_item
                                display inline-block
                                margin-left 14px
                                width 140px
                                img
                                    display inline-block
                                    width 100%
                                    height 120px
                                    background-color pink
                                    border-radius 10px
                                .subtitle
                                    display -webkit-box
                                    -webkit-line-clamp 2
                                    -webkit-box-orient vertical
                                    font-size 16px
                                    color #fff
                                    margin 10px
                                    white-space normal
                                    line-height 24px
        .divider-tag
            background-color #f5f5f5
            text-align center
            padding 20px 0
            >span
                font-size 18px
                font-weight 500
                color #000
                text-align center
                position: relative
                &:before
                    content ""
                    position: absolute
                    width 10px
                    height 2px
                    background-color red
                    left -26px
                    top 50%
                    transform translateY(-50%)
                &:after
                    content ""
                    position: absolute
                    width 10px
                    height 2px
                    background-color red
                    right -26px
                    top 50%
                    transform translateY(-50%)
        .articles
            width 100%
            height 500px
            background-color pink
            .articles_container
                margin 10px 0
                background-color #f5f5f5
                .article_cell
                    background-color #fff
                    padding 30px 10px 10px 10px
                    margin-bottom 10px
                    .top
                        position: relative
                        .dot
                            font-size 6px
                            margin 0 4px
                            color #999
                        >span
                            width 120px
                            height 30px
                            color #000
                            font-size 14px
                            font-weight 500
                            border-radius 15px
                            position absolute
                            left 0
                            top -15px
                            background-color pink
                            text-align center
                            line-height 30px
                        .pic
                            width 100%
                            height 160px
                            background-color aquamarine
                            border-radius 6px
                            overflow: hidden;


                    .middle
                        font-weight 500
                        font-size 16
                        margin 10px 0
                    .bottom

                        display flex
                        align-items center
                        justify-content space-between
                        padding 5px 10px 10px 0px
                        span
                            font-size 14px
                            color #666
                        .left
                            display flex
                            align-items center
                            .avatar
                                width 18px
                                height 18px
                                border-radius 50%
                                background-color pink
                                margin-right 5px
                        .right
                            span
                                margin-left 10px
                                .iconfont
                                    margin-right 5px


</style>
