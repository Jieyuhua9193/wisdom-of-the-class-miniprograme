<template>
  <div class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
    <iMenuItem title="班级日志" icon-name="form"/>
    <iMenuItem title="班级资产" icon-name="rechargefill"/>
    <iMenuItem title="排名榜" icon-name="rank"/>
    <iMenuItem
      v-if="userInfo && userInfo.role > 2"
      title="我的活动" icon-name="activity"/>
    <iMenuItem
      v-if="userInfo && userInfo.role > 2"
      title="德育分详情" icon-name="selection"/>
    <iMenuItem
      v-if="userInfo && userInfo.role <= 2"
      title="审批信息" icon-name="notice"/>
  </div>
</template>

<script>
import iMenuItem from './MenuItem.vue'

export default {
  props: {
    userInfo: { type: Object }
  },
  components: {
    iMenuItem
  }
}
</script>

<style scoped>
.cu-list {
  border-radius: 4px;
}
</style>
