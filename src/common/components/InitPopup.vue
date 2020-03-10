<template>
  <van-action-sheet
    id="login-pop"
    :show="show"
    :close-on-click-overlay="true">
    <div class="login-wrap">
      <h2 class="title">未检测到用户信息</h2>
      <img src="https://wx-static.drip.im/img/zd-wap/login/welcome.svg" alt=""/>
      <button
        open-type="getUserInfo"
        @getuserinfo="bind"
        class="cu-btn bg-gradual-orange margin-tb-sm _btn">
        绑定已有账号
      </button>
      <button
        open-type="getUserInfo"
        @getuserinfo="create"
        class="cu-btn bg-gradual-red _btn">
        创建新用户
      </button>
    </div>
  </van-action-sheet>
</template>

<script>
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  props: {
    show: Boolean
  },
  methods: {
    bind (e) {
      console.log(e)
      this.$emit('close')
    },
    create () {
      this.$emit('close')
      this.$router.push('/user/views/create')
    }
  }
}
</script>

<style scoped>
.login-wrap {
  text-align: center;
  font-size: 15px;
  padding-top: 35px;
  padding-bottom: 20px;
}
.login-wrap h2 {
  font-size: 22px;
  color: #000;
}
.login-wrap image {
  width: 234px;
  height: 176px;
}
.use-other-btn {
  color: #7A8CA9;
  margin-top: 24px;
}
._btn {
  width: 220px;
  padding: 18px 0;
}
</style>

<style>
.login-wrap .van-button--large {
  width: 80%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
}
#login-pop .van-popup {
  border-radius: 10px;
  width: 275px;
  right: 0;
  margin: 0 auto 50%;
}
#login-pop .login-close.van-button--large {
  margin-top: 10px;
  background-color: #F0F0F0;
  border: none;
  color: #333333;
  font-weight: 400;
}
</style>
