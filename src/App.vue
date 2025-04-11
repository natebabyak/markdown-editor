<script setup lang="ts">
import { onMounted } from 'vue'
import TheEditor from './components/TheEditor.vue'
import TheHeader from './components/TheHeader.vue'
import TheOutline from './components/TheSidebar.vue'
import ThePreview from './components/ThePreview.vue'
import Split from 'split.js'

onMounted(() => {
  Split(['#editor', '#preview'], {
    sizes: [50, 50],
    snapOffset: 0,
    cursor: 'grab',
  })
})
</script>

<template>
  <TheHeader />
  <main class="main">
    <TheOutline open="true" />
    <div class="split">
      <div id="editor">
        <TheEditor />
      </div>
      <div id="preview">
        <ThePreview />
      </div>
    </div>
  </main>
</template>

<style lang="css">
.main {
  display: flex;
  height: calc(100vh - 4rem);
}

.split {
  display: flex;
}

.gutter {
  background-color: var(--senary-contrast);
}

.gutter:hover {
  cursor: ew-resize;
}
</style>
