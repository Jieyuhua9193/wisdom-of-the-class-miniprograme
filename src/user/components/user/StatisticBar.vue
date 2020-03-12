<template>
  <div class="padding flex text-center text-grey bg-white shadow-warp">
    <div
      class="wrap"
      v-if="userInfo && userInfo.role <= 2">
      <StatisticItem
        :value="classNumber"
        color-name="orange"
        :has-part="false"
        iconName="group_fill"
        title="班级成员"/>
      <StatisticItem
        :value="0"
        color-name="green"
        :has-part="false"
        iconName="medalfill"
        title="进行中活动"/>
      <StatisticItem
        :value="0"
        color-name="red"
        iconName="noticefill"
        :has-part="false"
        title="待我审批"/>
    </div>
    <div
      class="wrap"
      v-else>
      <StatisticItem
        :value="0"
        color-name="orange"
        :has-part="false"
        iconName="hotfill"
        title="已参与活动"/>
      <StatisticItem
        :value="0"
        color-name="green"
        :has-part="false"
        iconName="upstagefill"
        title="德育分"/>
      <StatisticItem
        :value="0"
        color-name="red"
        iconName="rankfill"
        :has-part="false"
        title="班级排名"/>
    </div>
  </div>
</template>

<script>
import StatisticItem from './StatisticItem.vue'

export default {
  props: {
    userInfo: { type: Object },
    classInfo: { type: Object }
  },
  components: {
    StatisticItem
  },
  computed: {
    classNumber () {
      console.log(this.classInfo)
      if (this.classInfo) {
        return this.classInfo.users.length
      }
      return 0
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
}
</style>
