<template>
  <div class="commonImgRoot">
      <a :href="url">
          <img class="commonImg" :src="img" >
      </a>
  </div>
</template>

<script>

export default {
  name: 'CommonImageUrlCardSmall',
  props: {
    img: String,
    url: String
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.commonImgRoot {
  width: 169px;
  height: 169px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgb(0, 0, 0);
  overflow: hidden;
}
.commonImg {
  width: 169px;
  height: 169px;
  border: none;
  /* width: 100%; */
  /* height: 100%; */
  
}
</style>