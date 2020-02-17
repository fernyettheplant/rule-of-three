<template>
  <main class="flex-grow">
    <calculator-rule-of-three />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import CalculatorRuleOfThree from '@/components/CalculatorRuleOfThree.vue'

export default Vue.extend({
  components: {
    CalculatorRuleOfThree
  }
})
</script>
