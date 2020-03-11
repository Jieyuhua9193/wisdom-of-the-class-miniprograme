<template>
  <div class="wrap">
    <User />
  </div>
</template>

<script>
import User from '../components/User.vue'

export default {
  config: {
    navigationStyle: 'custom',
    backgroundColor: '#F8F8F8'
  },
  components: {
    User
  }
}
</script>
