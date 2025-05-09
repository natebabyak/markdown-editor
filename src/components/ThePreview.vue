<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import DOMPurify from 'dompurify'
import markdownit from 'markdown-it'
import { computed } from 'vue'

const editor = useEditorStore()

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})

const html = computed(() => DOMPurify.sanitize(md.render(editor.getContent)))
</script>

<template>
  <div class="container">
    <div v-html="html" class="preview markdown-body"></div>
  </div>
</template>

<style lang="css" scoped>
.container {
  height: 100%;
  overflow-y: scroll;
}

.preview {
  min-height: calc(100vh - 5rem);
  padding: 2rem;
  border-right: 1px solid var(--border);
}
</style>
