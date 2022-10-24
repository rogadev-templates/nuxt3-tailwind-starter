<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nuxt-link :to="to">
    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
      <slot />
    </span>
  </nuxt-link>
</template>