<script setup lang="ts">
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { Compartment, EditorState } from '@codemirror/state'
import { basicSetup, EditorView } from 'codemirror'
import { onMounted, ref, watch } from 'vue'
import { useMarkdownStore } from '@/stores/project'
import { useEditorThemeStore } from '@/stores/editorTheme'

const editor = ref()
const markdownStore = useMarkdownStore()
const theme = new Compartment()
const editorTheme = useEditorThemeStore()

let view = new EditorView()

onMounted(() => {
  view = new EditorView({
    state: EditorState.create({
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        markdown({ codeLanguages: languages }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            markdownStore.markdown = update.state.doc.toString()
          }
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
      doc: markdownStore.markdown,
    }),
    parent: editor.value,
  })
})

watch(editorTheme, () => {
  view.dispatch({
    effects: theme.reconfigure([
      editorTheme.theme,
      EditorView.theme({
        '.cm-content': {
          paddingBottom: 'calc(100vh - 6.4rem)',
        },
      }),
    ]),
  })
})
</script>

<template>
  <div class="editor-container">
    <div class="editor-wrapper">
      <div ref="editor"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.editor-container {
  height: 100%;
}

.editor-wrapper {
  height: 100%;
  overflow-y: scroll;
}
</style>
