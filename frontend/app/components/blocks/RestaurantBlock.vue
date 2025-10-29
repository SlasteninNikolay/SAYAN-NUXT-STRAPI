<script setup>

import AppSlider from "~/components/base/AppSlider.vue";
import AppSliderImage from "~/components/base/AppSliderImage.vue";

const props = defineProps({
  header: Object,
  description: Object,
  features: Object,
  images: Object,
  buttons: Object,
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-24 bg-primary">
    <div class="container">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="heading relative text-[clamp(1.2rem,4vw,2rem)] uppercase font-medium text-white text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-base text-white/50 font-light text-balance" v-if="description" v-html="htmlDescription"></div>
        <div class="flex gap-4">
          <span  v-for="feature in features" :key="feature.id" class="text-sm text-primary/80 leading-none px-2 py-1 rounded-lg" :class="`bg-${feature.theme}`">
            {{ feature.title }}
          </span>
        </div>
      </div>
      <div class="">
        <app-slider :slidesPerView="3" :effect="fade" class="w-full h-full max-h-96" >
          <app-slider-image
              v-for="photo in images"
              :key="photo.id"
              :src="getStrapiMedia(photo.url)"
              :alt="photo.alternativeText"
          />
        </app-slider>
      </div>
    </div>
  </section>
</template>
