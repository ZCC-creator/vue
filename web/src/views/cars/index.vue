<template>
    <div class="cars-wrap">
        <div class="cars-swiper-wrap">
            <swiper class="swiper" :options="swiperOption">  <!--//滑动代码-->
                <swiper-slide><CarItem /></swiper-slide>
                <swiper-slide><CarItem /></swiper-slide>
                <swiper-slide><CarItem /></swiper-slide>
                <swiper-slide><CarItem /></swiper-slide>
                <swiper-slide><CarItem /></swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
            <div class="swiper-button-next" slot="button-next" @click="next"></div>  
        </div>   
       
    </div>
</template>
<script>
// cars item
import CarItem from "@c/carslist";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css' //////////有点问题
export default{
    name:"Cars",
    components: {CarItem, Swiper, SwiperSlide},
    data(){
        return{
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30, //滑动选择
                freeMode: false, 
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                
                }
            },
            computed:{
                   swiper() {
                     return this.$refs.mySwiper.$swiper
                   }
            }, 
        };
    },  
    methods: {
        // user(){
        //     this.$router.push({
        //         name: "User"
        //     })
        // },
        prev() {
            this.swiper.slidePrev();
        },
        next() {
            this.swiper.slideNext();
        }
    }
}
</script>
<style lang="scss">
@import "./index.scss";

</style>
