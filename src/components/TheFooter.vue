<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <span class="footer-text"> &copy; {{ year }} Nate Babyak. All rights reserved. </span>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  border-top: 1px solid var(--color-border);
  bottom: 0;
  padding: 4rem;
  width: 100%;
}

.footer-text {
  color: var(--color-text-soft);
}
</style>
