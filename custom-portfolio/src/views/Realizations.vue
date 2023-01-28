<script setup>

import CardBox from '@/components/CardBox.vue'
import realizationData from '@/assets/data/realization.json'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <span>{{ title }}</span>
        <h2>{{ title }}</h2>
        <p>Here are some of my realizations</p>
      </div>

      <div class="d-flex flex-row">
        <div v-for="(r, key) in realizationData" :key="key" class="d-flex justify-content-between">
          <CardBox v-bind:title="r.title"
                   v-bind:description="r.description"
                   v-bind:projPath="r.link"
          />
        </div>
      </div>

    </div>
  </section><!-- End My Services Section -->
</template>

<style scoped>
.services .section-title h2 {
  color: #ffb727;
  font-weight: bold;
}
</style>