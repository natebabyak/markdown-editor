<script setup lang="ts">
import { useMarkdownStore } from '@/stores/markdown'
import { computed } from 'vue'

const markdownStore = useMarkdownStore()

const tableOfContents = computed(() => markdownStore.tableOfContents)
</script>

<template>
  <div>
    <h1>Table of Contents</h1>
    <div v-for="(heading, index) in tableOfContents" :key="index" class="heading">
      <span v-for="i in heading.level" :key="i" class="indent"></span>
      <span>{{ heading.text }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.indent {
  width: 0.5rem;
}
</style>
