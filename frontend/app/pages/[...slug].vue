<template>
  <div class="h-full">
    <div v-if="error" class="error">
      <h2>Ошибка загрузки</h2>
      <p>{{ error }}</p>
      <button @click="loadData" class="retry-btn">Попробовать снова</button>
    </div>
    <div v-else-if="pageData">
      <block-manager :blocks="pageData.data[0].block || []" />
    </div>
    <div v-else class="page-not-found flex items-center justify-center h-full">
      <h2 class="3xl text-primary">Страница не найдена</h2>
    </div>
  </div>
</template>

<script setup>
import BlockManager from "~/components/BlockManager.vue";
import { usePageTransition } from '~/composables/usePageTransition'

const { startTransition, endTransition } = usePageTransition()
const route = useRoute()
const { find } = useStrapi()

const error = ref(null)
const pageData = ref(null)

const slug = computed(() => {
  return Array.isArray(route.params.slug)
    ? route.params.slug.join('/')
    : route.params.slug || 'home'
})

const locale = computed(() => {
  return route.query.locale || 'ru'
})

const loadData = async () => {
  try {
    error.value = null

    const result = await find('pages', {
      filters: { slug: slug.value },
      locale: locale.value,
      populate: [
        'block', 
        'block.images', 
        'block.header',
        'block.services',
        'block.contacts',
        'block.contacts.icon',
        'block.services.images',
        'block.form.name',
        'block.form.message',
        'block.form.phone',
        'block.form.accept_terms',
        'block.buttons.link',
        'block.cards', 
        'block.cards.icon', 
        'block.rooms', 
        'block.rooms.photos', 
        'block.rooms.button', 
        'block.rooms.features', 
        'block.rooms.features.icon', 
        'block.service',
        "block.service.image",
        "block.tabs",
        "block.tabs.photos",
        "block.tabs.buttons",
        "block.tabs.buttons.link",
        "block.gallery",
        "block.features"
      ],
    });

    pageData.value = result

    // SEO мета-теги
    if (result?.data?.[0]) {
      const page = result.data[0]
      const title = page.SEO?.metaTitle || page.title || 'LEGENDA Camps'
      const description = page.SEO?.metaDescription || 'Детский лагерь на Черном море'

      useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
      })
    }
  } catch (err) {
    console.error('Ошибка при загрузке:', err)
    error.value = err.message || 'Не удалось загрузить страницу'
  } finally {
    console.log('СКРЫТЬ loader');
    endTransition()
  }
}

onNuxtReady(() => {
  startTransition()
})

// Загружать при монтировании
onMounted(() => {
  setTimeout(() => {
    loadData()
  }, 600)
})

// Загружать при изменении slug
watch(() => route.params.slug, () => {
  loadData()
})

// Мета по умолчанию
useSeoMeta({
  title: 'Загрузка...',
  description: 'Страница загружается'
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.error, .not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
}

.retry-btn, .home-btn {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.retry-btn:hover, .home-btn:hover {
  background-color: #2980b9;
}
.not-found h2 {
  color: #e67e22;
  margin-bottom: 1rem;
}
.error h2 {
  color: #e74c3c;
  margin-bottom: 1rem;
}
</style>