<script setup>
import { defineComponent } from 'vue'
import homeData from '../assets/data/home.json'

// Props
// -------------------------------------------
defineProps({
  title: {
    type: String,
    required: true
  }
})

// Load data for this page
// -------------------------------------------
const homeContent = homeData;

</script>

<template>
  <section class="page-section bg-dark p-2">
    <h1>{{ title }}</h1>
    <div v-for="(value, key) in homeData" :key="key">
      {{ key }} : {{ value }}
    </div>
  </section>
</template>
