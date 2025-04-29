<script setup lang="ts">
import IconBlockquote from './icons/IconBlockquote.vue'
import IconBold from './icons/IconBold.vue'
import IconCode from './icons/IconCode.vue'
import IconDownload from './icons/IconDownload.vue'
import IconFencedCodeBlock from './icons/IconFencedCodeBlock.vue'
import IconHeading1 from './icons/IconHeading1.vue'
import IconHeading2 from './icons/IconHeading2.vue'
import IconHeading3 from './icons/IconHeading3.vue'
import IconHeading4 from './icons/IconHeading4.vue'
import IconHeading5 from './icons/IconHeading5.vue'
import IconHeading6 from './icons/IconHeading6.vue'
import IconHorizontalRule from './icons/IconHorizontalRule.vue'
import IconImage from './icons/IconImage.vue'
import IconItalic from './icons/IconItalic.vue'
import IconLink from './icons/IconLink.vue'
import IconOrderedList from './icons/IconOrderedList.vue'
import IconParagraph from './icons/IconParagraph.vue'
import IconRedo from './icons/IconRedo.vue'
import IconStrikethrough from './icons/IconStrikethrough.vue'
import IconSubscript from './icons/IconSubscript.vue'
import IconSuperscript from './icons/IconSuperscript.vue'
import IconTable from './icons/IconTable.vue'
import IconTaskList from './icons/IconTaskList.vue'
import IconUndo from './icons/IconUndo.vue'
import IconUnorderedList from './icons/IconUnorderedList.vue'
import IconUpload from './icons/IconUpload.vue'
import SmallIconButton from './SmallIconButton.vue'
</script>

<template>
  <header class="subheader">
    <SmallIconButton :icon="IconUpload" />
    <span class="divider"></span>
    <SmallIconButton :icon="IconUndo" />
    <SmallIconButton :icon="IconRedo" />
    <span class="divider"></span>
    <SmallIconButton :icon="IconParagraph" />
    <SmallIconButton :icon="IconHeading1" />
    <SmallIconButton :icon="IconHeading2" />
    <SmallIconButton :icon="IconHeading3" />
    <SmallIconButton :icon="IconHeading4" />
    <SmallIconButton :icon="IconHeading5" />
    <SmallIconButton :icon="IconHeading6" />
    <span class="divider"></span>
    <SmallIconButton :icon="IconBold" />
    <SmallIconButton :icon="IconItalic" />
    <SmallIconButton :icon="IconBlockquote" />
    <SmallIconButton :icon="IconOrderedList" />
    <SmallIconButton :icon="IconUnorderedList" />
    <SmallIconButton :icon="IconCode" />
    <SmallIconButton :icon="IconHorizontalRule" />
    <SmallIconButton :icon="IconLink" />
    <SmallIconButton :icon="IconImage" />
    <span class="divider"></span>
    <SmallIconButton :icon="IconTable" />
    <SmallIconButton :icon="IconFencedCodeBlock" />
    <SmallIconButton :icon="IconStrikethrough" />
    <SmallIconButton :icon="IconTaskList" />
    <SmallIconButton :icon="IconSubscript" />
    <SmallIconButton :icon="IconSuperscript" />
    <span class="divider"></span>
    <SmallIconButton :icon="IconDownload" />
  </header>
</template>

<style lang="css" scoped>
.subheader {
  align-items: center;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  display: flex;
  height: 2rem;
  padding: 0 0.25rem 0 0.25rem;
  width: 100%;
}

.divider {
  background-color: var(--border);
  height: 100%;
  margin: 0 0.25rem 0 0.25rem;
  width: 1px;
}
</style>
