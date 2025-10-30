<script setup>

import AppSlider from "~/components/base/AppSlider.vue";
import AppSliderImage from "~/components/base/AppSliderImage.vue";
import AppButton from "~/components/base/AppButton.vue";

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
        <h2 class="heading text-3xl relative text-3xl uppercase font-medium text-white text-balance">{{ header?.title }}</h2>
        <div class="text-base text-white/50 font-light text-balance" v-if="description" v-html="htmlDescription"></div>
        <div class="flex gap-4">
          <span  v-for="feature in features" :key="feature.id" class="text-sm text-primary/80 leading-none px-2 py-1 rounded-lg opacity-80" :class="`bg-${feature.theme}`">
            {{ feature.title }}
          </span>
        </div>
        </div>
          <app-slider :slidesPerView="4" :effect="fade" class="w-full h-full max-h-96" >
            <app-slider-image
                v-for="photo in images"
                :key="photo.id"
                :src="getStrapiMedia(photo.url)"
                :alt="photo.alternativeText"
                class="rounded-lg overflow-hidden max-h-[220px]"
            />
          </app-slider>
        </div>
        <div class="container pt-12">
          <base-app-button
              v-for="(button, index) in buttons"
              :key="button.id || index"
              :url="button.link.href"
              :type="button.theme"
              size="small"
              :title="button.link.label"
              :aria-label="button.link.title"
              :target="button.link.target"
          />
        </div>
  </section>
</template>
