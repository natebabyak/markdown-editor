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
  border-top: 1px solid var(--senary-contrast);
  padding: 4rem;
  text-align: center;
  width: 100%;
}

.footer-text {
  color: var(--quaternary-contrast);
}
</style>
