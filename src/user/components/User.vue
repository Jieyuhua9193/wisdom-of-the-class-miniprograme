<template>
  <div class="page-user">
    <BaseInfo
      :userInfo="userInfo"
      :classInfo="classInfo"/>
  </div>
</template>

<script>
import BaseInfo from './user/BaseInfo.vue'
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  components: {
    BaseInfo
  }
}
</script>

<style scoped>
.page-user {
  padding: 10px;
}
</style>
