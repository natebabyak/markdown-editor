import { defineStore } from 'pinia'
import { ref } from 'vue'
import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'
import IconSystemTheme from '@/components/icons/IconSystemTheme.vue'

export const useThemeStore = defineStore('theme', () => {
  /** The themes of the app. */
  const themes = ['dark', 'light', 'system']

  /** A theme of an app. */
  type Theme = (typeof themes)[number]

  /** The theme of the app. */
  const theme = ref<Theme>((localStorage.getItem('theme') ?? 'system') as Theme)

  /**
   * Gets the icon of a theme.
   * @param iconTheme The theme to get the icon of.
   * @returns The icon of the theme.
   */
  function get(iconTheme: Theme = theme.value) {
    switch (iconTheme) {
      case 'dark':
        return IconDarkTheme
      case 'light':
        return IconLightTheme
      default:
        return IconSystemTheme
    }
  }

  /**
   * Sets the theme of the app.
   * @param setTheme The theme to set the app to.
   */
  function set(setTheme: Theme = theme.value) {
    theme.value = setTheme
    localStorage.setItem('theme', theme.value)
    if (theme.value === 'system') {
      document.body.style.colorScheme = 'light dark'
    } else {
      document.body.style.colorScheme = theme.value
    }
  }

  set()

  return { themes, get, set }
})
