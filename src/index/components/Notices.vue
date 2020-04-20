<template>
  <div class="notice-wrap">
    <swiper
      class="card-swiper square-dot"
      indicator-dots="true"
      circular="true"
      autoplay="true"
      interval="5000"
      duration="500"
      @change="onChange"
      indicator-color="#8799a3"
      indicator-active-color="#0081ff">
      <swiper-item v-for="(item, index) in notices" :key="index" :class="{'cur': curCard === index}">
        <div class="swiper-item">
          <div class="notice-info">
            <h2 class="title">{{item.title}}</h2>
            <p class="subtitle">{{item.subtitle}}</p>
            <p class="subtitle">{{cardCur}}</p>
          </div>
          <img :src="item.img" mode="aspectFill" class="notice-img"/>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

export default {
  props: {
    notices: {
      type: Array,
      default: [
        {
          title: '关于做好新生报到工作的通知',
          subtitle: '请各位班干部高度重视，做好组织工作',
          img: 'http://qiniu.jieyuhua.top/blog/library/4.jpg'
        },
        {
          title: '开学第一课',
          subtitle: '晚上7:00，GB302',
          img: 'http://qiniu.jieyuhua.top/blog/library/8.jpg'
        }
      ]
    }
  },
  data () {
    return {
      curCard: 0
    }
  },
  methods: {
    onChange (e) {
      console.log(e)
      const { current } = e.mp.detail
      this.curCard = current
    }
  }
}
</script>

<style scoped>
.swiper-item {
  position: relative;
}
.swiper-item .notice-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}
.swiper-item .notice-img:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .2);
  z-index: 1;
  width: 100%;
  height: 100%;
}
.notice-info {
  margin-top: 42px;
}
.title, .subtitle {
  color: #fff;
  text-align: center;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.subtitle {
  font-size: 12px;
}
.link {
  font-size: 12px;
  float: right;
  margin-right: 20px;
}
</style>
