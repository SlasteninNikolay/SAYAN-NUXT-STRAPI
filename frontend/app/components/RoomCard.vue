<script setup lang="ts">

import AppSlider from "~/components/base/AppSlider.vue";
import AppSliderImage from "~/components/base/AppSliderImage.vue";

const props = defineProps({
  room: {
    type: Object,
    required: true,
    default: () => ({}),
  }
})

const htmlRoomDescription = computed(() => richTextToHtml(props.room?.description))
</script>

<template>
  <div class="grid grid-cols-5 gap-16">
    <div class="col-span-2">
      <app-slider class="h-full max-h-96">
        <app-slider-image
          v-for="(photo, index) in room.photos"
          :key="photo.id"
          :src="getStrapiMedia(photo.url)"
          :alt="photo.alternativeText"
        />
      </app-slider>
    </div>
    <div class="col-span-3 flex flex-col justify-between">
      <h3 class="text-2xl text-primary font-semibold font-etude">{{ room?.title }}</h3>
      <div class="grid grid-cols-[minmax(100px,_300px)_minmax(100px,_300px)] gap-2">
        <div v-for="(item, index) in room?.features" :key="index" class="flex items-center gap-2">
          <img :src="getStrapiMedia(item?.icon.url)" class="w-10 h-10 text-primary-500" :alt="item.title" :title="item.title" />
          <span class="text-base text-primary font-semibold">{{ item.title }}</span>
        </div>
      </div>
      <div class="max-w-2xl" v-if="room.description" v-html="htmlRoomDescription">
      </div>
      <base-app-button
          v-for="(button, index) in room.button"
          :key="button.id || index"
          :url="button.url"
          class="max-w-52 py-3"
          :type="button.type"
          size="small"
          :title="button.title"
          :aria-label="button.title"
      />
    </div>
  </div>
</template>