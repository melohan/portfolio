<script setup>
import homeData from '.././assets/data/home.json'

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
  <div class="d-flex justify-content-center flex-column">
    <div class="p-2 ">
      <h1 class="text-uppercase">{{ title }}</h1>
    </div>
    <div class="p-2" v-for="(value, key) in homeData" :key="key">    
        {{ value }}
    </div>
  </div>
</template>
