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
    <div class="info">
      <em class="name">
        {{userInfo.realName}}
      </em>
      <span class="class-name">
      （{{classInfo.name}}）
      </span>
      <span class="tag bg-gradual-orange shadow-blur">班主任</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {type: Object},
    classInfo: {type: Object}
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
.info {
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: -10px;
}
.cu-avatar {
  width: 70px;
  height: 70px;
}
.tag {
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 10px;
  vertical-align: middle;
}
</style>
