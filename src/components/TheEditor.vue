<script setup lang="ts">
import { useTextStore } from '@/stores/text'
import { ref } from 'vue'

const textStore = useTextStore()

const text = textStore.text.split('\n')

const lines = ref(1)

const selectedLine = ref(null)
</script>

<template>
  <div class="editor">
    <div v-for="(line, index) in lines">
      <span>{{ index + 1 }}</span>
      <div contenteditable="true">
        {{ text[line] }}
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
