<template>
  <div class="wrap">
    <cu-custom
      bgColor="bg-gradual-purple" :isBack="true">
      <view slot="backText">返回</view>
      <view slot="content">绑定账号</view>
    </cu-custom>
    <Bind />
  </div>
</template>

<script>
import Bind from '../components/Bind.vue'

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  },
  components: {
    Bind
  },
  methods: {}
}
</script>
