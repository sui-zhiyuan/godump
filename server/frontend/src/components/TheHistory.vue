<script setup lang="ts">
import { useRouter, type RouteLocationNormalized } from 'vue-router'
import * as vue from 'vue'

const router = useRouter()

interface Model {
  history: RouteLocationNormalized[]
}

const model: Model = vue.reactive({
  history: []
})

router.afterEach((to :RouteLocationNormalized, _from : RouteLocationNormalized) => {
  model.history.push(to)
})

function backHistory(_location: RouteLocationNormalized, index: number) {
  const length = model.history.length
  const back = length - index - 1
  router.go(-back)
}

function backone() {
  router.go(-1)
}
</script>

<template>
  <div>
    Hello World History
    <p
      v-for="(location, index) in model.history"
      :key="index"
      @click="() => backHistory(location, index)"
    >
      {{ location.fullPath }}
    </p>
    <button @click="backone">back1</button>
  </div>
</template>

<style scoped></style>
