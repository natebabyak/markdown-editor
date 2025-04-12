import { defineStore } from 'pinia'
import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'
import IconSystemTheme from '@/components/icons/IconSystemTheme.vue'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  /** The themes of the app. */
  const themes = ['dark', 'light', 'system'] as const

  /** A theme of an app. */
  type Theme = (typeof themes)[number]

  /** The theme of the app. */
  const theme = ref<Theme>((localStorage.getItem('theme') ?? 'system') as Theme)

  /**
   * Gets the icon of a theme.
   * @param themeIcon The theme to get the icon of.
   * @returns The icon of the theme.
   */
  function icon(themeIcon: Theme) {
    switch (themeIcon) {
      case 'dark':
        return IconDarkTheme
      case 'light':
        return IconLightTheme
      default:
        return IconSystemTheme
    }
  }

  /**
   * Gets the name of a theme.
   * @param themeName The theme to get the name of.
   * @returns The name of the theme.
   */
  function name(themeName: Theme) {
    switch (themeName) {
      case 'dark':
        return 'Dark'
      case 'light':
        return 'Light'
      default:
        return 'System'
    }
  }

  /**
   * Sets the theme of the app.
   * @param themeSet The theme to set the app to.
   */
  function set(themeSet: Theme) {
    if (themeSet == 'system') {
      document.body.style.colorScheme = 'light dark'
    } else {
      document.body.style.colorScheme = themeSet
    }
    localStorage.setItem('theme', themeSet)
    theme.value = themeSet
  }

  set(theme.value)

  return { themes, theme, icon, name, set }
})
