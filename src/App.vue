<template>
<div id="app">
    <!-- <b-container> -->
      <b-row class="justify-content-sm-center">
        <b-col sm="auto">
          <GithubHeatMapBox />
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

      <b-row class="justify-content-sm-center">
        <b-col id="left_widget" sm="auto">
          <CommonImageUrlCardSmall img="https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/ca/2a/15/ca2a15d4-a84d-7cd6-d7f4-51659f75aaf2/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp" url="https://app.aves.art/page/app_download" />
        </b-col>
        <b-col id="right_widget" sm="auto">
          <CommonImageUrlCardSmall img="https://raw.githubusercontent.com/CyrusF/AnoMe/main/static/images/favicon.jpg" url="https://github.com/CyrusF/AnoMe" />
        </b-col>
      </b-row>
    <!-- </b-container> -->
</div>
</template>


<script>
import axios from 'axios';
import GithubHeatMapBox from './components/GithubHeatMapBox.vue'
import DoubanCardSmall from './components/DoubanCardSmall.vue';
import StravaCardSmall from './components/StravaCardSmall.vue';
import CommonImageUrlCardSmall from './components/CommonImageUrlCardSmall.vue'

export default {
  name: 'App',
  components: {
    GithubHeatMapBox,
    DoubanCardSmall,
    StravaCardSmall,
    CommonImageUrlCardSmall
  },
  data() {
    return {
      doubanStats: {
        "total_data": {
          "movie": 0,
          "book": 0,
          "music": 0,
        },
        "2022": {
          "movie": 0,
          "book": 0,
          "music": 0,
        }
      },
      type: "movie",
      verb: "看",
      measure: "部",
      stravaStats: {
        "distance": "0.0 km",
        "time": "0h 0m",
        "elvation": "0 m"
      }
    };
  },

  mounted() {
    axios
      .get(`https://qc36tt.api.cloudendpoint.cn/getUserData?id=61dfbb2b3c78380251b30213`)
      .then(response => {
        this.doubanStats = response.data.doubanStats
        this.stravaStats = response.data.stravaStats
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
  src: url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_zmpm5ncy4zp.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}

@font-face {
  font-family: 'PuhuiTi-Bold';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_1gyjqnctxxn.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_1gyjqnctxxn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_1gyjqnctxxn.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_1gyjqnctxxn.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_1gyjqnctxxn.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_1gyjqnctxxn.svg#Alibaba-PuHuiTi-Bold') format('svg'); /* iOS 4.1- */
}

@font-face {
  font-family: 'PuhuiTi-Regular';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_z4n8zrtq4tl.svg#Alibaba-PuHuiTi-Regular') format('svg'); /* iOS 4.1- */
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
  margin-top: 22px;
}
#left_widget {
  padding-right: 11px;
  padding-left: 0px;
  margin-top: 22px;
}
</style>
