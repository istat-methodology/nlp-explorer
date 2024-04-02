<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="6">
        <v-card
          :title="`Title for Card  ${n}`"
          :subtitle="`Subtitle for Card ${n}`"
          :text="`I am the Card ${n}`"
        >
          <v-card-actions>
            <v-btn @click.prevent="navigateDataSets" :text="`Go to datasets ${n}`"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const navigateDataSets = () => router.push({ name: 'DatasetList' })
</script>
