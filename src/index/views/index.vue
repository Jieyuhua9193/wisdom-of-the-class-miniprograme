<template>
  <div class="wrap">
    <cu-custom
      bgColor="bg-gradual-purple" :isBack="false">
      <view slot="backText">返回</view>
      <view slot="content">首页</view>
    </cu-custom>
    <BindDialog/>
    <Index />
  </div>
</template>

<script>
import BindDialog from '@/common/components/BindDialog.vue'
import Index from '../components/Index.vue'

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  },
  methods: {},
  components: {
    BindDialog,
    Index
  }
}
</script>
