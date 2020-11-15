<template>
  <div id="app">


    <!-- 底部菜单 -->
    <div id="footer">
      <Tabbar></Tabbar>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style>

</style>
