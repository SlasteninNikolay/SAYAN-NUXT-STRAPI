<!-- blocks/Hero.vue -->
<template>
  <app-header />
  <section class="hero relative w-full h-screen" :class="header?.theme">
      <div class="relative h-full top-1/2 -translate-y-1/2 z-10">
        <div class="flex items-start justify-center gap-14 flex-col container h-full">
         <div class="flex flex-col gap-6 max-w-xl text-balance">
           <app-main-heading :title="header?.title" />
           <p class="m-0 text-xl font-intro font-medium text-white/80">{{ text }}</p>
         </div>
          <base-app-button
              url="/booking"
              class="py-3 min-w-60 font-intro"
              type="secondary"
              size="small"
              title="Забронировать"
              aria-label="Забронировать"
          />
          <div class="flex gap-20 max-w-3xl text-balance">
            <span class="border-l-2 border-secondary px-3 text-base font-regular text-white/80 bg-primary/50">35 комфортабельных номеров </span>
            <span class="border-l-2 border-secondary px-3 text-base font-regular text-white/80 bg-primary/50">Ресторан сибирской кухни</span>
            <span class="border-l-2 border-secondary px-3 text-base font-regular text-white/80 bg-primary/50">Спа-зона с бассейном</span>
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
  images: Array
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
  background: linear-gradient(270deg, rgba(42, 57, 40, 0.2) 20%, rgba(42, 57, 40, 0.8) 80%);
  z-index: 1;
  opacity: 0.8;
}

</style>