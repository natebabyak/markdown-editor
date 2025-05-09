import { basicSetup, EditorView } from 'codemirror'
import { defineStore } from 'pinia'
import { Compartment, EditorState } from '@codemirror/state'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { useEditorThemeStore } from './editorTheme'
import { computed, ref, watch } from 'vue'
import { useDebounce } from '@vueuse/core'

export const useEditorStore = defineStore('editor', () => {
  const content = ref(localStorage.getItem('content') ?? '')

  const debouncedContent = useDebounce(content, 1_000)

  watch(debouncedContent, (newContent) => {
    localStorage.setItem('content', newContent)
  })

  const getContent = computed(() => content.value)

  const getOutline = computed(() => {
    const lines = content.value.split('\n')
    const headings = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const match = line.match(/^(#{1,6})\s+(.*)/)

      if (match) {
        headings.push({
          level: match[1].length,
          line: i + 1,
          text: match[2].trim(),
        })
      }
    }

    const uniqueLevels = [...new Set(headings.map((h) => h.level))].sort((a, b) => a - b)
    const levelMap = new Map()

    uniqueLevels.forEach((level, index) => {
      levelMap.set(level, index)
    })

    return headings.map((heading) => ({
      ...heading,
      level: levelMap.get(heading.level),
    }))
  })

  function uploadContent(newMarkdown: string) {
    content.value = newMarkdown

    if (view.value) {
      view.value.dispatch({
        changes: {
          from: 0,
          to: view.value.state.doc.length,
          insert: newMarkdown,
        },
      })
    }
  }

  function setContent(newMarkdown: string) {
    content.value = newMarkdown
  }

  const view = ref<EditorView | null>(null)

  const theme = new Compartment()

  const editorTheme = useEditorThemeStore()

  function mountEditor(parentElement: HTMLElement) {
    const state = EditorState.create({
      doc: content.value,
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        markdown({ codeLanguages: languages }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setContent(update.state.doc.toString())
          }
          // if (update.selectionSet) {
          //   selectionVersion.value++
          // }
        }),
        theme.of([
          editorTheme.theme,
          EditorView.theme({
            '.cm-content': {
              paddingBottom: 'calc(100vh - 6.4rem)',
            },
          }),
        ]),
      ],
    })

    view.value = new EditorView({
      state,
      parent: parentElement,
    })
  }

  function reconfigureTheme() {
    if (!view.value) return
    view.value.dispatch({
      effects: theme.reconfigure([
        editorTheme.theme,
        EditorView.theme({
          '.cm-content': {
            paddingBottom: 'calc(100vh - 6.4rem)',
          },
        }),
      ]),
    })
  }

  /*
  const getStyle = computed(() => {
    const _ = selectionVersion.value

    const cursorPos = view.value!.state.selection.main.head
    const lineText = view.value!.state.doc.lineAt(cursorPos).text
    const match = lineText.match(/^(#{1,6})\s+(.*)/)

    const styleMap = [
      'Paragraph',
      'Heading 1',
      'Heading 2',
      'Heading 3',
      'Heading 4',
      'Heading 5',
      'Heading 6',
    ]

    return styleMap[match ? match[1].length : 0] ?? 'Paragraph'
  })

  function handleStyle(level: number) {
    const { dispatch, state } = view.value!
    const pos = state.selection.ranges[0].from
    const line = state.doc.lineAt(pos)
    const match = line.text.match(/^(#{1,6})\s+(.*)/)

    const content = match?.[2] ?? line.text
    const prefix = level === 0 ? '' : `${'#'.repeat(level)} `

    dispatch({
      changes: {
        from: line.from,
        to: line.to,
        insert: `${prefix}${content}`,
      },
      selection: { anchor: line.from + prefix.length + content.length },
      scrollIntoView: true,
    })

    view.value!.focus()
  }

  function handleBold() {
    const { state, dispatch } = view.value!
    const range = state.selection.ranges[0]

    const from = range.from
    const to = range.to
    const text = state.doc.sliceString(from, to)
    const check2 = state.doc.sliceString(from - 2, to + 2)
    const check3 = state.doc.sliceString(from - 3, to + 3)

    if (
      (check2.startsWith('**') && check2.endsWith('**')) ||
      (check2.startsWith('__') && check2.endsWith('__'))
    ) {
      dispatch({
        changes: { from: from - 2, to: to + 2, insert: text },
        selection: { anchor: from - 2, head: to - 2 },
        scrollIntoView: true,
      })
    }

    view.value!.focus()
  }
  */

  function goToLine(line: number) {
    if (!view.value) return

    const doc = view.value.state.doc
    const linePos = doc.line(line)
    const endPos = linePos.to

    view.value.dispatch({
      selection: { anchor: endPos, head: endPos },
      scrollIntoView: true,
      effects: EditorView.scrollIntoView(linePos.from, { y: 'center' }),
    })

    view.value.focus()
  }

  return {
    getContent,
    getOutline,
    view,
    mountEditor,
    reconfigureTheme,
    // getStyle: () => getStyle.value,
    // handleStyle,
    // handleBold,
    setContent,
    goToLine,
    uploadContent,
  }
})
