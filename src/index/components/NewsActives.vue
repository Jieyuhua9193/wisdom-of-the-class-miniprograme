<template>
  <div class="new-actives">
    <h3 class="title text-purple text-shadow">最新活动</h3>
    <div class="active-list">
      <ActiveItem />
    </div>
  </div>
</template>

<script>
import ActiveItem from '@/common/components/ui/ActiveItem.vue'

export default {
  components: {
    ActiveItem
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
.active-list {
  margin-top: 10px;
  padding: 10px;
}
</style>
