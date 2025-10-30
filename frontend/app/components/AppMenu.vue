<script setup>
const props = defineProps({
  menuData: {
    type: Array,
    default: () => []
  }
});

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const isMobileMenuOpen = ref(false);

const logo = computed(() => {
  if (!props.menuData || !Array.isArray(props.menuData)) return null;
  
  const item = props.menuData.find(item => item.__component === 'menu.logo');
  if (!item?.logo?.url) return null;

  return {
    url: item.logo.url,
    alt: item.logo.alternativeText || 'Логотип',
    width: item.logo.width || 160,
    height: item.logo.height || 40
  };
});

const openSubMenus = ref([])

const isSubMenuOpen = (menuId) => {
  return openSubMenus.value.includes(menuId)
}

const toggleSubMenu = (menuId) => {
  if (openSubMenus.value.includes(menuId)) {
    openSubMenus.value = openSubMenus.value.filter(id => id !== menuId)
  } else {
    openSubMenus.value.push(menuId)
  }
}

// Функция закрытия мобильного меню при клике на ссылку
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openSubMenus.value = []
}

const openMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  isMobileMenuOpen.value ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'initial'
}

const isHeaderVisible = ref(true)
const lastScrollPosition = ref(0)
const scrollThreshold = 20
let atTop = ref(true)

const handleNavbarOnScroll = () => {
  const currentScrollPosition = window.scrollY
  atTop.value = currentScrollPosition < 74

  if (atTop.value) {
    isHeaderVisible.value = true
    lastScrollPosition.value = currentScrollPosition
    return
  }

  const scrollingDown = currentScrollPosition > lastScrollPosition.value

  if (scrollingDown) {
    isHeaderVisible.value = false
  } else if (lastScrollPosition.value - currentScrollPosition > scrollThreshold) {
    isHeaderVisible.value = true
  }

  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', throttle(handleNavbarOnScroll, 50))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleNavbarOnScroll)})

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

</script>

<template>
  <nav
      v-if="menuData && Array.isArray(menuData) && menuData.length > 0"
      class="fixed top-0 left-0 w-full h-[74px] transition-all duration-500 z-50"
      :class="[
      'fixed top-0 w-full transition-all ease-in-out',
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="container-full mx-auto px-4 transition-all duration-300"
         :class="[atTop ? 'bg-primary' : 'bg-primary']"
    >
      <!-- Десктопное меню -->
      <div class="container hidden lg:flex items-center justify-between py-2"
      >
        <!-- Логотип -->
        <NuxtLink
            v-if="logo"
            to="/"
            class="mr-4"
        >
          <img
              :src="`${strapiUrl}${logo?.url || ''}`"
              :alt="logo?.alt || 'Логотип'"
              :width="logo?.width || 160"
              :height="logo?.height || 40"
              class="h-12 w-auto"
              loading="lazy"
              decoding="async"
          />
        </NuxtLink>

        <!-- Основные пункты меню -->
        <ul class="flex items-center space-x-6">
          <li v-for="item in menuData" :key="item.id" class="group relative">
            <template v-if="item.__component !== 'menu.logo' && item.__component !== 'menu.knopka'">
              <!-- Обычная ссылка -->
              <NuxtLink
                  v-if="item.__component === 'menu.ssylka'"
                  :to="item.url"
                  class="px-3 py-2 text-secondary hover:text-secondary-300 hover:transition-colors duration-200"
              >
                {{ item.title }}
              </NuxtLink>

              <!-- Выпадающее меню -->
              <div v-else-if="item.__component === 'menu.vypadayushhee-menyu'" class="relative">
                <button
                    class="flex items-center px-3 py-2 text-secondary font-medium hover:text-secondary-300 hover:transition-colors duration-200"
                >
                  {{ item.title }}
                  <svg
                      class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <ul
                    class="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <li v-for="section in item.sections" :key="section.id" class="px-2 py-1">
                    <ul class="space-y-1">
                      <li v-for="link in section.links" :key="link.id">
                        <NuxtLink
                            :to="link.url"
                            class="block px-3 py-2 text-sm text-secondary font-medium hover:text-secondary-300 transition-colors duration-200"
                        >
                          {{ link.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </ul>

        <!-- Кнопки -->
        <div class="flex flex-col items-start space-x-4">
          <div class="flex items-center space-x-4">
            <component
                v-for="item in (menuData || []).filter(item => item.__component === 'menu.knopka')"
                :key="item.id"
                :is="item.type === 'link' ? 'a' : 'button'"
                :href="item.type === 'link' ? item.url : undefined"
                type="button"
                class="btn-fill-up relative overflow-hidden inline-flex items-center px-4 py-2"
                :class="[
      item.type === 'primary'
        ? 'bg-primary-500 text-white rounded-2xl border border-primary transition-all duration-300 group hover:border-secondary-600'
        : 'bg-transparent text-secondary hover:text-secondary-300 hover:transition-colors duration-200',
    ]"
                @click="item.type !== 'link' && typeof item.onClick === 'function' ? item.onClick : null"
            >
              <span class="absolute inset-x-0 bottom-0 h-0 bg-secondary-600 transition-all duration-300 group-hover:h-full"></span>
              <Icon
                  name="solar:phone-broken"
                  class="relative me-2 z-10 text-xl transition-colors duration-300"
                  :class="item.type === 'primary' ? 'text-white' : 'text-secondary group-hover:text-white'"
              />
              <span class="text-lg relative z-10 transition-colors duration-300 group-hover:text-white">{{ item.title }}</span>
            </component>
          </div>
          <span class="text-sm text-secondary">г. Саяногорск, Центральный мкр.,50</span>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div class="container lg:hidden flex items-center justify-between py-4">
        <!-- Логотип -->
        <NuxtLink
            v-if="logo"
            to="/"
        >
          <img
              :src="`${strapiUrl}${logo?.url || ''}`"
              :alt="logo?.alt || 'Логотип'"
              :width="logo?.width || 160"
              :height="logo?.height || 40"
              class="h-8 w-auto"
              loading="lazy"
              decoding="async"
          />
        </NuxtLink>

        <!-- Бургер-кнопка -->
        <button
            @click="openMobileMenu"
            class="p-2 rounded-md text-primary-500 hover:text-primary-700 hover:bg-primary-50 focus:outline-none"
        >
          <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Мобильное меню (раскрывающееся) -->
      <div
          v-if="isMobileMenuOpen"
          class="lg:hidden pb-4 transition-all duration-300 h-svh overflow-y-scroll"
      >
        <ul class="space-y-2 pb-14">
          <li v-for="item in menuData" :key="item.id">
            <template v-if="item.__component !== 'menu.logo'">
              <!-- Обычная ссылка -->
              <a
                  v-if="item.__component === 'menu.ssylka'"
                  :href="item.url"
                  class="block px-0 py-2 text-primary-500 hover:text-primary-700 hover:bg-primary-50 rounded transition-colors duration-200"
              >
                {{ item.title }}
              </a>

              <!-- Выпадающее меню -->
              <div v-else-if="item.__component === 'menu.vypadayushhee-menyu'">
                <button
                    @click="toggleSubMenu(item.id)"
                    class="flex items-center justify-between w-full py-2 text-primary-500 hover:text-primary-700 hover:bg-primary-50 rounded transition-colors duration-200"
                >
                  {{ item.title }}
                  <svg
                      :class="['w-4 h-4 ml-1 transition-transform duration-200',
                isSubMenuOpen(item.id) ? 'rotate-180' : '']"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <div
                    class="overflow-hidden transition-all duration-300 ease-in-out"
                    :class="isSubMenuOpen(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
                >
                  <ul class="pl-4 mt-1 space-y-1">
                    <li v-for="section in item.sections" :key="section.id">
                      <ul class="space-y-1">
                        <li v-for="link in section.links" :key="link.id">
                          <a
                              :href="link.url"
                              class="block px-3 py-2 text-sm text-primary-500 hover:bg-primary-50 hover:text-primary-700 rounded transition-colors duration-200"
                              @click="closeMobileMenu"
                          >
                            {{ link.title }}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Кнопка -->
              <a
                  v-else-if="item.__component === 'menu.knopka'"
                  :href="item.url"
                  :class="[
                  `flex items-center gap-1 py-2 rounded transition-colors duration-200`,
                  item.type === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-primary-500 hover:bg-gray-300'
                ]"
              >
                <Icon
                    name="solar:phone-broken"
                    class="text-xl transition-colors duration-200"
                    :class="item.type === 'primary' ? 'text-white' : 'text-primary-500 group-hover:text-white'"
                />&nbsp;{{ item.title }}
              </a>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.my-icon :deep(path) {
  fill: currentColor;
}
</style>
