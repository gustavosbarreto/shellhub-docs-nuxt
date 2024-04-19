<script setup>
  defineProps(['color', 'variant'])
</script>

<template>
  <v-chip :color="color" :variant="variant">
    <slot/>
  </v-chip>
</template>
