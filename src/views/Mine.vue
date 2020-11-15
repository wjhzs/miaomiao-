<template>
  <div id="mine">
      <!-- 我的界面头部 -->
      <Header title="我的喵喵"></Header>
      <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { Toast } from 'mint-ui';
export default {
  name: 'Mine',
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
#mine{
  overflow: hidden;

}
</style>
