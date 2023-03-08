<script setup lang="ts">
import type { DumpSummary } from '@/scripts/model'
import { reactive } from 'vue'

interface Data {
  dumps: DumpSummary[]
}

const data: Data = reactive({
  dumps: [
    {
      id: '4',
      functionName: 'function4',
      startTime: new Date(2020, 1, 1, 0, 10, 0)
    },
    {
      id: '3',
      functionName: 'functionxxx',
      startTime: new Date(2020, 1, 1, 0, 5, 0)
    },
    {
      id: '2',
      functionName: 'function2',
      startTime: new Date(2020, 1, 1, 0, 3, 24)
    },
    {
      id: '1',
      functionName: 'function1',
      startTime: new Date(2020, 1, 1, 0, 0, 0)
    }
  ]
})
</script>

<template>
  <div class="wrapper">
    <nav>
      <ul>
        <li v-for="dump in data.dumps" :key="dump.id">
          {{ dump.functionName }} at {{ dump.startTime }}
        </li>
      </ul>
    </nav>
    <main>div2</main>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  height: 100%;
  grid-template-columns: 15em 3fr;
  background-color: blue;
  row-gap: 0.4em;
  column-gap: 0.4em;
  padding: 0.4em;
}

.wrapper nav {
  grid-row: 1;
  grid-column: 1;
  background-color: black;
}

.wrapper main {
  grid-row: 1;
  grid-column: 2;
  background-color: black;
}
</style>
