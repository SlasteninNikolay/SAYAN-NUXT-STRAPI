<script setup>

const props = defineProps({
  header: Object,
  contacts: Object,
  images: Object,
})

</script>

<template>
  <section class="relative py-10 md:py-24 overflow-hidden">
    <div class="container">
      <object class="absolute w-64 top-0 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 opacity-10" type="image/svg+xml" data="/images/svg/pane.svg"></object>
      <div class="flex md:grid flex-col md:grid-cols-2 gap-10 md:gap-16">
        <div class="flex flex-col gap-5 text-balance justify-self-end w-full">
          <h2 class="heading relative text-2xl md:text-3xl uppercase font-etude font-medium text-primary text-balance mb-4 md:mb-8">{{ header?.title }}</h2>
          <div v-for="(item, index) in contacts" :key="index" class="flex items-center gap-4 mt-2">
            <img :src="getStrapiMedia(item?.icon.url)" class="w-6 h-6 text-primary-500" :alt="item.title" :title="item.title" />
            <a v-if="item?.link" :href="item?.link">{{ item.title }}</a>
            <span v-else class="text-base text-primary">{{ item.title }}</span>
          </div>
        </div>
        <div class="w-full max-h-[400px] overflow-hidden">
          <BaseAppYandexMap class="max-h-[400px] rounded-2xl overflow-hidden" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.map-section {
  position: relative;
}

.map-section:after {
  content: "";
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 52px;
  background-image: url("/images/line.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>