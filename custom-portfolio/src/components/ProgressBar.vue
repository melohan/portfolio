<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <h4 class="small font-weight-bold">{{ name }} <span class="float-right">{{ value }}%</span></h4>
  <div class="progress mb-4">
    <div class="progress-bar bg-dark" role="progressbar" v-bind:style="{width: value + '%'}"
         v-bind:aria-valuenow="value" aria-valuemin="0"
         aria-valuemax="100"></div>
  </div>
</template>
