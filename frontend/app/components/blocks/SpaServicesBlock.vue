<script setup>

const props = defineProps({
  header: Object,
  description: Object,
  services: {
    type: Array,
    required: true,
    default: () => [],
  }
})

const htmlDescription = computed(() => richTextToHtml(props.description))
console.log(props.services)
</script>

<template>
  <section class="relative pb-24 bg-white overflow-hidden">
    <div class="container">
      <div class="flex flex-col gap-2 mb-12">
        <h2 class="heading relative text-2xl md:text-3xl  font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="col-span-3 max-w-2xl text-base font-light" v-if="description" v-html="htmlDescription"></div>
      </div>
      <div class="grid grid-cols-2 gap-14">
        <simple-card
            v-for="card in services"
            :key="card.id"
            :data="card"
        />
      </div>
    </div>
  </section>
</template>