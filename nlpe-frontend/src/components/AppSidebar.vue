<template>
  <v-navigation-drawer v-model="layout.drawer" app floating color="grey-darken-4">
    <v-toolbar color="grey-darken-4">
      <v-btn color="primary" icon="mdi-rocket-launch"></v-btn>
      <v-toolbar-title>Data Browser</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-item link prepend-icon="mdi-home" base-color="primary" to="/"> Home </v-list-item>
      <v-list-subheader color="primary" class="text-body-1">Data analysis</v-list-subheader>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        link
        :prepend-icon="item.icon"
        base-color="primary"
        >{{ item.title }}</v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useLayoutStore } from '@/stores/LayoutStore'
// Drawer
const layout = useLayoutStore()

const items = [
  { title: 'Chart', icon: 'mdi-chart-line', path: '/datachart' },
  { title: 'Table', icon: 'mdi-table', path: '/datatable' }
]
</script>

<style scoped></style>
