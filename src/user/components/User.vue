<template>
  <div class="page-user">
    <div class="UCenter-bg">
      <BaseInfo
        :userInfo="userInfo"
        :classInfo="classInfo"/>
      <img
        src="http://cms.jieyuhua.top/wave.gif"
        mode="scaleToFill"
        class="gif-wave"
        alt=""/>
    </div>
    <StatisticBar
      :userInfo="userInfo"
      :classInfo="classInfo"/>
    <iMenu
      :userInfo="userInfo"/>
  </div>
</template>

<script>
import BaseInfo from './user/BaseInfo.vue'
import StatisticBar from './user/StatisticBar'
import iMenu from './user/Menu.vue'
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  components: {
    BaseInfo,
    StatisticBar,
    iMenu
  }
}
</script>

<style scoped>
.UCenter-bg {
  background-image: url(http://cms.jieyuhua.top/mini_user_bg.jpg);
  background-size: cover;
  height: 275px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.UCenter-bg img {
  width: 100px;
  height: 100px;
}
.UCenter-bg .gif-wave {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;
  height: 50px;
}
map, .mapBox {
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;
  height: 50px;
}
map, .mapBox {
  width: 375px;
  height: 150px;
}
</style>
