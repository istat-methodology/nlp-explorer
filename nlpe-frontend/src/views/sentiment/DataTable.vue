<template>
  <div>
    <button @click="navigateList">Back to List</button>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Ops, something went wrong!</div>
    <div v-else>
      Loaded data!!
      <h2 v-if="data">{{ data.size }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetDataset } from '@/composables/useJsonstatApi'

const route = useRoute()
const router = useRouter()
const datasetId = route.params.id

const { isFetching, error, data } = useGetDataset(datasetId)

const navigateList = () => router.push({ name: 'DatasetList' })
</script>
