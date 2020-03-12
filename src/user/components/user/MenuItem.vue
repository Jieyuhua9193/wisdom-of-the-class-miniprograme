<template>
  <div
    class="cu-item arrow"
    @click="onClick">
    <div class="content">
      <span
        :class="icon"
        class="text-grey"></span>
      <span class="text-grey">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: { type: String },
    title: { type: String }
  },
  computed: {
    icon () {
      if (this.iconName) {
        return `cuIcon-${this.iconName}`
      } else {
        return 'cuIcon-github'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
.text-grey {
  margin-right: 5px;
}
</style>
