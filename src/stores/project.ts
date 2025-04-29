import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useDebounce } from '@vueuse/core'

export const useMarkdownStore = defineStore('project', () => {
  /** The markdown. */
  const markdown = ref(localStorage.getItem('project') ?? '')

  /** Gets the table of contents. */
  const outline = computed(() => {
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

  const debouncedMarkdown = useDebounce(markdown, 1_000)

  watch(debouncedMarkdown, (newMarkdown) => {
    localStorage.setItem('project', newMarkdown)
  })

  return { markdown, outline }
})
