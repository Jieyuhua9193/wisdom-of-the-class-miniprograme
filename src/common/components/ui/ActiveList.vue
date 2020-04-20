<template>
  <div class="active-list flex">
    <div
      class="flex-sub active-item margin-xs radius"
      v-for="(item, index) in activeList"
      :key="index">
      <img :src="item.img" class="img" alt="加载...">
      <span class="tag">{{item.status}}</span>
      <div class="active-content padding-sm">
        <em class="title">{{item.title}}</em>
        <p class="text">
          <span>人员：</span>
          <span>{{item.booking}} / {{item.maxStudent}}</span>
        </p>
        <p class="text">{{item.leave}}，{{item.score}}德育分</p>
        <p class="text text-orange">
          <span>{{item.startAt}}</span>至
          <span>{{item.endAt}}</span>
        </p>
      </div>
    </div>
    <div class="flex-sub" v-if="activeList"></div>
  </div>
</template>

<script>
export default {
  props: {
    activeList: {
      type: Array,
      default: [
        {
          title: '墨香书法大赛',
          startAt: '2020-4-20',
          endAt: '2020-4-21',
          leave: '院级',
          score: 5,
          booking: 10,
          maxStudent: 32,
          status: '进行中',
          img: 'http://qiniu.jieyuhua.top/blog/library/3.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.active-item {
  background: #fff;
  overflow: hidden;
  position: relative;
}
.active-content {
  line-height: 16px;
}
.active-item .img {
  width: 100%;
  height: 90px;
}
.active-item .text {
  font-size: 10px;
}
</style>
