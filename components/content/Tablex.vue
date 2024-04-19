<script setup>
  defineProps(['namex'])
</script>

<template>
  <div>
    Olha {{ namex }}
    
    <slot/>
  </div>
</template>
