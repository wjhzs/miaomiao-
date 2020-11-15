<template>
  <div id="comingSoon" ref="comingSoon" :style="comingSoonHeight">
    <Loading v-if="isLoading" />
    <ul v-else>
      <li class="pullDown">{{ pullDown }}</li>
      <li
        v-for="item in comingList"
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
          <p>主演：{{ item.actors | filters }}</p>
          <p>上映时间：</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      comingList: [],
      comingSoonHeight: {
        height: "0px",
      },
      prevCityId: -1,
      isLoading: true,
      pullDown: "",
      current: 1,
    };
  },
  methods: {
    //点击跳转到详情页面
    goDetail(id) {
      this.$router.push({ name: "Detail", params: { id: id } });
    },
  },
  activated() {
    this.comingSoonHeight.height =
      document.documentElement.clientHeight - 134 + "px";
    var cityId = this.$store.state.city.cityId;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.current}&pageSize=10&type=2&k=912911`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res);
      this.comingList = res.data.films;
      this.isLoading = false;
      this.prevCityId = cityId;
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.comingSoon, {
          pullUpLoad: true,
          scrollbar: true,
          pullDownRefresh: true,
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
              url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.current}&pageSize=10&type=2&k=592910`,
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
#comingSoon {
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
