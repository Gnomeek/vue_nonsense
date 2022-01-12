<template>
<div id="app">
    <h1> {{data_id}}</h1>
    <b-container>
      <b-row class="justify-content-sm-center">
        <b-col sm="auto">
          <GithubHeatMapBox msg="Welcome to Your Vue.js App"/>
        </b-col>
      </b-row>

      <b-row class="justify-content-sm-center">
        <b-col id="left_widget" sm="auto">
          <DoubanCardSmall :doubanStats="doubanStats" :type="type" :verb="verb" :measure="measure" />
        </b-col>
        <b-col id="right_widget" sm="auto">
          <StravaCardSmall :stravaStats="stravaStats" />
        </b-col>
      </b-row>
    </b-container>
</div>
</template>


<script>
import axios from 'axios';
import GithubHeatMapBox from './components/GithubHeatMapBox.vue'
import DoubanCardSmall from './components/DoubanCardSmall.vue';
import StravaCardSmall from './components/StravaCardSmall.vue';

export default {
  name: 'App',
  components: {
    GithubHeatMapBox,
    DoubanCardSmall,
    StravaCardSmall,
  },
  data() {
    return {
      doubanStats: {},
      type: "movie",
      verb: "看",
      measure: "部",
      stravaStats: {}
    };
  },

  mounted() {
    axios
      .get(`https://qce78q.api.cloudendpoint.cn/getDoubanStats?id=152076608`)
      .then(response => {
        this.doubanStats = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
      axios
      .get(`https://qce78q.api.cloudendpoint.cn/getStravaStats`)
      .then(response => {
        this.stravaStats = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
};
</script>

<style>
@font-face {
  font-family: 'PuhuiTi-Light';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_33zizlczqae.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_33zizlczqae.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_33zizlczqae.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_33zizlczqae.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_33zizlczqae.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_33zizlczqae.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}

@font-face {
  font-family: 'PuhuiTi-Bold';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_rdlcu0z2i4b.svg#Alibaba-PuHuiTi-Bold') format('svg'); /* iOS 4.1- */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
#right_widget {
  padding-right: 0px;
  padding-left: 11px;
}
#left_widget {
  padding-right: 11px;
  padding-left: 0px;
}
</style>
