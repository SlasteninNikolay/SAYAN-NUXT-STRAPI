<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="flex flex-col gap-6 border border-secondary rounded-3xl p-6">
    <div v-if="data?.images && data?.images.url">
      <base-app-image
          img-class="w-full max-h-[600px] object-cover object-bottom rounded-3xl"
          :image="data.images"
          loading="lazy"
          class="rounded-lg overflow-hidden"
      />
    </div>

    <h3 class="text-2xl font-bold mb-2 text-primary">{{ data.title }}</h3>

    <div class="text-base text-gray-700 mb-3">
      {{ data.text }}
    </div>
  </div>
</template>