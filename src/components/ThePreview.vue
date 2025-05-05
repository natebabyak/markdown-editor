<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import DOMPurify from 'dompurify'
import markdownit from 'markdown-it'
import { computed } from 'vue'

const project = useProjectStore()

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})

const html = computed(() => DOMPurify.sanitize(md.render(project.markdown)))
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
  padding: 2rem;
}
</style>
