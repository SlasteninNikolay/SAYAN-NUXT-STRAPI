<!-- blocks/Hero.vue -->
<template>
  <app-header />
  <section class="hero relative w-full h-screen" :class="header?.theme">
      <div class="relative h-full top-1/2 -translate-y-1/2 z-10">
        <div class="flex items-center md:items-start justify-center gap-10  md:gap-14 flex-col container h-full">
         <div class="flex flex-col gap-6 max-w-xl text-center md:text-start text-balance">
           <app-main-heading :title="header?.title" />
           <p class="m-0 text-base md:text-xl font-intro font-medium text-white/80">{{ text }}</p>
         </div>
          <base-app-button
              v-for="(button, index) in buttons"
              :key="button.id || index"
              :url="button.link.href"
              class="max-w-52 px-4 py-3"
              type="secondary"
              size="small"
              :title="button.link.label"
              :aria-label="button.link.label"
          />
          <div class="mt-12 flex flex-col items-center md:flex-row gap-8 md:gap-20 max-w-3xl text-balance absolute bottom-6 md:static">
            <span class="border-b-2 md:border-b-0 md:border-l-2 border-secondary px-3 py-1 text-sm md:text-base font-regular text-white/80 bg-primary/50">35 комфортабельных номеров </span>
            <span class="border-b-2 md:border-b-0 md:border-l-2 border-secondary px-3 py-1 text-sm md:text-base font-regular text-white/80 bg-primary/50">Ресторан сибирской кухни</span>
            <span class="md:border-l-2 border-secondary px-3 py-1 text-sm md:text-base font-regular text-white/80 bg-primary/50">Спа-зона с бассейном</span>
          </div>
        </div>
      </div>

        <div class="absolute top-0 left-0 w-full h-screen">
          <base-app-slider class="w-full h-screen">
            <base-app-slider-image
                v-for="photo in images"
                :key="photo.id"
                :src="getStrapiMedia(photo.url)"
                :alt="photo.alternativeText"
                img-class="object-top"
            />
          </base-app-slider>
        </div>
  </section>
</template>

<script setup>

defineProps({
  id: Number,
  header: Object,
  text: String,
  images: Array,
  buttons: Array,
})
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
  opacity: 0.8;
}

</style>