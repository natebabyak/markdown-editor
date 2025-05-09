<script setup lang="ts">
import { ref } from 'vue'
import IconDownload from './icons/IconDownload.vue'
import IconUpload from './icons/IconUpload.vue'
import SubheaderIconButton from './SubheaderIconButton.vue'
import { useEditorStore } from '@/stores/editor'

const fileInput = ref<HTMLInputElement | null>(null)

const editor = useEditorStore()

function openFilePicker() {
  fileInput.value?.click()
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    editor.uploadContent(reader.result as string)
  }
  reader.readAsText(file)
}

function downloadFile() {
  const blob = new Blob([editor.getContent], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'README.md'
  a.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <header class="subheader">
    <input
      @change="handleFileUpload"
      ref="fileInput"
      type="file"
      accept=".md,.txt"
      style="display: none"
    />
    <SubheaderIconButton
      @click="openFilePicker"
      id="upload"
      v-tooltip.bottom="'Upload'"
      :icon="IconUpload"
    />
    <span class="divider"></span>
    <SubheaderIconButton
      @click="downloadFile"
      id="download"
      v-tooltip.bottom="'Download'"
      :icon="IconDownload"
    />
  </header>
</template>

<style lang="css" scoped>
.subheader {
  align-items: center;
  background-color: var(--background-soft);
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 0.25rem;
  height: 2rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100%;
}

.divider {
  height: 1rem;
  width: 1px;
  background-color: var(--border);
}
</style>
