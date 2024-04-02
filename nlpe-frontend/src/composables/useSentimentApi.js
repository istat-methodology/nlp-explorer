import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

// Base URL from the .env file
const baseUrl = import.meta.env.VITE_API_SENTIMENT_URL

// Business logic to transform responseData
function transformData(responseData) {
  // Dynamically transform the data
  return responseData.reduce((acc, currentItem) => {
    Object.entries(currentItem).forEach(([key, value]) => {
      if (!acc[key]) {
        acc[key] = [] // Initialize the key if it doesn't exist
      }
      acc[key].push(value)
    })
    return acc
  }, {})
}

export function useGetDataset(type) {
  const apiUrl = `${baseUrl}/get_data?dataset=${type}`

  const data = ref({})
  const error = ref(null)
  const loading = ref(true)

  async function fetchData() {
    loading.value = true
    error.value = null

    try {
      const { data: responseData } = await useFetch(apiUrl).json()
      if (responseData.value) {
        data.value = transformData(responseData.value)
      }
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}

export function useFilterFrequencies(startDate, endDate) {
  const apiUrl = `${baseUrl}/filter_frequencies?start_date=${startDate}&end_date=${endDate}`

  const { isFetching, error, data, execute } = useFetch(apiUrl).json()

  const fetchData = async () => {
    await execute()
  }

  return { isFetching, error, data, fetchData }
}
