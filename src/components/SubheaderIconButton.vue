<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <component :is="icon" class="button" />
</template>

<style lang="css" scoped>
.button {
  background-color: var(--background-soft);
  border-radius: 25%;
  color: var(--text-mute);
  cursor: pointer;
  height: 1.5rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  width: 1.5rem;
}

.button:hover {
  background-color: var(--background-mute);
  color: var(--text-soft);
}
</style>
