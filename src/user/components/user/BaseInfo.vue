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
      <span
        v-if="role"
        class="tag bg-gradual-orange shadow-blur">{{role}}</span>
    </div>
  </div>
</template>

<script>
import Role from '@/common/models/Role'

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
    },
    role () {
      if (this.userInfo) {
        const { role } = this.userInfo
        switch (role) {
          case Role.admin:
            return '班主任'
          case Role.counselor:
            return '辅导员'
          case Role.teacher:
            return '任课教师'
          case Role.classMonitor:
            return '班长'
          case Role.viceClassMonitor:
            return '副班长'
          case Role.partyBranch:
            return '团支书'
          case Role.vicePartyBranch:
            return '副团支书'
          case Role.financial:
            return '财务'
          case Role.lifeAdmin:
            return '生活委员'
          case Role.culturalAdmin:
            return '文艺委员'
          case Role.moralEducationAdmin:
            return '德育委员'
          default:
            return '学生'
        }
      }
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
