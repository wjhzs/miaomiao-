<template>
  <div id="city" ref="city" :style="cityListHeight.height">
    <div class="city_text">
      <mt-index-list>
        <mt-index-section :index="item.index" v-for="item in cityList" :key="item.cityId">
          <div v-for="(city,index) in item.list" :key="index" @click="goCinema(city.name,city.cityId)">
            <mt-cell :title="city.name" ></mt-cell>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexList, IndexSection } from "mint-ui";
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
// import Bscroll from 'better-scroll';
export default {
  data () {
    return {
      cityList:[],
      cityListHeight: {
        height: '0px'
      }
    }
  },
  mounted () {
    this.cityListHeight.height = document.documentElement.clientHeight - 50 + 'px'
    // console.log(document.documentElement.clientHeight);
    this.axios({
      url: 'https://m.maizuo.com/gateway?k=3400573',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603616525311926294839302"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    })
    .then((res)=>{
      // console.log(res);
      // this.cityList = res.data.cities;
      this.cityList=this.handleList(res.data.cities);
      // this.$nextTick(()=>{
      //   new Bscroll(this.$refs.city,{})
      // })
    })
  },
  methods: {
    //点击城市跳转对应的影院
    goCinema(name,cityId){
      // console.log(id);
      localStorage.setItem('name',name)
      localStorage.setItem('cityId',cityId)
      this.$router.push('/movie/nowPlaying')
      this.$store.commit('city/CITY_INFO',{name,cityId})
    },


    handleList(data){
      var AbcList = [];
      for(var i = 65;i<91;i++){
        AbcList.push(String.fromCharCode(i))
      }
      // console.log(AbcList)
      var newList = [];
      for(var j=0;j<AbcList.length;j++){
        var list = data.filter(item=>item.pinyin.substring(0,1)===AbcList[j].toLowerCase())
        if(AbcList.length > 0){
            newList.push({
            index: AbcList[j],
            list: list
          })
        }
      }
      // console.log(newList)
      return newList
    }
  }
};
</script>

<style lang="less" scoped>
  #city{
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 90px;
    left: 0;
  }
</style>
