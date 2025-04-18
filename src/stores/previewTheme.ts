import { defineStore } from 'pinia'
import { computed, ref, type Component } from 'vue'
import IconDarkTheme from '@/components/icons/IconDarkTheme.vue'
import IconLightTheme from '@/components/icons/IconLightTheme.vue'
import IconSystemTheme from '@/components/icons/IconSystemTheme.vue'

export const usePreviewThemeStore = defineStore('previewTheme', () => {
  /** A theme of a preview. */
  type PreviewTheme = 'dark' | 'light' | 'system'

  /** The themes of the preview. */
  const themes = [
    { key: 'dark', icon: IconDarkTheme, name: 'Dark' },
    { key: 'light', icon: IconLightTheme, name: 'Light' },
    { key: 'system', icon: IconSystemTheme, name: 'System' },
  ] satisfies { key: PreviewTheme; icon: Component; name: string }[]

  /** The theme of the preview. */
  const previewTheme = ref<PreviewTheme>(
    (localStorage.getItem('previewTheme') ?? 'system') as PreviewTheme,
  )

  /** Gets the theme of the preview. */
  const theme = computed(() => previewTheme.value)

  /**
   * Sets the theme of the preview.
   * @param newTheme The theme to set the preview to.
   */
  function set(newTheme: PreviewTheme) {
    previewTheme.value = newTheme
    localStorage.setItem('previewTheme', newTheme)

    const existingLink = document.getElementById('github-markdown-css')

    if (existingLink) existingLink.remove()

    const link = document.createElement('link')
    link.id = 'github-markdown-css'
    link.rel = 'stylesheet'
    link.href =
      'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown' +
        newTheme ===
      'dark'
        ? '-dark.css'
        : newTheme === 'light'
          ? '-light.css'
          : '.css'
    document.head.appendChild(link)
  }

  set(theme.value)

  return { themes, theme, set }
})
