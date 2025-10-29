<script setup>

const props = defineProps({
  header: Object,
  description: Object,
  gallery: Array,
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative pt-24 bg-beige-500">
    <object class="absolute top-0 left-1/2 -translate-x-1/2 h-full z-0" type="image/svg+xml" data="/images/svg/route-4.svg"></object>
    <object class="absolute top-1/2 -translate-y-1/2 left-0 max-h-[900px] max-w-[390px] z-0" type="image/svg+xml" data="/images/svg/sea-2.svg"></object>
    <div class="container">
      <div class="grid grid-cols-2 mb-14 gap-14">
        <h2 class="heading relative text-2xl uppercase font-etude font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-lg font-medium text-balance" v-if="description" v-html="htmlDescription"></div>
      </div>
      <div class="h-full">
        <base-app-gallery :photos="gallery" />
      </div>
    </div>
  </section>
</template>
