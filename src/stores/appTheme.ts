import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppThemeStore = defineStore('appTheme', () => {
  const themes = ['dark', 'light', 'system'] as const

  type AppTheme = (typeof themes)[number]

  const appTheme = ref<AppTheme>((localStorage.getItem('appTheme') ?? 'system') as AppTheme)

  function apply(theme: AppTheme) {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const classList = document.documentElement.classList

    const isDark = theme === 'dark' || (theme === 'system' && media.matches)
    classList.toggle('dark', isDark)

    if (theme === 'system') {
      media.onchange = () => {
        classList.toggle('dark', media.matches)
      }
    }
  }

  function isActive(theme: AppTheme) {
    return appTheme.value === theme
  }

  function name(theme: AppTheme = appTheme.value) {
    return theme.replace(/^./, (char) => char.toUpperCase())
  }

  function preview(theme: AppTheme) {
    apply(theme)
  }

  function unpreview() {
    apply(appTheme.value)
  }

  function set(theme: AppTheme) {
    appTheme.value = theme
    localStorage.setItem('appTheme', theme)
    apply(theme)
  }

  set(appTheme.value)

  return { themes, isActive, name, preview, unpreview, set }
})
