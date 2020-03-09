<template>
  <div class="page-index">
    <BindDialog />
  </div>
</template>

<script>
import BindDialog from '@/common/components/BindDialog.vue'

export default {
  config: {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: false
  },
  methods: {
  },
  components: {
    BindDialog
  }
}
</script>
