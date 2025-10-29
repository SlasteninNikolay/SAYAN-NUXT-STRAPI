<script setup>
import AppSliderImage from "~/components/base/AppSliderImage.vue";
import AppSlider from "~/components/base/AppSlider.vue";

const props = defineProps({
  photos: {
    type: Array,
    required: true,
    default: () => [],
  }
})

</script>

<template>
  <app-slider :gridMode="true" class="h-full">
    <app-slider-image
        v-for="(photo, index) in photos"
        :key="photo.id || index"
        :src="getStrapiMedia(photo.url)"
        :alt="photo.alternativeText"
        class="border-[10px] border-white rounded-2xl"
    />
  </app-slider>
</template>
