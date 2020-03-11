<template>
  <div class="wrap">
    <cu-custom
      bgColor="bg-gradual-purple" :isBack="false">
      <view slot="backText">返回</view>
      <view slot="content">我的</view>
    </cu-custom>
    <User />
  </div>
</template>

<script>
import User from '../components/User.vue'

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  },
  components: {
    User
  }
}
</script>
