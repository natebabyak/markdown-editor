import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppThemeStore = defineStore('appTheme', () => {
  /** The themes of the app */
  const themes = ['dark', 'light', 'system'] as const

  /** A theme of the app. */
  type AppTheme = (typeof themes)[number]

  /** The current theme of the app. */
  const appTheme = ref<AppTheme>((localStorage.getItem('appTheme') ?? 'system') as AppTheme)

  /**
   * Applies a theme to the app.
   * @param theme The theme to apply.
   */
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

  /**
   * Gets whether a theme is active.
   * @param theme The theme to check.
   * @returns Whether the theme is active.
   */
  function isActive(theme: AppTheme) {
    return appTheme.value === theme
  }

  /**
   * Gets the name of a theme.
   * @param theme The theme to get the name of.
   * @returns The name of the theme.
   */
  function name(theme: AppTheme = appTheme.value) {
    return theme.replace(/^./, (char) => char.toUpperCase())
  }

  /**
   * Previews a theme.
   * @param theme The theme to preview.
   */
  function preview(theme: AppTheme) {
    apply(theme)
  }

  /** Unpreviews a theme. */
  function unpreview() {
    apply(appTheme.value)
  }

  /**
   * Sets the theme of the app.
   * @param theme The theme to set.
   */
  function set(theme: AppTheme) {
    appTheme.value = theme
    localStorage.setItem('appTheme', theme)
    apply(theme)
  }

  set(appTheme.value)

  return { themes, isActive, name, preview, unpreview, set }
})
