import { useFetch } from '@vueuse/core'

// Base URL from the .env file
const baseUrl = import.meta.env.VITE_API_URL

export function useGetDataSetList() {
  const apiUrl = `${baseUrl}/getDatasetList?lang=en`

  const { isFetching, error, data } = useFetch(apiUrl).json()

  return { isFetching, error, data }
}

export function useGetDataset(id) {
  const apiUrl = `${baseUrl}/getDataset?id=${id}`
  const { isFetching, error, data, execute } = useFetch(apiUrl).json()

  const fetchData = async () => {
    await execute()
  }

  return { isFetching, error, data, fetchData }
}
