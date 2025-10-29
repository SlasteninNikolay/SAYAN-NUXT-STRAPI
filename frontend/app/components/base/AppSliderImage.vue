<template>
  <img :src="src" class="w-full h-full object-cover" :class="imgClass" :alt="alt" />
</template>
<script setup>
defineProps(['src', 'alt', 'imgClass'])
</script>