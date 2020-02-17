<template>
  <div class="calculator mx-10 sm:mx-20">
    <div class="calculator__div1 sm:text-right">
      <label class="font-semibold text-xl" for="box1">IF</label>
    </div>
    <div class="calculator__div2">
      <input
        id="box1"
        v-model="box1"
        name="box1"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
        type="number"
      >
    </div>
    <div class="calculator__div3 sm:text-right">
      <label class="font-semibold text-xl" for="box2">IS</label>
    </div>
    <div class="calculator__div4">
      <input
        id="box2"
        v-model="box2"
        name="box2"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
        type="number"
      >
    </div>
    <div class="calculator__div5 sm:text-right">
      <label class="font-semibold text-xl" for="box3">THEN</label>
    </div>
    <div class="calculator__div6">
      <input
        id="box3"
        v-model="box3"
        name="box3"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
        type="number"
      >
    </div>
    <div class="calculator__div7 sm:text-right">
      <span class="font-semibold text-xl">IS</span>
    </div>
    <div class="calculator__div8 text-center shadow-md bg-gray-200 text-2xl font-black">
      {{ resultStr }}
    </div>
  </div>
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
        result = (this.box3 * this.box2) / this.box1
      } else {
        result = null
      }

      return result
    },
    resultStr (): number | string {
      let result: number | string

      if (this.result === null) {
        result = '🤔❓'
      } else if (!isFinite(this.result)) {
        result = '♾ 😱'
      } else {
        result = this.result
      }

      return result
    }
  }
})
</script>

<style lang="scss" scoped>
$mobile-size: 640px;

.calculator {
  display: grid;

  @media (min-width: $mobile-size) {
    grid-template-columns: 1fr 6fr 1fr 6fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 20px;

    &__div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    &__div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    &__div3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    &__div4 {
      grid-area: 1 / 4 / 2 / 5;
    }
    &__div5 {
      grid-area: 2 / 1 / 3 / 2;
    }
    &__div6 {
      grid-area: 2 / 2 / 3 / 3;
    }
    &__div7 {
      grid-area: 2 / 3 / 3 / 4;
    }
    &__div8 {
      grid-area: 2 / 4 / 3 / 5;
    }
  }

  @media (max-width: $mobile-size) {
    grid-template-columns: 1fr 6fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;

    &__div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    &__div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    &__div3 {
      grid-area: 2 / 1 / 3 / 2;
    }
    &__div4 {
      grid-area: 2 / 2 / 3 / 3;
    }
    &__div5 {
      grid-area: 3 / 1 / 4 / 2;
    }
    &__div6 {
      grid-area: 3 / 2 / 4 / 3;
    }
    &__div7 {
      grid-area: 4 / 1 / 5 / 2;
    }
    &__div8 {
      grid-area: 4 / 2 / 5 / 3;
    }
  }
}
</style>
