<template>
  <div>
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div
            class="swiper-slide"
             v-for	 = "(carousel,index) in locate"
            :key = "carousel.id"
        >
          <img :src="carousel.imgUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name:'Carousel',
  props:[ 'locate' ],
  watch:{
    // immediate： true;的作用是不管数据有没有变化刷新了立即监听一次)：
    locate: {  immediate: true, handler(newValue,oldValue){
        this.$nextTick( ()=>{
          new Swiper ( this.$refs.mySwiper, {  loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
          })
        } ) } } },
}
</script>

<style scoped>

</style>