<script setup>

const props = defineProps({
  header: Object,
  description: Object,
  images: Object,
  buttons: Object,
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative min-h-96 mb-24 bg-primary">
    <base-app-image class="location-background block absolute top-0 left-0 z-0 w-full h-full" img-class="object-top" :image="images" />
    <div class="container">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="heading relative text-2xl md:text-3xl font-medium text-white text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-base text-white/80 font-light text-balance z-10" v-if="description" v-html="htmlDescription"></div>
      </div>
    </div>
  </section>
</template>