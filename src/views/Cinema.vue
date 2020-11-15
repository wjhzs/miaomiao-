<template>
  <div class="movie">
      <!-- 影院界面头部 -->
      <Header title="喵喵影院">
        <!-- <div class="backBtn"><button @click="goBack()">返回</button></div> -->
      </Header>
      <!-- 影院列表区域 -->
      <CinemaList></CinemaList>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CinemaList from '@/components/CinemaList'
export default {
  name: 'Cinema',
  components: {
    Header,CinemaList
  },
  methods: {
    // goBack(){
    //   this.$router.go(-1);
    // }
  }
}
</script>
<style lang="less" scoped>
  .movie{
    // position: relative;
    // .backBtn{
    //   position: absolute;
    //   top: 0px;
    //   left: 10px;
    //   color: white;
    // }
  }
</style>
