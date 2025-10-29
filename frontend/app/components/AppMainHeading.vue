<template>
  <div class="w-full">
      <div>
        <h1 class="main-heading text-6xl leading-[1.4] font-intro font-medium text-white text-balance">
          <span v-if="firstWord" class="first-word">{{ firstWord }}</span>
          {{ restOfTitle }}
        </h1>
      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
})

const firstWord = computed(() => {
  if (!props.title) return ''
  const words = props.title.trim().split(' ')
  return words[0]
})

const restOfTitle = computed(() => {
  if (!props.title) return ''
  const words = props.title.trim().split(' ')
  return words.length > 1 ? words.slice(1).join(' ') : ''
})
</script>