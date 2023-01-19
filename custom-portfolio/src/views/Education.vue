<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="app">
    <section class="page-section bg-section p-2">
      <h1>{{ title }}</h1>
    </section>
  </div>
</template>
