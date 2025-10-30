<template>
  <div>
    <component
        v-for="(block, index) in blocks"
        :key="getBlockKey(block, index)"
        :is="loadBlockComponent(block.__component)"
        v-bind="getBlockProps(block)"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})

const getBlockKey = (block, index) => {
  return block.id ? `block-${block.id}` : `index-${index}`
}

const getBlockProps = (block) => {
  const { __component, ...rest } = block
  return rest
}

const loadBlockComponent = (componentType) => {
  const componentMap = {
    'page.pervyj-ekran': defineAsyncComponent(() =>
        import('@/components/blocks/HeroBlock.vue')
    ),
    'page.info-blok': defineAsyncComponent(() =>
      import('@/components/blocks/InfoBlock.vue')
    ),
    'page.blok-o-lokaczii': defineAsyncComponent(() =>
        import('@/components/blocks/LocationBlock.vue')
    ),
    'page.nomera': defineAsyncComponent(() =>
        import('@/components/blocks/RoomsBlock.vue')
    ),
      'page.blok-restoran': defineAsyncComponent(() =>
      import('@/components/blocks/RestaurantBlock.vue')
    ),
    'page.blok-organizacziya-meropriyatij': defineAsyncComponent(() =>
        import('@/components/blocks/EventsBlock.vue')
    ),
    'page.blok-uchebnye-korpusa': defineAsyncComponent(() =>
        import('@/components/blocks/LecturesBlock.vue')
    ),
    'page.blok-s-kartoj': defineAsyncComponent(() =>
        import('@/components/blocks/MapBlock.vue')
    ),
    'page.pervyj-ekran-malyj': defineAsyncComponent(() =>
        import('@/components/blocks/HeroMinBlock.vue')
    ),
    'page.blok-dvuhkolonochnyj-tekst': defineAsyncComponent(() =>
        import('@/components/blocks/DoubleTextBlock.vue')
    ),
    'page.blok-tekst-s-kartinkoj': defineAsyncComponent(() =>
        import('@/components/blocks/TextWithBackBlock.vue')
    ),
    'page.blok-obratnaya-svyaz': defineAsyncComponent(() =>
        import('@/components/blocks/FeedbackBlock.vue')
    ),
    'page.blok-spa-uslug': defineAsyncComponent(() =>
        import('@/components/blocks/SpaServicesBlock.vue')
    ),
    'page.blok-s-kontaktami': defineAsyncComponent(() =>
      import('@/components/blocks/ContactsBlock.vue')
  ),
  }
  return componentMap[componentType] || null
}
</script>