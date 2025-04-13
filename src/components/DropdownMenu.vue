<script setup lang="ts">
defineProps<{
  options: {
    name: string
    value: string
  }[]
}>()
</script>

<template>
  <div class="dropdown-menu">
    <div v-for="(option, index) in options" :key="index"></div>
  </div>
</template>

<style lang="css" scoped></style>
