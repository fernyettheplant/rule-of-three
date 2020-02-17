<template>
  <main>
    <h1>RULE OF THREE</h1>
    <h3>Simple and Fast ⚡</h3>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
      <div class="sm:text-right">
        <label for="box1">IF</label>
      </div>
      <div>
        <input
          id="box1"
          v-model="box1"
          name="box1"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
          type="number"
        >
      </div>
      <div class="sm:text-right">
        <label for="box2">IS</label>
      </div>
      <div>
        <input
          id="box2"
          v-model="box2"
          name="box2"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
          type="number"
        >
      </div>
      <div class="sm:text-right">
        <label for="box3">THEN</label>
      </div>
      <div>
        <input
          id="box3"
          v-model="box3"
          name="box3"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
          type="number"
        >
      </div>
      <div>IS</div>
      <div>{{ result || '' }}</div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

type BoxNumber = number | null;

type BoxesData = {
  box1: BoxNumber;
  box2: BoxNumber;
  box3: BoxNumber;
};

export default Vue.extend({
  data (): BoxesData {
    return {
      box1: null,
      box2: null,
      box3: null
    }
  },
  computed: {
    result (): BoxNumber {
      let result: BoxNumber

      if (this.box1 !== null && this.box2 !== null && this.box3 !== null) {
        result = this.box3 * this.box2 / this.box1
      } else {
        result = null
      }

      return result
    }
  }
})
</script>
