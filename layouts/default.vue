<template>
  <div>
    <nuxt />
    <layout-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutFooter from '@/components/LayoutFooter.vue'

export default Vue.extend({
  components: {
    LayoutFooter
  }
})
</script>
