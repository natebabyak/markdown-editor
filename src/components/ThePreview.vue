<script setup lang="ts">
import DOMPurify from 'dompurify'
import markdownit from 'markdown-it'
import { useTextStore } from '@/stores/text'
import { computed } from 'vue'

const textStore = useTextStore()

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})

const html = computed(() => DOMPurify.sanitize(md.render(textStore.text)))
</script>

<template>
  <div class="preview-container">
    <div v-html="html" class="preview markdown-body"></div>
  </div>
</template>

<style lang="css" scoped>
.preview-container {
  height: 100%;
  overflow-y: scroll;
}

.preview {
  padding: 5%;
}
</style>
