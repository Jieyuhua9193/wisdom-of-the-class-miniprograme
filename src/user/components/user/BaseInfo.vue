<template>
  <div class="base-info">
    <div class="cu-avatar-group">
      <span
        class="cu-avatar round lg"
        :style="classAvatar"></span>
      <span
        class="cu-avatar round lg"
        :style="avatar"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: { type: Object },
    classInfo: { type: Object }
  },
  computed: {
    avatar () {
      if (this.userInfo) {
        return `background-image:url(${this.userInfo.avatar})`
      }
      return ''
    },
    classAvatar () {
      if (this.classInfo) {
        return `background-image:url(${this.classInfo.avatar})`
      }
      return ''
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 11px;
}
</style>
