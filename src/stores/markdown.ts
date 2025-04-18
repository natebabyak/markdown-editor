import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useDebounce } from '@vueuse/core'

export const useMarkdownStore = defineStore('markdown', () => {
  /** The markdown. */
  const markdown = ref(localStorage.getItem('markdown') ?? '')

  /** Gets the table of contents. */
  const tableOfContents = computed(() => {
    const lines = markdown.value.split('\n')
    const toc = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const match = line.match(/^(#{1,6})\s+(.*)/)
      if (match) {
        toc.push({
          level: match[1].length,
          line: i + 1,
          text: match[2].trim(),
        })
      }
    }
    return toc
  })

  const debouncedMarkdown = useDebounce(markdown, 1000)

  watch(debouncedMarkdown, (newMarkdown) => {
    localStorage.setItem('markdown', newMarkdown)
  })

  return { markdown, tableOfContents }
})
