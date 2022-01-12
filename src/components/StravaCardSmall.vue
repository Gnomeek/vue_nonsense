<template>
  <div class="stravaCardRoot">
    <div class="dataContainer">
      <div class="distanceTextView"><span class="distanceText">距离</span><span class="distanceData">{{stravaStats["distance"]}}</span></div>
      <div class="timeTextView"><span class="timeText">时间</span><span class="timeData">{{stravaStats["time"]}}</span></div>
      <div class="elvationTextView"><span class="elvationText">海拔</span><span class="elvationData">{{stravaStats["elvation"]}}</span></div>
    </div>
    <div class="footerContainer">
      <div class="svgObj"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StravaCardSmall',
  props: {
    stravaStats: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.stravaCardRoot {
  width: 169px;
  height: 169px;
  background: rgba(252,82,0,1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  overflow: hidden;
}
.dataContainer {
  width: 75px;
  height: 169px;
  padding: 12px 0px;
  opacity: 1;
  position: absolute;
  top: calc(50% - 169px/2);
  left: 14px;
  overflow: hidden;
}
.distanceTextView {
  width: 75px;
  height: 44px;
  margin: 2px;
  opacity: 1;
  position: absolute;
  top: 12px;
  left: 0px;
  overflow: hidden;
}
.distanceText {
  width: 26px;
  color: rgba(255,255,255,1);
  position: relative;
  top: 0px;
  left: 0px;
  font-family: PuHuiTi-Bold;
  line-height: 18px;
  font-size: 13px;
  opacity: 1;
  text-align: left;
}
.distanceData {
  width: 75px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 20px;
  left: 0px;
  font-family: PuHuiTi-Regular;
  font-size: 20px;
  line-height: 24px;
  opacity: 1;
  text-align: left;
}
.timeTextView {
  width: 75px;
  height: 44px;
  /* background: url("../images/timeTextView.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 2px;
  opacity: 1;
  position: absolute;
  top: 62px;
  left: 0px;
  overflow: hidden;
}
.timeText {
  width: 26px;
  color: rgba(255,255,255,1);
  position: relative;
  top: 0px;
  left: 0px;
  font-family: PuHuiTi-Bold;
  line-height: 18px;
  font-size: 13px;
  opacity: 1;
  text-align: left;
}
.timeData {
  width: 59px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 20px;
  left: 0px;
  font-family: PuHuiTi-Regular;
  font-size: 20px;
  line-height: 24px;
  opacity: 1;
  text-align: left;
}
.elvationTextView {
  width: 75px;
  height: 44px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 2px;
  opacity: 1;
  position: absolute;
  top: 113px;
  left: 0px;
  overflow: hidden;
}
.elvationText {
  width: 26px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: PuhuiTi-Bold;
  line-height: 18px;
  font-size: 13px;
  opacity: 1;
  text-align: left;
}
.elvationData {
  width: 59px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 20px;
  left: 0px;
  font-family: PuhuiTi-Regular;
  font-size: 20px;
  opacity: 1;
  line-height: 24px;
  text-align: left;
}
.footerContainer {
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,0);
  opacity: 1;
  position: absolute;
  top: 131px;
  left: 131px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
}
.svgObj {
  width: 17px;
  height: 24px;
  background: url("../assets/strava_icon_small.svg");
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 3px;
}
</style>
