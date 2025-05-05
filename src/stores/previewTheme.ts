import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreviewThemeStore = defineStore('previewTheme', () => {
  /** The themes of the preview. */
  const themes = ['dark', 'light', 'system'] as const

  /** A theme of the preview. */
  type PreviewTheme = (typeof themes)[number]

  /** The current theme of the preview. */
  const previewTheme = ref<PreviewTheme>(
    (localStorage.getItem('previewTheme') ?? 'system') as PreviewTheme,
  )

  /**
   * Applies a theme to the preview.
   * @param theme The theme to apply.
   */
  function apply(theme: PreviewTheme) {
    let link = document.getElementById('github-markdown-css') as HTMLLinkElement | null

    if (!link) {
      link = document.createElement('link')
      link.id = 'github-markdown-css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }

    link.href =
      'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown' +
      (theme === 'dark' ? '-dark.css' : theme === 'light' ? '-light.css' : '.css')
  }

  /**
   * Gets whether a theme is active.
   * @param theme The theme to check.
   * @returns Whether the theme is active.
   */
  function isActive(theme: PreviewTheme) {
    return previewTheme.value === theme
  }

  /**
   * Gets the name of a theme.
   * @param theme The theme to get the name of.
   * @returns The name of the theme.
   */
  function name(theme: PreviewTheme = previewTheme.value) {
    return theme.replace(/^./, (char) => char.toUpperCase())
  }

  /**
   * Previews a theme.
   * @param theme The theme to preview.
   */
  function preview(theme: PreviewTheme) {
    apply(theme)
  }

  /** Unpreviews a theme. */
  function unpreview() {
    apply(previewTheme.value)
  }

  /**
   * Sets the theme of the preview.
   * @param theme The theme to set.
   */
  function set(theme: PreviewTheme) {
    previewTheme.value = theme
    localStorage.setItem('previewTheme', theme)
    apply(theme)
  }

  set(previewTheme.value)

  return { themes, isActive, name, preview, unpreview, set }
})
