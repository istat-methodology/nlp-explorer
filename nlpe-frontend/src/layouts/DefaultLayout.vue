<template>
  <v-layout>
    <app-sidebar />
    <app-header />
    <v-main>
      <slot></slot>
    </v-main>
    <app-footer />
  </v-layout>
</template>

<script setup></script>
