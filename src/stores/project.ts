import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useDebounce } from '@vueuse/core'

export const useProjectStore = defineStore('project', () => {
  /** The project. */
  const project = ref(localStorage.getItem('project') ?? '')

  /** Gets the markdown of the project. */
  const markdown = computed(() => project.value)

  /** Gets the lines of the project. */
  const lines = computed(() => markdown.value.split('\n'))

  /** Gets the outline of the project. */
  const outline = computed(() => {
    const o = []
    for (let i = 0; i < lines.value.length; i++) {
      const line = lines.value[i]
      const match = line.match(/^(#{1,6})\s+(.*)/)
      if (match) {
        o.push({
          level: match[1].length,
          line: i + 1,
          text: match[2].trim(),
        })
      }
    }
    return o
  })

  const debouncedMarkdown = useDebounce(markdown, 1_000)

  watch(debouncedMarkdown, (newMarkdown) => {
    localStorage.setItem('project', newMarkdown)
  })

  function set(newMarkdown: string) {
    project.value = newMarkdown
  }

  return { markdown, outline, set }
})
