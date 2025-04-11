<script setup lang="ts">
import IconMenu from './icons/IconMenu.vue'
import { onClickOutside } from '@vueuse/core'
import { useMenuStore } from '@/stores/menu'
import { useTemplateRef } from 'vue'

const menu = useMenuStore()
const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, () => menu.close)
</script>

<template>
  <div class="button" ref="target" @click="menu.toggle">
    <IconMenu class="icon" />
  </div>
</template>

<style lang="css" scoped>
.button {
  color: var(--quaternary-contrast);
  cursor: pointer;
  transition: color 0.3s ease;
}

.button:hover {
  color: var(--full-contrast);
}

.icon {
  height: 2rem;
  width: 2rem;
}
</style>
