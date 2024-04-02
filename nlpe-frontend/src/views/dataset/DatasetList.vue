<template>
  <div>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Ops, something went wrong!</div>
    <div v-else>
      <v-card>
        <v-card-actions>
          <v-btn @click.prevent="navigateHome">Go to home</v-btn>
        </v-card-actions>
        <ul>
          <v-card>
            <li v-for="(topic, index) in data" :key="index">
              {{ topic.desc }}

              <ul>
                <li v-for="(dataset, index) in topic.datasets" :key="index" @click="navigateDetail(dataset.id)">
                  {{ dataset.desc }}
                </li>
              </ul>


            </li>

          </v-card>
        </ul>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useGetDataSetList } from '@/composables/useJsonstatApi'

const router = useRouter()

const navigateHome = () => router.push({ name: 'Home' })
const navigateDetail = (id) => router.push({ name: 'DatasetDetail', params: { id } })

const { isFetching, error, data } = useGetDataSetList()

</script>
