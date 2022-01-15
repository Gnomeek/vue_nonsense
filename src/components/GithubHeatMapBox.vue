<template>
  <div class="github_box">
    <img class="github_stats" src="https://github-readme-stats.vercel.app/api?username=gnomeek&hide_title=True&show_icons=True&theme=gruvbox_light&hide_border=True">
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.github_box {
  width: 360px;
  height: 169px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgba(251, 241, 199, 1);
  /* margin-top: 169px; */
}
.github_stats {
  width: 360px;
  height: 169px;
  border: none;
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit:cover; */
}
</style>