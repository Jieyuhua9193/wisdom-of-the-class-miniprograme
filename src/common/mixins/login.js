import commonClient from '@/common/apis'

export default {
  methods: {
    login () {
      wx.login({
        success: r => {
          if (r && r.code) {
            wx.request({
              success: res => {
                this.$store.commit('SET_MINI_INFO', res.data)
                commonClient.login({ openid: res.data.openid }).then(r => {
                  if (r.code === 0) {
                    this.$store.commit('SET_USER_INFO', r.result.user)
                    this.$store.commit('SET_TOKEN', r.result.token)
                    this.getClassInfo()
                  }
                  this.$store.commit('IS_LOADED')
                }).catch(err => {
                  console.log(err)
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
    },
    getClassInfo () {
      commonClient.getClassInfo({}).then(r => {
        if (r.code === 0) {
          this.$store.commit('SET_CLASS_INFO', r.result)
        }
      })
    }
  }
}
