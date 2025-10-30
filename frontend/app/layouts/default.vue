<template>
  <div>
    <transition name="overlay">
    </transition>
    <transition name="overlay">
      <div v-if="isTransitioning" class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary">
        <div class="relative w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
              class="absolute left-0 top-0 h-full bg-secondary-500"
              :style="{ width: Math.round(loadingProgress) + '%' }"
              style="transition: width .1s"
          ></div>
        </div>
      </div>
    </transition>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <AppFooter class="mt-auto" />
    </div>
  </div>
</template>

<script setup>
import { usePageTransition } from '~/composables/usePageTransition'
import { useNuxtApp } from '#app'

const { isTransitioning, loadingProgress, startTransition, endTransition } = usePageTransition()
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => startTransition())
nuxtApp.hook('page:finish', () => endTransition())
</script>

<style scoped>

.overlay-leave-active {
  transition: opacity 1.5s;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to, .overlay-leave-from {
  opacity: 1;
}
</style>