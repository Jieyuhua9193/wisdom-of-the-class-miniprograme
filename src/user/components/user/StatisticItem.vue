<template>
  <div
    class="flex flex-sub flex-direction"
    :class="{'solid-right': hasPart}">
    <div
      class="text-xxl"
      :class="color">
      {{value}}
    </div>
    <div class="margin-top-sm">
      <span :class="icon"></span>
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number },
    title: { type: String },
    hasPart: { type: Boolean },
    colorName: { type: String },
    iconName: { type: String }
  },
  computed: {
    color () {
      if (this.colorName) {
        return `text-${this.colorName}`
      }
      return `text-blue`
    },
    icon () {
      if (this.iconName) {
        return `cuIcon-${this.iconName}`
      } else {
        return `cuIcon-attentionfill`
      }
    }
  }
}
</script>
