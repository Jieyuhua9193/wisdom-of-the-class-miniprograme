<template>
  <div class="page-bind">
    <form>
      <div class="cu-form-group">
        <div class="title">邮件</div>
        <input
          placeholder="请输入"
          v-model="formData.email"/>
      </div>
      <div class="cu-form-group">
        <div class="title">微信号</div>
        <input
          placeholder="请输入"
          v-model="formData.wxNumber"/>
      </div>
      <div class="cu-form-group">
        <div class="title">微信昵称</div>
        <input
          placeholder="请输入"
          :disabled="true"
          v-model="formData.wxName"/>
      </div>
      <button
        @click="confirm"
        class="cu-btn bg-gradual-purple margin-top _btn">
        确定绑定
      </button>
    </form>
  </div>
</template>

<script>
import commonVuex from '@/common/vuex/common'
import userClient from '@/user/apis'

export default {
  mixins: [commonVuex],
  data () {
    return {
      formData: {
        email: '',
        wxName: '',
        wxNumber: '',
        avatar: '',
        openid: '',
        sex: 1
      }
    }
  },
  onShow () {
    this.init()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.formData.openid = this.miniInfo.openid
      wx.getUserInfo({
        success: r => {
          this.formData.wxName = r.userInfo.nickName
          this.formData.avatar = r.userInfo.avatarUrl
          this.formData.sex = r.userInfo.gender
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    confirm () {
      if (this.check()) {
        userClient.bind(this.formData).then(r => {
          if (r.code === 0) {
            this.$store.commit('SET_USER_INFO', r.result.user)
            this.$store.commit('SET_TOKEN', r.result.token)
            this.showMsg('绑定成功')
            setTimeout(() => {
              this.$router.go(-1)
            }, 500)
          } else {
            this.showMsg(r.msg)
          }
        })
      }
    },
    check () {
      if (this.formData.email.trim() === '') {
        this.showMsg('请输入邮箱')
      } else {
        return true
      }
    },
    showMsg (msg) {
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1000
      })
    }
  }
}
</script>

<style scoped>
.title {
  width: 80px;
}
._btn {
  width: 100%;
  height: 40px;
}
</style>
