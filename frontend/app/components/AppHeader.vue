<template>
<header class="w-full">
  <app-menu :menu-data="menuData" />
</header>
</template>
<script setup>
const route = useRoute()

const locale = computed(() => {
  return route.query.locale || 'ru'
})

const { menuData, isLoading, error, errorMessage, refresh } = useMenuData(locale)
</script>
