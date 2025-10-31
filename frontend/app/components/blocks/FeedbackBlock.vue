<script setup>
const props = defineProps({
  header: Object,
  description: Object,
  form: Object,
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-24 bg-primary">
    <div class="container">
      <div class="grid grid-cols-2 gap-14">
        <div class="flex flex-col gap-4 mb-12">
          <h2 class="heading relative text-2xl md:text-3xl font-medium text-white text-balance">{{ header?.title }}</h2>
          <div class="text-base text-white/50 font-light text-balance" v-if="description" v-html="htmlDescription"></div>
        </div>
        <div>
          <contact-form />
        </div>
      </div>
    </div>
  </section>
</template>
