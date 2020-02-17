<template>
  <div class="flex flex-col min-h-screen">
    <layout-header />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'

export default Vue.extend({
  components: {
    LayoutHeader,
    LayoutFooter
  }
})
</script>
