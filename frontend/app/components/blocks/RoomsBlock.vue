<script setup>
import RoomCard from "~/components/RoomCard.vue";

const props = defineProps({
    header: Object,
    description: Object,
    rooms: {
       type: Array,
       required: true,
       default: () => [],
    }
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-24 bg-white overflow-hidden">
    <div class="container">
      <div class="flex flex-col gap-2 mb-12">
        <h2 class="heading relative text-[clamp(1.2rem,4vw,2rem)] uppercase font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="col-span-3 max-w-2xl text-base font-light" v-if="description" v-html="htmlDescription"></div>
      </div>
      <div class="grid grid-cols-1 gap-14">
        <room-card
            v-for="(room, index) in rooms"
            :key="index"
            :room="room"
        />
      </div>
    </div>
  </section>
</template>