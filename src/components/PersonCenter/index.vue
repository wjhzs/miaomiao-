<template>
  <div id="center">
    个人中心 <button @click="goLoginOut">退出</button>
  </div>
</template>

<script>
export default {
  methods: {
    goLoginOut(){
      this.$router.push('/mine/login')
    }
  }
}
</script>

<style>

</style>
