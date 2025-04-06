import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarOpenStore = defineStore('sidebarOpen', () => {
  const sidebarOpen = ref<Boolean>(localStorage.getItem('sidebarOpen') ?? '')
})
