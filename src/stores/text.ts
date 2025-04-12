import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTextStore = defineStore('text', () => {
  /** The text. */
  const text = ref(localStorage.getItem('text') ?? '')

  watch(text, (newText) => {
    localStorage.setItem('text', newText)
  })

  return { text }
})
