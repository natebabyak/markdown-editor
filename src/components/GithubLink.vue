<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
  <a class="github-link" href="https://github.com/natebabyak/markdown-editor">
    <IconGithub class="github-link-icon" />
  </a>
</template>

<style lang="css" scoped>
.github-link {
  color: var(--color-clickable);
}

.github-link:hover {
  color: var(--color-clickable-hover);
}

.github-link-icon {
  height: 2rem;
  width: 2rem;
}
</style>
