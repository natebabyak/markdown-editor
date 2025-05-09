<script setup lang="ts">
import { onMounted } from 'vue'
import Split from 'split.js'
import TheEditor from './components/TheEditor.vue'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
import ThePreview from './components/ThePreview.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheSubheader from './components/TheSubheader.vue'

onMounted(() => {
  Split(['#editor', '#preview'], {
    snapOffset: 0,
    cursor: 'ew-resize',
    gutterSize: 3,
    minSize: 200,
  })
})
</script>

<template>
  <TheHeader />
  <div class="under-header">
    <TheSidebar />
    <main class="right-sidebar">
      <TheSubheader />
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
.under-header {
  display: flex;
  height: calc(100vh - 3rem);
}

.right-sidebar {
  width: 100%;
}

.split {
  display: flex;
  height: calc(100vh - 5rem);
}

.gutter {
  position: relative;
}

.gutter::before {
  background-color: var(--border);
  bottom: 0;
  content: '';
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  transition: background-color 0.3s ease-in;
  width: 3px;
}

.gutter:hover {
  cursor: ew-resize;
}

.gutter:hover::before {
  width: 5px;
  background-color: var(--brand);
}
</style>
