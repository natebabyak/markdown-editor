import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  /** Whether the menu is open. */
  const isMenuOpen = ref(false)

  /** Gets whether the menu is open. */
  const isOpen = computed(() => isMenuOpen.value)

  /** Closes the menu. */
  function close() {
    isMenuOpen.value = false
  }

  /** Toggles the menu. */
  function toggle() {
    isMenuOpen.value = !isOpen.value
  }

  return { isOpen, close, toggle }
})
