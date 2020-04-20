<template>
  <div class="wrap">
    <div class="header-bar bg-gradual-purple">
      <h1 class="title text-center">首页</h1>
    </div>
    <Index />
  </div>
</template>

<script>
import Index from '../components/Index.vue'

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  },
  methods: {},
  components: {
    Index
  }
}
</script>

<style scoped>
.header-bar {
  width: 140%;
  height: 165px;
  position: fixed;
  left: -20%;
  top: 0;
  border-radius: 0 0 50% 50%
}
.header-bar .title {
  position: absolute;
  text-align: center;
  width: calc(100% - 170px);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 57px;
  font-size: 18px;
  cursor: none;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
