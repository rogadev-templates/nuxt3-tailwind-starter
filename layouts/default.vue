<script setup lang="ts">
import TheNavbar from "~/components/layout/navbar/TheNavbar.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <TheNavbar />
    <slot />
  </div>
</template>