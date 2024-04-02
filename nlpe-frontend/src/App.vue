<template>
  <component :is="layout">
    <router-view> </router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ErrorLayout from '@/layouts/ErrorLayout.vue'

const route = useRoute()

const layoutComponents = {
  default: DefaultLayout,
  error: ErrorLayout
}

const layout = computed(() => {
  // Default layout if none is specified
  const layoutType = route.meta.layout || 'default'
  return layoutComponents[layoutType] || DefaultLayout
})

//document.documentElement.style.backgroundColor = '#FF0000'
</script>
