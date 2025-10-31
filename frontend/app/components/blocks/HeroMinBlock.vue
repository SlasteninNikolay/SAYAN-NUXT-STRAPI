<!-- blocks/HeroMinBlock.vue -->
<template>
  <app-header />
  <section class="hero relative w-full h-screen max-h-[60vh]" :class="header?.theme">
    <div class="relative h-full top-1/2 -translate-y-1/2 z-10">
      <div class="flex items-start justify-center gap-14 flex-col container h-full">
        <div class="flex flex-col gap-6 max-w-xl text-balance">
          <app-main-heading :title="header?.title" />
          <p class="m-0 text-xl font-intro text-white/80" v-if="description" v-html="htmlDescription"></p>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-screen max-h-[60vh]">
      <base-app-slider class="w-full h-screen max-h-[60vh]">
        <base-app-slider-image
            v-for="photo in images"
            :key="photo.id"
            :src="getStrapiMedia(photo.url)"
            :alt="photo.alternativeText"
            img-class="object-top w-full h-screen"
        />
      </base-app-slider>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  header: Object,
  description: Object,
  images: Array
})

const htmlDescription = computed(() => richTextToHtml(props.description))
</script>

<style scoped>
:deep(.swiper-slide img) {
  height: 100%;
}

.hero::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, rgba(42, 57, 40, 0.1) 20%, rgba(42, 57, 40, 0.8) 80%);
  z-index: 1;
}

</style>