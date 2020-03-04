<template>
  <div class="page-user">
    <button 
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
      >get user info</button>
  </div>
</template>

<script>

export default {
  config: {
    navigationBarTitleText: '创建身份',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: false
  },
  components: {
  },
  methods: {
    getUserInfo (e) {
      console.log(e)
    }
  }
}
</script>
