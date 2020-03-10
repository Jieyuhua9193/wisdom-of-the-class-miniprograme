<template>
  <div class="wrap">
    <cu-custom
      bgColor="bg-gradual-purple" :isBack="false">
      <view slot="backText">返回</view>
      <view slot="content">班级</view>
    </cu-custom>
  </div>
</template>

<script>

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  }
}
</script>
