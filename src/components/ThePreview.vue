<script setup lang="ts">
import DOMPurify from 'dompurify'
import markdownit from 'markdown-it'
import { useTextStore } from '@/stores/text'
import { computed } from 'vue'

const textStore = useTextStore()

const md = markdownit()

const renderedHtml = computed(() => DOMPurify.sanitize(md.render(textStore.text)))
</script>

<template>
  <div class="preview">
    <div v-html="renderedHtml" class="markdown-body"></div>
  </div>
</template>

<style lang="css" scoped>
.preview {
  height: 100%;
  width: 100%;
}
</style>
