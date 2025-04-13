<script setup lang="ts">
import { useTextStore } from '@/stores/text'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { Compartment, EditorState } from '@codemirror/state'
import { basicSetup, EditorView } from 'codemirror'
import { onMounted, ref, watch } from 'vue'
import EditorHeader from './EditorHeader.vue'
import { useThemeStore } from '@/stores/theme'

const editor = ref()
const editorTheme = new Compartment()
const text = useTextStore().text
const themeStore = useThemeStore()

let view = new EditorView()

onMounted(() => {
  view = new EditorView({
    state: EditorState.create({
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        markdown({ codeLanguages: languages }),
        editorTheme.of([
          themeStore.editor,
          EditorView.theme({
            '.cm-content': {
              paddingBottom: 'calc(100vh - 8.4rem)',
            },
          }),
        ]),
      ],
      doc: text,
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

<style lang="css">
.editor-container {
  height: calc(100vh - 4rem);
}

.editor-wrapper {
  height: calc(100vh - 7rem);
  overflow-y: scroll;
}
</style>
