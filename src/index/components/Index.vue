<template>
  <div class="page-index">
    <InitPopup
      :show="showInitPopup"
      @close="showInitPopup = false"/>
  </div>
</template>

<script>
import InitPopup from '@/common/components/InitPopup'
import commonVuex from '@/common/vuex/common'

export default {
  mixins: [commonVuex],
  data () {
    return {
      showInitPopup: false
    }
  },
  onShow () {
    this.init()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (!this.userInfo) {
        this.showInitPopup = true
      }
    }
  },
  components: {
    InitPopup
  }
}
</script>

<style scoped>

</style>
