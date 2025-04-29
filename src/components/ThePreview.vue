<script setup lang="ts">
import { useMarkdownStore } from '@/stores/project'
import DOMPurify from 'dompurify'
import markdownit from 'markdown-it'
import { computed } from 'vue'

const markdownStore = useMarkdownStore()

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})

const html = computed(() => DOMPurify.sanitize(md.render(markdownStore.markdown)))
</script>

<template>
  <div class="container">
    <div v-html="html" class="preview markdown-body"></div>
  </div>
</template>

<style lang="css">
.container {
  height: 100%;
  overflow-y: scroll;
}

.preview {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  padding-bottom: calc(100vh - 7rem);
}
</style>
