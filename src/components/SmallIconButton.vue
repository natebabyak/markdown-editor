<script setup lang="ts">
defineProps(['icon'])
</script>

<template>
  <component :is="icon" class="button" />
</template>

<style lang="css" scoped>
.button {
  border-radius: 25%;
  color: var(--text-mute);
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
}

.button:hover {
  background-color: var(--background-light);
  color: var(--text-soft);
}

.svg {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
