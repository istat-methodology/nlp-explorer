<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card :loading="loading" title="Chart">
          <v-card-text>
            <v-select :items="dataKeys" v-model="selectedKey" label="Select data series"></v-select>
            <app-line-chart v-if="chartData" :chartData="chartData" style="min-height: 400px" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useGetDataset } from '@/composables/useSentimentApi'

const datasetType = 'sentiment'

// Data fetching
const { data, loading, fetchData } = useGetDataset(datasetType)
fetchData()

// Build select keys and default selected key
const selectedKey = ref(null)

// Dynamically determine the keys for the select dropdown, excluding 'date'
const dataKeys = computed(() => {
  return data.value ? Object.keys(data.value).filter((key) => key !== 'date') : []
})

// Watch for changes in selectedKey to provide a default value when data is loaded
watch(data, (newValue) => {
  if (newValue && dataKeys.value.length > 0 && !selectedKey.value) {
    selectedKey.value = dataKeys.value[0] // Default to the first data series
  }
})

// Formatting the chart data based on the selected key
const chartData = computed(() => {
  if (!selectedKey.value || !data.value) return { datasets: [] }

  return {
    labels: data.value.date,
    datasets: [
      {
        label: selectedKey.value,
        data: data.value[selectedKey.value] || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        pointRadius: 2, // Adjust point size
        borderWidth: 2 // Line thickness
      }
    ]
  }
})
</script>

<script scoped>
/**
 * Dynamically calculate chart min-height
 */
</script>
