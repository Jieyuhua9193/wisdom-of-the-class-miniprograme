<template>
  <div class="page-index">
    <InitPopup
      :show="isLoaded && !userInfo"
      @close="showInitPopup = false"/>
    <Notices />
    <NewsActives />
  </div>
</template>

<script>
import InitPopup from '@/common/components/InitPopup'
import Notices from './Notices.vue'
import NewsActives from './NewsActives.vue'
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  components: {
    InitPopup,
    Notices,
    NewsActives
  }
}
</script>

<style scoped>
.page-index {
  padding-top: 84px;
}
</style>
