<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectCreative, Grid } from 'swiper/modules';
import { useAttrs } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/grid';
import { useSlots } from 'vue';

const props = defineProps({
  gridMode: { type: Boolean, default: false },
});

const attrs = useAttrs();
const slots = useSlots();

function getSlides() {
  const vnodes = slots.default?.() || [];
  if (vnodes.length === 1 && Array.isArray(vnodes[0].children)) {
    return vnodes[0].children;
  }
  return vnodes;
}

import { computed } from 'vue';
const swiperOptions = computed(() => {
  const baseOptions = props.gridMode
      ? {
        modules: [Pagination, EffectCreative, Navigation, Grid],
        slidesPerView: 3,
        slidesPerColumn: 3,
        slidesPerGroup :3,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row'
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            grid: undefined,
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: 'row' },
          }
        },
        pagination: { clickable: true },
        effect: 'slide',
      } : {
        modules: [Pagination, EffectCreative, Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: { clickable: true },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
      }
      return { ...baseOptions, ...attrs };
  });
</script>

<template>
  <ClientOnly>
    <Swiper v-bind="swiperOptions"
            class="w-full"
    >
      <template v-for="(vnode, idx) in getSlides()" :key="idx">
        <SwiperSlide>
          <component :is="vnode" />
        </SwiperSlide>
      </template>
    </Swiper>
  </ClientOnly>
</template>