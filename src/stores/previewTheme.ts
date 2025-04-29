import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreviewThemeStore = defineStore('previewTheme', () => {
  const themes = ['dark', 'light', 'system'] as const

  type PreviewTheme = (typeof themes)[number]

  const previewTheme = ref<PreviewTheme>(
    (localStorage.getItem('previewTheme') ?? 'system') as PreviewTheme,
  )

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

  function isActive(theme: PreviewTheme) {
    return previewTheme.value === theme
  }

  function name(theme: PreviewTheme = previewTheme.value) {
    return theme.replace(/^./, (char) => char.toUpperCase())
  }

  function preview(theme: PreviewTheme) {
    apply(theme)
  }

  function unpreview() {
    apply(previewTheme.value)
  }

  function set(theme: PreviewTheme) {
    previewTheme.value = theme
    localStorage.setItem('previewTheme', theme)
    apply(theme)
  }

  set(previewTheme.value)

  return { themes, isActive, name, preview, unpreview, set }
})
