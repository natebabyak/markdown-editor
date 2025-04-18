import { computed, ref, type Component } from 'vue'
import { defineStore } from 'pinia'
import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'
import IconSystemTheme from '@/components/icons/IconSystemTheme.vue'

export const useAppThemeStore = defineStore('appTheme', () => {
  /** A theme of an app. */
  type AppTheme = 'dark' | 'light' | 'system'

  /** The themes of the app. */
  const themes = [
    { key: 'dark', icon: IconDarkTheme, name: 'Dark' },
    { key: 'light', icon: IconLightTheme, name: 'Light' },
    { key: 'system', icon: IconSystemTheme, name: 'System' },
  ] satisfies { key: AppTheme; icon: Component; name: string }[]

  /** The theme of the app. */
  const appTheme = ref<AppTheme>((localStorage.getItem('appTheme') ?? 'system') as AppTheme)

  /** Gets the theme of the app. */
  const theme = computed(() => appTheme.value)

  /** Gets whether the theme of the app is dark. */
  const isDark = computed(
    () =>
      appTheme.value === 'dark' ||
      (appTheme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  /**
   * Sets the theme of the app.
   * @param newTheme The theme to set the app to.
   */
  function set(newTheme: AppTheme) {
    appTheme.value = newTheme
    localStorage.setItem('appTheme', newTheme)

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const html = document.documentElement

    html.classList.toggle('dark', isDark.value)

    if (newTheme === 'system') {
      media.onchange = () => {
        if (appTheme.value === 'system') {
          html.classList.toggle('dark', media.matches)
        }
      }
    }
  }

  return { themes, theme, isDark, set }
})
