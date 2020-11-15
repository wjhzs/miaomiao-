<template>
  <div class="swiper-container detailBanner" >
    <div class="swiper-wrapper" >
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props:['perview','myclassname'],
  mounted() {
    new Swiper("."+this.myclassname, {
      slidesPerView: this.perview,
      spaceBetween: 20,
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
    width: 100%;
    
}
</style>
