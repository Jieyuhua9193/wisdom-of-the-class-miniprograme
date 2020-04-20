<template>
  <div class="new-actives">
    <h3 class="title text-purple text-shadow">最新活动</h3>
    <div class="active-list-wrap">
      <ActiveList />
    </div>
  </div>
</template>

<script>
import ActiveList from '@/common/components/ui/ActiveList.vue'

export default {
  components: {
    ActiveList
  }
}
</script>

<style scoped>
.new-actives {
  padding: 0 20px;
  margin-top: 20px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
}
.active-list-wrap {
  margin-top: 10px;
}
</style>
