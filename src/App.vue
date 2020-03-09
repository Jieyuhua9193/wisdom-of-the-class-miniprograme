<script>
import commonVuex from '@/common/vuex/common'
import commonClient from '@/common/apis'

export default {
  mixins: [commonVuex],
  created () {
    this.login()
  },
  methods: {
    login () {
      wx.login({
        success: r => {
          if (r && r.code) {
            wx.request({
              success: res => {
                commonClient.login({openid: res.data.openid}).then(res => {
                  console.log(res)
                })
              },
              fail: err => {
                console.log('err')
                console.log('err', err)
              },
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                appid: 'wx34c5a9c126fefd75',
                secret: '82f2e2934b30301922549dbb4dee69dc',
                js_code: r.code,
                grant_type: 'authorization_code'
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style>
@import "../static/colorui/main.wxss";
@import "../static/colorui/icon.wxss";
.scrollPage {
  height: 100vh;
}
.nav-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px 0px;
  justify-content: space-between;
}
.nav-li {
  padding: 15px;
  border-radius: 6px;
  width: 45%;
  margin: 0 2.5% 20px;
  background-image: url(https://image.weilanwl.com/color2.0/cardBg.png);
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}
.nav-li::after {
  content: "";
  position: absolute;
  z-index: -1;
  background-color: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -10%;
  border-radius: 5px;
  opacity: 0.2;
  transform: scale(0.9, 0.9);
}
.nav-li.cur {
  color: #fff;
  background: rgb(94, 185, 94);
  box-shadow: 2px 2px 3px rgba(94, 185, 94, 0.4);
}
.nav-title {
  font-size: 16px;
  font-weight: 300;
}
.nav-title::first-letter {
  font-size: 20px;
  margin-right: 2px;
}
.nav-name {
  font-size: 14px;
  text-transform: Capitalize;
  margin-top: 10px;
  position: relative;
}
.nav-name::before {
  content: "";
  position: absolute;
  display: block;
  width: 20px;
  height: 3px;
  background: #fff;
  bottom: 0;
  right: 0;
  opacity: 0.5;
}
.nav-name::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #fff;
  bottom: 0;
  right: 20px;
  opacity: 0.3;
}
.nav-name::first-letter {
  font-weight: bold;
  font-size: 18px;
  margin-right: 1px;
}
.nav-li text {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 26px;
  width: 30px;
  height:30px;
  text-align: center;
  line-height: 30px;
}
.text-light {
  font-weight: 300;
}
</style>
