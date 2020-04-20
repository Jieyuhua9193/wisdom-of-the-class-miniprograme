<template>
  <div class="active-list flex flex-wrap">
    <div
      class="active-item margin-xs radius"
      v-for="(item, index) in activeList"
      :key="index">
      <img :src="item.img" class="img" mode="widthFix" alt="加载...">
      <span class="tag radius shadow-blur">{{item.status}}</span>
      <div class="active-content padding-sm">
        <em class="title">{{item.title}}</em>
        <p class="text text-gray">
          <span>人员：</span>
          <span>{{item.booking}} / {{item.maxStudent}}</span>
        </p>
        <p class="text text-gray">{{item.leave}}，{{item.score}}德育分</p>
        <p class="text text-orange">
          <span>{{item.startAt}}</span>至
          <span>{{item.endAt}}</span>
        </p>
      </div>
    </div>
    <div class="flex-sub" v-if="(activeList.length)%2 === 1"></div>
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
        },
        {
          title: '服务外包设计大赛',
          startAt: '2020-5-20',
          endAt: '2020-6-21',
          leave: '省级',
          score: 10,
          booking: 1,
          maxStudent: 4,
          status: '进行中',
          img: 'http://qiniu.jieyuhua.top/blog/library/10.jpg'
        },
        {
          title: '第三届文化艺术节',
          startAt: '2020-5-20',
          endAt: '2020-6-21',
          leave: '分院',
          score: 3,
          booking: 0,
          maxStudent: 10,
          status: '未开始',
          img: 'http://qiniu.jieyuhua.top/blog/library/21.jpg'
        },
        {
          title: '第三届寝室文化节',
          startAt: '2020-5-20',
          endAt: '2020-6-21',
          leave: '分院',
          score: 5,
          booking: 0,
          maxStudent: 4,
          status: '未开始',
          img: 'http://qiniu.jieyuhua.top/blog/library/11.jpg'
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
  width: 47%;
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
.tag {
  background: #fff;
  padding: 0 4px;
  color: #666;
  position: absolute;
  top: 7px;
  left: 9px;
  font-size: 10px;
}
</style>
