import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { githubDark } from '@ddietr/codemirror-themes/theme/github-dark'
import { githubLight } from '@ddietr/codemirror-themes/theme/github-light'
import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'
import IconSystemTheme from '@/components/icons/IconSystemTheme.vue'

export const useThemeStore = defineStore('theme', () => {
  /** The themes of the app. */
  const themes = ['dark', 'light', 'system'] as const

  /** A theme of an app. */
  type Theme = (typeof themes)[number]

  /** The theme of the app. */
  const theme = ref<Theme>((localStorage.getItem('theme') ?? 'system') as Theme)

  /** Gets the theme of the app. */
  const app = computed(() => theme.value)

  /** Gets whether the theme is dark. */
  const isDark = computed(
    () =>
      theme.value === 'dark' ||
      (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  /** Gets the theme of the editor */
  const editor = computed(() => (isDark.value ? githubDark : githubLight))

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

    const existingLink = document.getElementById('github-markdown-css')
    if (existingLink) {
      existingLink.remove()
    }
    const link = document.createElement('link')
    link.id = 'github-markdown-css'
    link.rel = 'stylesheet'
    link.href = isDark.value
      ? 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-dark.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-light.css'
    document.head.appendChild(link)
  }

  set(theme.value)

  return { themes, app, editor, icon, name, set }
})
