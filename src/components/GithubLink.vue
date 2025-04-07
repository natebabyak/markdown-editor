<script setup lang="ts">
import BaseTooltip from './BaseTooltip.vue'
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
  <BaseTooltip :location="'south'" :text="'GitHub'">
    <a class="github-link" href="https://github.com/natebabyak/markdown-editor">
      <IconGithub class="github-link-icon" />
    </a>
  </BaseTooltip>
</template>

<style lang="css" scoped>
.github-link {
  color: var(--quaternary-contrast);
  transition: color 0.3s ease;
}

.github-link:hover {
  color: var(--full-contrast);
}

.github-link-icon {
  height: 2rem;
  width: 2rem;
}
</style>
