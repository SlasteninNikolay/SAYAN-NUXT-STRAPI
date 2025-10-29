<script setup>
import AppTabs from "~/components/base/AppTabs.vue";
import AppTab from "~/components/base/AppTab.vue";
import AppImage from "~/components/base/AppImage.vue";
import AppButton from "~/components/base/AppButton.vue";
import AppSliderImage from "~/components/base/AppSliderImage.vue";
import AppSlider from "~/components/base/AppSlider.vue";

const props = defineProps({
  header: Object,
  description: Object,
  tabs: {
    type: Array,
    required: true,
    default: () => ([]),
  }
})

const htmlDescription = computed(() => richTextToHtml(props.description))

</script>

<template>
  <section class="relative py-24 bg-white">
    <div class="container">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="heading relative text-2xl uppercase font-etude font-medium text-primary text-balance">{{ header?.title }}</h2>
        <div class="max-w-2xl text-base font-light" v-if="description" v-html="htmlDescription"></div>
      </div>
      <app-tabs>
        <app-tab
            v-for="(tab, index) in tabs"
            :key="index"
            :label="tab?.label"
            :slug="tab?.slug"
        >
          <div class="grid grid-cols-2 gap-10">
            <div class="h-full">
              <app-slider>
                <app-image
                    v-for="photo in tab.photos"
                    :key="photo.id"
                    :image="photo"
                    img-class="w-full min-h-[380px] max-h-[480px] border-[10px] border-white rounded-2xl object-cover object-bottom border"
                />
              </app-slider>
            </div>
            <div class="h-full py-4">
              <div v-html="richTextToHtml(tab?.content)" />

              <base-app-button
                  :key="tab?.buttons?.id || index"
                  :url="tab?.buttons?.link?.href"
                  class="mt-10 py-3 min-w-60"
                  :type="tab?.buttons?.theme"
                  size="small"
                  :title="tab?.buttons?.link?.label"
                  :aria-label="tab?.buttons?.link?.label"
              />
            </div>
          </div>
        </app-tab>
      </app-tabs>
    </div>
  </section>
</template>