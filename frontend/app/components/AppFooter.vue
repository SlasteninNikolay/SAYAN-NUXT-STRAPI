<script setup>
const route = useRoute()

const locale = computed(() => {
  return route.query.locale || 'ru'
})

const { menuData, isLoading, error, errorMessage, refresh } = useMenuData(locale)

// Функция для получения всех ссылок в одном плоском массиве
const flatLinks = computed(() => {
  const links = [];
  if (Array.isArray(menuData.value)) {
    menuData.value.forEach((item) => {
      if (item.__component === 'menu.ssylka') {
        links.push({
          id: item.id,
          url: item.url,
          title: item.title,
        });
      } else if (item.__component === 'menu.vypadayushhee-menyu' && item.sections) {
        item.sections.forEach(section => {
          section.links?.forEach(link => {
            links.push({
              id: link.id,
              url: link.url,
              title: link.title,
            });
          });
        });
      }
    });
  }
  return links;
});

// Функция для деления на N колонок
function splitArray(array, parts) {
  const result = Array.from({ length: parts }, () => []);
  array.forEach((item, idx) => {
    result[idx % parts].push(item);
  });
  return result;
}

const columns = computed(() => splitArray(flatLinks.value, 2));
</script>

<template>
  <footer class="w-full bg-primary text-secondary">
    <div class="container mx-auto py-16 px-4">
      <div class="grid grid-cols-3">
        <div class="flex flex-col items-start justify-center w-full">
          <div class="flex flex-col items-start justify-center w-full mb-4">
            <NuxtLink
                to="/">
              <img
                  src="/icons/logo-main-white.svg"
                  alt=""
                  width="211"
                  height="44"
                  class="shrink-0"
                  loading="lazy"
                  decoding="async"
              />
            </NuxtLink>
            <p class="mt-4 text-sm text-secondary/50 text-center text-balance">г. Саяногорск, Центральный мкр.,50</p>
          </div>
          <div class="mt-auto text-start">
            <p class="px-0 mx-0 mb-0"><a class="text-xl" href="tel:+79999999999">+7 (999) 999 99 99</a></p>
            <p class="px-0 mx-0 mb-0"><a class="underline" href="mailto:sayan@slavyanka-hotels.ru">sayan@slavyanka-hotels.ru</a> </p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <ul class="gap-3" v-for="(col, idx) in columns" :key="idx">
            <li v-for="item in col" :key="item?.id">
              <NuxtLink
                  :to="item?.url"
                  class="block px-3 py-2 text-xl text-secondary hover:text-secondary-300 hover:transition-colors duration-200"
              >{{ item?.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="ms-16">
          <div class="mt-auto flex flex-col items-start gap-3 justify-center w-full">
            <NuxtLink class="block px-3 py-2 text-secondary/80 underline hover:text-secondary-300 hover:transition-colors duration-200" to="/">Правила проживания</NuxtLink>
            <NuxtLink class="block px-3 py-2 text-secondary/80 underline hover:text-secondary-300 hover:transition-colors duration-200" to="/">Правовая информация</NuxtLink>
            <NuxtLink class="block px-3 py-2 text-secondary/80 underline hover:text-secondary-300 hover:transition-colors duration-200" to="/">Политика конфиденциальности</NuxtLink>
            <NuxtLink class="block px-3 py-2 text-secondary/80 underline hover:text-secondary-300 hover:transition-colors duration-200" to="/">Программа лояльности</NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>