<template>
  <section class="relative mt-28 pb-24 overflow-hidden">
    <div class="container relative">
      <object class="absolute w-60 top-0 translate-y-1/4 left-1/2 -translate-x-1/2 -z-10 opacity-20" type="image/svg+xml" data="/images/svg/pane.svg"></object>
      <div class="grid grid-cols-2 gap-28">
        <div>
          <h2 class="heading relative text-3xl max-w-[480px] uppercase font-medium text-primary text-balance">{{ header?.title }}</h2>
          <div class="max-w-[500px] mt-8 text-base font-intro text-primary" v-if="description" v-html="htmlDescription"></div>
        </div>
        <!--   /left part    -->
        <div>
          <base-app-image
              img-class="w-full max-h-[400px] object-cover object-bottom rounded-lg"
              :image="images[0]"
              loading="lazy"
          />
        </div>
        <!--   /right part    -->
      </div>
      <!--   /info   -->
      <div class="grid gap-10 mt-28" :class="`grid-cols-${cards.length}`">
        <app-card
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :content="card.content"
            :icon-url="card.icon.url"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
  import AppCard from "~/components/base/AppCard.vue";

  const props = defineProps({
    id: Number,
    header: Object,
    description: Object,
    images: Array,
    cards: Array,
  })

  const htmlDescription = computed(() => richTextToHtml(props.description))
</script>