<template>
  <div class="page-index">
    <InitPopup
      :show="isLoaded && !userInfo"
      @close="showInitPopup = false"/>
    <Notices />
    <NewsActives />
    <Entry />
  </div>
</template>

<script>
import InitPopup from '@/common/components/InitPopup'
import Notices from './Notices.vue'
import NewsActives from './NewsActives.vue'
import Entry from './Entry.vue'
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  components: {
    InitPopup,
    Notices,
    NewsActives,
    Entry
  }
}
</script>

<style scoped>
.page-index {
  padding-top: 84px;
  padding-bottom: 20px;
}
</style>
