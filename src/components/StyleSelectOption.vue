<script setup lang="ts">
import IconHeading1 from './icons/IconHeading1.vue'
import IconHeading2 from './icons/IconHeading2.vue'
import IconHeading3 from './icons/IconHeading3.vue'
import IconHeading4 from './icons/IconHeading4.vue'
import IconHeading5 from './icons/IconHeading5.vue'
import IconHeading6 from './icons/IconHeading6.vue'
import IconParagraph from './icons/IconParagraph.vue'

defineProps(['index'])

const icons = [
  IconParagraph,
  IconHeading1,
  IconHeading2,
  IconHeading3,
  IconHeading4,
  IconHeading5,
  IconHeading6,
]

const labels = [
  'Paragraph',
  'Heading 1',
  'Heading 2',
  'Heading 3',
  'Heading 4',
  'Heading 5',
  'Heading 6',
]
</script>

<template>
  <div class="option">
    <component :is="icons[index]" class="icon" />
    <span class="label">{{ labels[index] }}</span>
  </div>
</template>

<style lang="css" scoped>
.option {
  align-items: center;
  background-color: var(--background-soft);
  color: var(--text-mute);
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  padding-left: 0.25rem;
  padding-right: 0.5rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  width: 8rem;
}

.option:hover {
  background-color: var(--background-mute);
  color: var(--text-soft);
}

.label {
  font-weight: 600;
}
</style>
