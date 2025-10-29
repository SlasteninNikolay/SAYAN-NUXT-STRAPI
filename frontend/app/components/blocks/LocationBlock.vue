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
  <section class="relative py-24 bg-primary">
    <base-app-image class="location-background block absolute top-0 left-0 z-0 w-full h-full" img-class="object-top" :image="images" />
    <div class="container">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="heading relative text-[clamp(1.2rem,4vw,2rem)] uppercase font-medium text-white text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-base text-white font-light text-balance z-10" v-if="description" v-html="htmlDescription"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-background:after {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 20%, var(--color-primary) 100%);
  opacity: 0.6;
  z-index: 0;
}
</style>