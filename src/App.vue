<script setup lang="ts">
import { onMounted } from 'vue'
import TheEditor from './components/TheEditor.vue'
import TheHeader from './components/TheHeader.vue'
import ThePreview from './components/ThePreview.vue'
import Split from 'split.js'
import TheSidebar from './components/TheSidebar.vue'
import TheMenu from './components/TheMenu.vue'

onMounted(() => {
  Split(['#editor', '#preview'], {
    minSize: 0,
    snapOffset: 0,
    cursor: 'ew-resize',
    gutterSize: 4,
  })
})
</script>

<template>
  <TheHeader />
  <div class="layout">
    <TheSidebar />
    <main class="main">
      <div class="split">
        <div id="editor">
          <TheEditor />
        </div>
        <div id="preview">
          <ThePreview />
        </div>
      </div>
    </main>
  </div>
  <TheMenu />
</template>

<style lang="css">
.layout {
  display: flex;
  height: calc(100vh - 4rem);
  width: 100vw;
  overflow: hidden;
}

.main {
  display: flex;
  flex: 1;
}

.split {
  display: flex;
  flex: 1;
}

.gutter {
  background-color: var(--senary-contrast);
}

.gutter:hover {
  cursor: ew-resize;
}
</style>
