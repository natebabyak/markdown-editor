<script setup lang="ts">
import EditorHeaderButton from './EditorHeaderButton.vue'
import IconBlockquote from './icons/IconBlockquote.vue'
import IconBold from './icons/IconBold.vue'
import IconCode from './icons/IconCode.vue'
import IconHorizontalRule from './icons/IconHorizontalRule.vue'
import IconImage from './icons/IconImage.vue'
import IconItalic from './icons/IconItalic.vue'
import IconLink from './icons/IconLink.vue'
import IconOrderedList from './icons/IconOrderedList.vue'
import IconUnorderedList from './icons/IconUnorderedList.vue'
</script>

<template>
  <header class="editor-header">
    <EditorHeaderButton :icon="IconBold" />
    <EditorHeaderButton :icon="IconItalic" />
    <EditorHeaderButton :icon="IconBlockquote" />
    <EditorHeaderButton :icon="IconOrderedList" />
    <EditorHeaderButton :icon="IconUnorderedList" />
    <EditorHeaderButton :icon="IconCode" />
    <EditorHeaderButton :icon="IconHorizontalRule" />
    <EditorHeaderButton :icon="IconLink" />
    <EditorHeaderButton :icon="IconImage" />
  </header>
</template>

<style lang="css">
.editor-header {
  align-items: center;
  background-color: var(--octonary-contrast);
  border-bottom: 1px solid var(--senary-contrast);
  display: flex;
  gap: 0.5rem;
  height: 3rem;
  padding: 0 0.5rem 0 0.5rem;
}
</style>
