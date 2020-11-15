<template>
  <div id="nav">
    <ul>
      <router-link to="/movie/city" tag="li" active-class="sel">{{$store.state.city.name}}</router-link>
      <router-link to="/movie/nowPlaying" tag="li" active-class="sel">正在热映</router-link>
      <router-link to="/movie/comingSoon" tag="li" active-class="sel">即将上映</router-link>
      <router-link to="/movie/search" tag="li" active-class="sel">搜索</router-link>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  #nav{
    ul{
      width: 100%;
      height: 40px;
      border-bottom: 2px solid lightgoldenrodyellow;
      display: flex;
      align-items: center;
      text-align: center;
      li{
        flex: 1;

      }
    }
  }
</style>
