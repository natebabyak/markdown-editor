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
    <span class="icon">
      {{ icons[index] }}
    </span>
    <span class="label">{{ labels[index] }}</span>
  </div>
</template>

<style lang="css" scoped></style>
