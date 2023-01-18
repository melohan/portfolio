<script setup>
import { defineComponent } from 'vue'
import homeData from '../assets/data/home.json'

const homeContent = homeData;
</script>

<template>
  <div id="app">
     <div v-for="(value, key) in homeData" :key="key">
        {{ key }} : {{ value }}
    </div>
  </div>
</template>
