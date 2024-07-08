<script setup lang="ts">
import { useStore } from './counter.ts'
import HmrTesting from './hmrTesing.vue';

const store = useStore()
</script>

<template>
  <button @click="store.n++">Increment {{ store.n }}</button>
  <HmrTesting />
</template>
