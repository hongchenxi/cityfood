<template>
    <section class="img-banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-color: pink"></div>
                <div class="swiper-slide" style="background-color: yellow"></div>
                <div class="swiper-slide" style="background-color: green"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: "ImgBanner",
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
    .img-banner
        width 100%
        height 200px
        .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                    display flex
                    justify-content center
                    align-items flex-start
                    flex-wrap wrap
            .swiper-pagination
                >span.swiper-pagination-bullet-active
                    background #ffffff
</style>
