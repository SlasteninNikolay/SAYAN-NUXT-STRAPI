<template>
  <picture
      class="block"
      :class="[mode === 'rounded' ? 'rounded-2xl' : '']"
  >
    <source
        v-if="image?.url && !imageError"
        :srcset="getImageUrl(image.url)"
        media="(min-width: 1600px)"
    />
    <source
        v-if="image?.formats?.large?.url && !imageError"
        :srcset="getImageUrl(image.formats.large.url)"
        media="(min-width: 1200px)"
    />
    <source
        v-if="image?.formats?.medium?.url && !imageError"
        :srcset="getImageUrl(image.formats.medium.url)"
        media="(min-width: 992px)"
    />
    <source
        v-if="image?.formats?.small?.url && !imageError"
        :srcset="getImageUrl(image.formats.small.url)"
        media="(min-width: 768px)"
    />
    <img
        :src="getImageSrc"
        :alt="getAltText"
        :loading="loading"
        class="w-full h-full object-cover"
        :class="imgClass"
        @error="handleImageError"
        @load="handleImageLoad"
    />
  </picture>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    default: () => ({})
  },
  alt: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  mode: {
    type: String,
    default: ''
  }
})

const { public: { strapiUrl } } = useRuntimeConfig()
const imageError = ref(false)
const imageLoaded = ref(false)


const getImageUrl = (path) => {
  if (!path) return ''

  if (path.startsWith('http')) {
    return path
  }

  if (path.startsWith('/')) {
    return `${strapiUrl}${path}`
  }

  // Для относительных путей
  return `${strapiUrl}/${path}`
}

const getImageSrc = computed(() => {
  if (!props.image?.url || imageError.value) {
    return '/placeholder-image.jpg'
  }

  const imagePath = props.image.formats?.thumbnail?.url || props.image.url
  return getImageUrl(imagePath)
})

const getAltText = computed(() => {
  return props.alt || props.image?.alternativeText || props.image?.name || 'Image'
})

const handleImageError = () => {
  console.error('Failed to load image:', props.image?.url)
  imageError.value = true
}

const handleImageLoad = () => {
  imageLoaded.value = true
}
</script>