<template>
  <div id="cinemaList" ref="cinemaList" :style="cinemaListHeight">
    <ul>
      <li v-for="(item, index) in cinemaList" :key="index">
        <div class="left">
          <span>{{ item.name }}</span>
          <span class="address">{{ item.address }}</span>
        </div>
        <div class="right">
          <div class="price">
            <span>{{ item.lowPrice | price }}</span
            ><span>起</span>
          </div>
          <span>距离未知</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
Vue.filter("price", (data) => {
  return data / 100;
});
import BScroll from "better-scroll";
export default {
  data() {
    return {
      cinemaList: [],
      cinemaListHeight:{
        height: '0px'
      }
    };
  },
  mounted() {
    this.cinemaListHeight.height = document.documentElement.clientHeight - 92 + 'px';

    var id = this.$store.state.city.cityId;
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=4951445`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res);
      this.cinemaList = res.data.cinemas;
      this.$nextTick(() => {
        new BScroll(this.$refs.cinemaList, {
          pullUpLoad: true,
          scrollbar: true,
          pullDownRefresh: true,
        });
      });
    });
  },
};
</script>

<style lang="less" scoped>
#cinemaList {
  overflow: hidden;
  // height: 500px;
  position: fixed;
  top: 50px;
  left: 0px;
  ul {
    width: 100%;
    font-size: 14px;
    li {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #ededed;
      .left {
        display: flex;
        flex-direction: column;
        float: left;
        width: 280px;
        padding-right: 15px;
        .address {
          width: 212px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 5px;
        }
      }
      .right {
        width: 70px;
        font-size: 12px;
        .price{
          color: #ff5f16;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
