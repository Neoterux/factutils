<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <AppNavbar />
  <slot />
  <AppFooter />
</template>
