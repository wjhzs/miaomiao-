<template>
  <div id="movie">
      <!-- 电影界面头部 -->
      <Header></Header>
      <!-- 电影界面导航 -->
      <Nav></Nav>
      <keep-alive>
        <router-view />
      </keep-alive>
      <!-- <router-view name="Detail" /> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
export default {
  name: 'Movie',
  components: {
    Header,Nav
  }
}
</script>
<style lang="less" scoped>
  #movie{

  }
</style>
