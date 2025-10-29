<template>
  <div>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Загрузка данных...</p>
    </div>

    <div v-else-if="error" class="error">
      <h2>Ошибка загрузки</h2>
      <p>{{ error }}</p>
      <button @click="loadData" class="retry-btn">Попробовать снова</button>
    </div>

    <div v-else-if="pageData && pageData.data && pageData.data.length > 0">
      <block-manager :blocks="pageData.data[0].block || []" />
    </div>

    <div v-else class="not-found">
      <h2>Страница не найдена</h2>
      <p>Страница с таким адресом не существует.</p>
    </div>
  </div>
</template>

<script setup>
import BlockManager from "~/components/BlockManager.vue";

const route = useRoute()
const { find } = useStrapi()

// Состояния
const loading = ref(true)
const error = ref(null)
const pageData = ref(null)

// Получаем slug и locale
const slug = computed(() => {
  return Array.isArray(route.params.slug)
      ? route.params.slug.join('/')
      : route.params.slug || 'home'
})

const locale = computed(() => {
  return route.query.locale || 'ru'
})

// Функция загрузки данных
const loadData = async () => {
  try {
    loading.value = true
    error.value = null

    const result = await find('pages', {
      filters: { slug: slug.value },
      locale: locale.value,
      populate: ['block', 'block.images', 'block.header', 'block.cards', 'block.cards.icon', 'block.rooms', 'block.rooms.photos', 'block.rooms.button', 'block.rooms.features', 'block.rooms.features.icon', 'block.service', "block.service.image", "block.tabs", "block.tabs.photos", "block.tabs.buttons", "block.tabs.buttons.link", "block.gallery", "block.features"],
    });

    pageData.value = result

    console.log(result)

    // Обновляем мета-теги
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
    loading.value = false
  }
}

// Загружаем данные при монтировании компонента
onMounted(() => {
  loadData()
})

// Отслеживаем изменения маршрута
watch(() => route.params.slug, () => {
  loadData()
})

// Устанавливаем мета-теги по умолчанию
useSeoMeta({
  title: 'Загрузка...',
  description: 'Страница загружается'
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.loading, .error, .not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error h2, .not-found h2 {
  color: #e74c3c;
  margin-bottom: 1rem;
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

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
}

.not-found h2 {
  color: #e67e22;
  margin-bottom: 1rem;
}
</style>