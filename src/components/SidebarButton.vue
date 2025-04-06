<script setup lang="ts">
import { ref } from 'vue'
import IconCloseSidebar from './icons/IconCloseSidebar.vue'
import IconOpenSidebar from './icons/IconOpenSidebar.vue'
import TheSidebar from './TheSidebar.vue'

const sidebarOpen = ref<Boolean>(true)

const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value)
</script>

<template>
  <TheSidebar v-if="sidebarOpen" />
  <div class="sidebar-button" @click="toggleSidebar">
    <IconCloseSidebar v-if="sidebarOpen" />
    <IconOpenSidebar v-else />
  </div>
</template>

<style lang="css" scoped></style>
