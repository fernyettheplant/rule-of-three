<template>
  <footer class="flex justify-center m-2">
    <small class="m-2">
      &copy; Copyright
      <time :datetime="currentYear">{{ currentYear }}</time>,
      <a
        class="hover:underline text-gray-800"
        href="//github.com/jefer590"
      >Fernando Alvarez</a>
    </small>
    <small class="m-2">Made with 💚using <a
      class="hover:underline text-gray-800"
      rel="noreferrer nofollow"
      href="//nuxtjs.org/"
    >NuxtJS</a></small>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear (): number {
      return new Date().getFullYear()
    }
  }
})
</script>
