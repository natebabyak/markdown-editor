import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  /** Whether the sidebar is open. */
  const sidebarOpen = ref(true)

  /** Gets whether the sidebar is open. */
  const isOpen = computed(() => sidebarOpen.value)

  /** Opens the sidebar. */
  function open() {
    sidebarOpen.value = true
  }

  /** Closes the sidebar. */
  function close() {
    sidebarOpen.value = false
  }

  /** Toggles whether the sidebar is open. */
  function toggle() {
    sidebarOpen.value = !sidebarOpen.value
  }

  return { isOpen, open, close, toggle }
})
