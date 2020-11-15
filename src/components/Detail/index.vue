<template>
  <div id="detail">
    <Header title="电影详情">
      <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
    </Header>
    <div class="detail_body">
      <div class="img">
        <img :src="list.poster" alt="" />
      </div>
      <div class="text">
        <h3>{{ list.name }}</h3>
        <p>{{ list.category }}</p>
        <p>{{ list.nation }} | {{ list.runtime }}</p>
        <p class="white-space">{{ list.synopsis }}</p>
      </div>
      <div class="actor">
        <h3>演职人员</h3>
        <Banner
          :key="list.length"
          perview="4"
          class="actorswiper"
          myclassname="actorswiper"
        >
          <div
            class="swiper-slide"
            v-for="(item, index) in list.actors"
            :key="index"
          >
            <img :src="item.avatarAddress" alt="" />
            <h4>{{ item.name }}</h4>
            <p>{{ item.role }}</p>
          </div>
        </Banner>
      </div>
      <div class="photos">
        <h3>剧照</h3>
        <Banner
          :key="list.length"
          perview="3"
          class="photoswiper"
          myclassname="photoswiper"
        >
          <div
            class="swiper-slide"
            v-for="(item, index) in list.photos"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </Banner>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Banner from '@/components/DetailBanner'
export default {
  components: {
    Header,Banner
  },
  data () {
    return {
      list:[]
    }
  },
  beforeCreate () {
    this.$store.commit('HideTabbar',false)
  },
  beforeDestroy () {
    this.$store.commit('ShowTabbar',true)
  },
  mounted() {
    // console.log(this.$route.params.id);
    var filmId = this.$route.params.id;
    this.axios({
      url: `https://m.maizuo.com/gateway?filmId=${filmId}&k=8947171`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res);
      this.list = res.data.film
    });
  },
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  .iconfont {
    width: 10px;
    height: 10px;
    color: white;
    position: absolute;
    top: 0px;
    left: 10px;
  }
  .detail_body{
    overflow: hidden;


    .img{
      width: 100%;height: 200px;overflow: hidden;
      img{width: 100%;}
    }
    .text{
      padding: 10px;
      background: white;
      p{
        color: #797D82;
        margin-top: 10px;
      }
      .white-space{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
      }
    }
    .actor{
      padding: 10px;
      img{width: 80px;height: 100px;padding-bottom: 10px;}
      h4,p{text-align: center;}
      p{color: #797D82;font-size: 14px;}
    }
    .actor h3,.photos h3{margin-bottom: 10px;}
    .photos{
      padding: 10px;
      .swiper-slide{height: 80px;}
      img{width: 100%;height: 100%;}
    }
  }

}
</style>
