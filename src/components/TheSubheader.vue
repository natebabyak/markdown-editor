<script setup lang="ts">
import IconBlockquote from './icons/IconBlockquote.vue'
import IconBold from './icons/IconBold.vue'
import IconCode from './icons/IconCode.vue'
import IconDownload from './icons/IconDownload.vue'
import IconFencedCodeBlock from './icons/IconFencedCodeBlock.vue'
import IconHorizontalRule from './icons/IconHorizontalRule.vue'
import IconImage from './icons/IconImage.vue'
import IconItalic from './icons/IconItalic.vue'
import IconLink from './icons/IconLink.vue'
import IconOrderedList from './icons/IconOrderedList.vue'
import IconRedo from './icons/IconRedo.vue'
import IconStrikethrough from './icons/IconStrikethrough.vue'
import IconTable from './icons/IconTable.vue'
import IconUndo from './icons/IconUndo.vue'
import IconUnorderedList from './icons/IconUnorderedList.vue'
import IconUpload from './icons/IconUpload.vue'
import StyleSelect from './StyleSelect.vue'
import SubheaderIconButton from './SubheaderIconButton.vue'
</script>

<template>
  <header class="subheader">
    <SubheaderIconButton v-tooltip.bottom="'Upload'" :icon="IconUpload" />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton v-tooltip.bottom="'Undo (Ctrl+Z)'" :icon="IconUndo" />
    <SubheaderIconButton v-tooltip.bottom="'Redo (Ctrl+Y)'" :icon="IconRedo" />
    <span class="divider vertical-divider subheader-divider"></span>
    <StyleSelect />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton v-tooltip.bottom="'Bold (Ctrl+B)'" :icon="IconBold" />
    <SubheaderIconButton v-tooltip.bottom="'Italic (Ctrl+I)'" :icon="IconItalic" />
    <SubheaderIconButton
      v-tooltip.bottom="'Strikethrough (Alt+Shift+5)'"
      :icon="IconStrikethrough"
    />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton v-tooltip.bottom="'Insert horizontal rule'" :icon="IconHorizontalRule" />
    <SubheaderIconButton v-tooltip.bottom="'Insert image'" :icon="IconImage" />
    <SubheaderIconButton v-tooltip.bottom="'Insert link (Ctrl+K)'" :icon="IconLink" />
    <SubheaderIconButton v-tooltip.bottom="'Insert table'" :icon="IconTable" />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton
      v-tooltip.bottom="'Unordered list (Ctrl+Shift+8)'"
      :icon="IconUnorderedList"
    />
    <SubheaderIconButton v-tooltip.bottom="'Ordered list (Ctrl+Shift+7)'" :icon="IconOrderedList" />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton v-tooltip.bottom="'Blockquote'" :icon="IconBlockquote" />
    <SubheaderIconButton v-tooltip.bottom="'Code'" :icon="IconCode" />
    <SubheaderIconButton v-tooltip.bottom="'Code block'" :icon="IconFencedCodeBlock" />
    <span class="divider vertical-divider subheader-divider"></span>
    <SubheaderIconButton v-tooltip.bottom="'Download'" :icon="IconDownload" />
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

.subheader-divider {
  height: 1rem;
}
</style>
