<template>
  <div id="nowPlaying" ref="nowPlaying" :style="nowPlayingHeight">
    <Loading v-if="isLoading" />
    <ul v-else>
      <li class="pullDown">{{ pullDown }}</li>
      <li
        v-for="item in nowList"
        :key="item.filmId"
        @click="goDetail(item.filmId)"
      >
        <div class="img">
          <img :src="item.poster" alt="" />
        </div>
        <div class="text">
          <p>
            <span>{{ item.name }}</span
            ><span>{{ item.filmType.name }}</span>
          </p>
          <p>观众评分 {{ item.grade }}</p>
          <p>主演：{{ item.actors | filters }}</p>
          <p>{{ item.nation }} {{ item.runtime }}分钟</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//过滤主演的数据
import Vue from "vue";
Vue.filter("filters", (data) => {
  var name = data.map((item) => item.name);
  return name.join(" ");
});
import BScroll from "better-scroll";

import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);
export default {
  data() {
    return {
      nowList: [],
      nowPlayingHeight: {
        height: "0px",
      },
      prevCityId: -1,
      isLoading: true,
      pullDown: "",
      loading: false,
      current: 1,
      total: 0,
    };
  },
  methods: {
    goDetail(id) {
      // console.log(123);
      this.$router.push({ name: "Detail", params: { id: id } });
    },
  },
  activated() {
    this.nowPlayingHeight.height =
      document.documentElement.clientHeight - 134 + "px";
    var cityId = this.$store.state.city.cityId;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.current}&pageSize=10&type=1&k=592910`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      // console.log(res);
      this.nowList = res.data.films;
      this.isLoading = false;
      this.prevCityId = cityId;
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.nowPlaying, {
          pullUpLoad: true,
          scrollbar: true,
          pullDownRefresh: true,
          probeType: 1,
          click: true,

          // and so on
        });
        scroll.on("scroll", (pos) => {
          if (pos.y > 30) {
            this.pullDown = "正在加载中";
          }
          // console.log(123);
        });
        scroll.on("touchEnd", (pos) => {
          if (pos.y > 30) {
            this.axios({
              url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.current}&pageSize=10&type=1&k=592910`,
              headers: {
                "X-Client-Info":
                  '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100"}',
                "X-Host": "mall.film-ticket.film.list",
              },
            }).then((res) => {
              // console.log(res);
              this.nowList = res.data.films;
              this.isLoading = false;
              this.pullDown = "";
            });
          }
        });
      });
    });
  },
};
</script>

<style lang="less" scoped>
#nowPlaying {
  // height: 550px;
  overflow: hidden;
  position: fixed;
  top: 92px;
  left: 0;
  ul {
    padding-left: 15px;
    .pullDown {
      margin: 0;
      padding: 0;
      border: none;
    }
    li {
      padding: 15px 15px 15px 0px;
      display: flex;
      font-size: 14px;
      border-bottom: 1px solid #ededed;
      .img {
        width: 66px;
        height: 88px;
        img {
          width: 100%;
        }
        padding-right: 10px;
      }
      .text {
        flex: 1;
        line-height: 20px;
      }
    }
  }
}
</style>
