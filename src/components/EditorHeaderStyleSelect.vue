<script setup lang="ts">
import EditorHeaderStyleSelectOption from './EditorHeaderStyleSelectOption.vue'
import IconArrowDropUp from './icons/IconArrowDropUp.vue'
import IconArrowDropDown from './icons/IconArrowDropDown.vue'
import IconParagraph from './icons/IconParagraph.vue'
import IconHeading1 from './icons/IconHeading1.vue'
import IconHeading2 from './icons/IconHeading2.vue'
import IconHeading3 from './icons/IconHeading3.vue'
import IconHeading4 from './icons/IconHeading4.vue'
import IconHeading5 from './icons/IconHeading5.vue'
import IconHeading6 from './icons/IconHeading6.vue'
import { onClickOutside } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

const options = [
  {
    icon: IconParagraph,
    name: 'Paragraph',
  },
  {
    icon: IconHeading1,
    name: 'Heading 1',
  },
  {
    icon: IconHeading2,
    name: 'Heading 2',
  },
  {
    icon: IconHeading3,
    name: 'Heading 3',
  },
  {
    icon: IconHeading4,
    name: 'Heading 4',
  },
  {
    icon: IconHeading5,
    name: 'Heading 5',
  },
  {
    icon: IconHeading6,
    name: 'Heading 6',
  },
] as const

const isOpen = ref<boolean>(false)
const target = useTemplateRef<HTMLElement>('target')

const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

onClickOutside(target, () => close)
</script>

<template>
  <div class="wrapper" ref="target">
    <div @click="toggle" class="toggle">
      <span>current style</span>
      <span class="arrow">
        <IconArrowDropUp v-if="isOpen" />
        <IconArrowDropDown v-else />
      </span>
    </div>
    <div v-if="isOpen" class="style-select">
      <EditorHeaderStyleSelectOption
        v-for="(option, index) in options"
        :key="index"
        :icon="option.icon"
        :name="option.name"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: relative;
}

.toggle {
  cursor: pointer;
}

.style-select {
  background-color: var(--octonary-contrast);
  position: absolute;
  z-index: 1000;
}
</style>
