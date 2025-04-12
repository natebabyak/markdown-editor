import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  /** Whether the menu is open. */
  const menuOpen = ref(false)

  /** Gets whether the menu is open. */
  const isOpen = computed(() => menuOpen.value)

  /** Opens the menu. */
  function open() {
    menuOpen.value = true
  }

  /** Closes the menu. */
  function close() {
    menuOpen.value = false
  }

  /** Toggles whether the menu is open. */
  function toggle() {
    menuOpen.value = !menuOpen.value
  }

  return { isOpen, open, close, toggle }
})
