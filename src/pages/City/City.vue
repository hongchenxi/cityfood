<template>
    <section class="city">
        <Search/>
        <div class="city_content">
            <ImgBanner/>
            <section class="hot_city">
                <span class="city_name">热门城市</span>
            </section>
            <section class="citys-food">
                <div class="citys_food_container">
                    <div class="city_food_cell" v-for="(index) in 6" :key="index">
                        <img src="" alt="">
                        <div class="info">
                            <span class="city_info">
                                <span>桂林</span>
                                <span>桂林山水甲天下</span>
                            </span>
                            <span class="hot">
                                <span class="hot_count">365724 助力</span>
                                <span><i class="iconfont icon-hot"></i></span>
                            </span>
                        </div>
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
                    </div>
                </div>
            </section>
            <section class="float-add">
                <span class="add"><i class="iconfont icon-add"></i></span>
            </section>
        </div>
    </section>
</template>

<script>
    import Search from "../../components/Search/Search"
    import ImgBanner from "../../components/ImgBanner/ImgBanner"
    export default {
        name: "City",
        components: {
            Search,
            ImgBanner
        }
    }
</script>

<style lang="stylus" scoped>
    .city
        width 100%
        .city-sarch
            position fixed
            width 100%
        .city_content
            width 100%
            position: fixed
            top 59px
            bottom 46px
            overflow-y auto
            background-color #fff

            .hot_city
                background-color #fff
                padding 14px
                .city_name
                    font-size 16px
                    color #000
                    font-weight bold
            .citys-food
                width 100%
                background-color #fff
                .citys_food_container
                    padding 0 10px
                    .city_food_cell
                        width 100%
                        height 200px
                        margin-bottom 10px
                        border-radius 20px
                        background-color pink
                        position: relative
                        .info
                            display flex
                            padding 18px 14px 0 14px
                            position: relative
                            justify-content space-between
                            align-items flex-start
                            .city_info
                                >span
                                    display block
                                    color #fff
                                    &:nth-of-type(1)
                                        font-size 24px
                                        font-weight bold
                                    &:last-child
                                        font-size 16px
                                        font-weight normal
                                        margin-top: 8px
                            .hot
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


                        .category
                            width 70%
                            height 80px
                            background-color rgba(255, 255, 255, .8)
                            position: absolute
                            bottom 20px
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

            .float-add
                position fixed
                z-index 100
                right 10px
                bottom 10%
                .add
                    display block
                    width 40px
                    height 40px
                    border-radius 50%
                    background-color #fff
                    text-align center
                    box-shadow 0 2px 2px 2px rgba(0,0,0, .2)
                    .icon-add
                        color #ff0000
                        font-size 25px
                        font-weight bold
                        line-height 40px

</style>
