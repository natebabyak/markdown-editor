<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <component :is="icon" class="button" />
</template>

<style lang="css" scoped>
.button {
  color: var(--text-mute);
  cursor: pointer;
  height: 2rem;
  transition: color 0.3s ease;
  width: 2rem;
}

.button:hover {
  color: var(--text-soft);
}
</style>
