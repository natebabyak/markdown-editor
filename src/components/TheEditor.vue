<script setup lang="ts">
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { Compartment, EditorState } from '@codemirror/state'
import { basicSetup, EditorView } from 'codemirror'
import { onMounted, ref, watch } from 'vue'
import EditorHeader from './EditorHeader.vue'
import { useMarkdownStore } from '@/stores/markdown'

const editor = ref()
const markdownStore = useMarkdownStore()
const editorTheme = new Compartment()

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
        editorTheme.of([
          themeStore.editor,
          EditorView.theme({
            '.cm-content': {
              paddingBottom: 'calc(100vh - 8.4rem)',
            },
          }),
        ]),
      ],
      doc: markdownStore.markdown,
    }),
    parent: editor.value,
  })
})

watch(themeStore, () => {
  view.dispatch({
    effects: editorTheme.reconfigure([
      themeStore.editor,
      EditorView.theme({
        '.cm-content': {
          paddingBottom: 'calc(100vh - 8.4rem)',
        },
      }),
    ]),
  })
})
</script>

<template>
  <div class="editor-container">
    <EditorHeader />
    <div class="editor-wrapper">
      <div ref="editor"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.editor-container {
  height: calc(100vh - 4rem);
}

.editor-wrapper {
  height: calc(100vh - 7rem);
  overflow-y: scroll;
}
</style>
