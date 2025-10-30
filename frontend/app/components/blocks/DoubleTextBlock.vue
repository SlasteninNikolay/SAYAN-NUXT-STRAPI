<template>
  <section class="w-full py-24 flex items-center">
    <div
        class="container mx-auto h-full grid gap-10"
        style="grid-template-columns: 2fr 1fr 2fr; align-items: center; height: 100%;"
    >
      <!-- Левая колонка -->
      <div class="flex flex-col gap-6 max-w-xl text-balance justify-self-end w-full">
        <p
            class="max-w-lg m-0 font-intro font-base text-dark"
            v-if="left_part"
            v-html="leftText"
        />
      </div>
      <!-- Центр с орнаментом или изображением -->
      <div>
        <base-app-image
            img-class="w-full max-w-lg object-cover opacity-20"
            :image="images"
            loading="lazy"
        />
      </div>
      <!-- Правая колонка -->
      <div class="flex justify-end text-balance">
        <p
            class="m-0 ms-auto max-w-lg font-intro font-base text-dark"
            v-if="right_part"
            v-html="rightText"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  images: [Array, Object, String], // зависит от вашего типа, тут гибко
  left_part: [Array, Object],
  right_part: [Array, Object],
})

const leftText = computed(() => props.left_part ? richTextToHtml(props.left_part) : "")
const rightText = computed(() => props.right_part ? richTextToHtml(props.right_part) : "")
</script>