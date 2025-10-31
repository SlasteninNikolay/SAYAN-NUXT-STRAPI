<script setup>

const props = defineProps({
  header: Object,
  description: Object,
  service: {
    type: Array,
    required: true,
    default: () => [],
  }
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-28 overflow-hidden">
    <object class="absolute top-0 right-0 h-full z-0" type="image/svg+xml" data="/images/svg/route-3.svg"></object>
    <div class="container">
      <div class="grid grid-cols-2 mb-14 gap-14">
        <h2 class="heading relative text-2xl md:text-3xl font-etude font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-lg font-medium text-balance" v-if="description" v-html="htmlDescription"></div>
      </div>
      <div class="grid grid-cols-4 grid-rows-2 gap-6 py-6">
        <service-card
            class="service-card border-white border-[10px] rounded-2xl"
            v-for="(item, index) in service"
            :key="index"
            :service="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading {
  z-index: 1;
}
.heading:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0%);
  width: 60%;
  height: 100%;
  background: url("/images/svg/line-3.svg") no-repeat;
  background-size: contain;
  z-index: -1;
}

.service-card {
  position: relative;
  overflow: hidden;
}

.service-card:after {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, var(--color-primary), transparent);
}

.service-card:nth-child(5n+3),
.service-card:nth-child(5n+4),
.service-card:nth-child(5n+5) {
  @apply col-span-2;
}
</style>