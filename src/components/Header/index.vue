<template>
  <div id="header">
    <h1>{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title:{type:String,default:"喵喵电影"}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  #header{
    width: 100%;
    height: 50px;
    background: #ef4238;
    text-align: center;
    line-height: 50px;
    h1{
      font-size: 18px;
      color: white;
    }
  }
</style>
