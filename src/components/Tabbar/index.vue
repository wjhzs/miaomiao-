<template>
  <div class="tabbar"  v-if="this.$store.state.isTabbar">
    <ul>
      <router-link to="/movie" tag="li" active-class="sel"><i class="iconfont icon-dianying"></i><p>电影</p></router-link>
      <router-link to="/cinema" tag="li" active-class="sel"><i class="iconfont icon-yingyuan"></i><p>影院</p></router-link>
      <router-link to="/mine" tag="li" active-class="sel"><i class="iconfont icon-wode"></i><p>我的</p></router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .tabbar{
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 100;
    ul{
      border-top: 2px solid lightgoldenrodyellow;
      height: 40px;
      display: flex;
      align-items: center;
      text-align: center;
      background: white;
      // list-style: none;
      li{
        flex: 1;
        font-size: 14px;
      }
    }
  }
</style>
