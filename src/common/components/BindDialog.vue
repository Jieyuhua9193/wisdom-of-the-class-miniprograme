<template>
  <div class="wrap">
    <div class="cu-bar bg-white margin-top">
      <div class="action">
        <button
          class="cu-btn bg-green shadow"
          @click="onClick">Dialog
        </button>
      </div>
    </div>
    <div
      class="cu-modal"
      :class="showModal && 'show'">
      <div class="cu-dialog">
        <div class="cu-bar bg-white justify-end">
          <div class="content">Modal标题</div>
          <div
            class="action"
            @click="showModal = false">
            <text class="cuIcon-close text-red"></text>
          </div>
        </div>
        <div class="padding-xl">
          Modal 内容。
        </div>
        <div class="cu-bar bg-white justify-end">
          <div class="action">
            <button
              class="cu-btn line-green text-green"
              @click="showModal = false">取消
            </button>
            <button
              class="cu-btn bg-green margin-left"
              @click="showModal = false">确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    onClick () {
      this.showModal = true
      console.log('on show', this.showModal)
    }
  }
}
</script>

<style scoped>

</style>
