<template>
  <div id="city">
      <div class="ipt">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入影城名称" v-model="message">
      </div>
      <div class="content">
        <ul class="search_result">
          <li></li>
        </ul>
        <div class="hotCinema">
          <h2>离你最近</h2>
          <div>
            <span v-for="item in hotCinema" :key="item.cinemaId">{{item.name}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotCinema:[],
      message: '',
      searchList:[]
    }
  },
  mounted () {
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.city.cityId}&k=879666`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100","lo":"0","la":"0"}',
        'X-Host': 'mall.film-ticket.cinema.recommend'
      }
    })
    .then((res)=>{
      this.hotCinema = res.data.cinemas
    })
  }
}
</script>

<style lang="less" scoped>
  #city{
    .ipt{
      text-align: center;
      line-height: 40px;
      height: 40px;
      border-bottom: 1px solid #bdc0c5;
      i{padding:6px;border: none;border-radius: 6px 0px 0px 6px;}
      input{outline: none;border: none;width: 300px; height: 28px;padding: 0px 5px;font-size: 14px;border-radius: 0px 6px 6px 0px;}
    }
    .content{
      padding: 10px;
      .hotCinema{
        h2{font-size: 14px;color: #bdc0c5;}
        div{
          margin-top:10px;
          font-size: 12px;
          span{display: inline-block;padding: 4px;margin: 5px;border: 1px solid #bdc0c5;border-radius: 6px;height: 15px;line-height: 15px;text-align: center;}
        }
      }
    }
  }
</style>
