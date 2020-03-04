<template>
  <div class="page-user">
    <User /> 
  </div>
</template>

<script>
import User from '../components/User.vue'

export default {
  config: {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: false
  },
  components: {
    User
  }
}
</script>
