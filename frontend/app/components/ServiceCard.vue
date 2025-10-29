<script setup>

const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: () => ({}),
  }
})

</script>

<template>
  <div class="relative h-full bg-beige-500">
    <BaseAppImage mode="rounded" img-class="w-full h-full object-cover" :image="service.image"  />
    <h4 class="absolute bottom-5 left-5 z-10 text-white text-lg font-medium">{{ service.title }}</h4>
  </div>
</template>