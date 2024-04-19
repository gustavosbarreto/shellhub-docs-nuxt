<script setup>
  defineProps(['type', 'variant'])
</script>

<template>
  <v-card :color="type" :variant="variant">
    <slot/>
  </v-card>
</template>

