<script setup>

const props = defineProps({
  header: Object,
  description: Object,
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-24 overflow-hidden">
    <div class="map-section container">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="heading relative text-2xl uppercase font-etude font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-base font-light" v-if="description" v-html="htmlDescription"></div>
      </div>
      <div class="w-full border-[10px] border-white rounded-2xl overflow-hidden">
        <BaseAppYandexMap class="rounded-2xl" />
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
  height: 50px;
  background-image: url("/images/line.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>