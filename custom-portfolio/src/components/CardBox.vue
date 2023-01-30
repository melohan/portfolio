<script setup>

defineProps({
  projPath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="icon-box cardBox">
    <div class="d-flex flex-column m-0 p-0">
      <div class="p-1">
        <div class="p-1 m-0"><h4 class="title"><a v-bind:href="projPath">{{ title }}</a></h4></div>
        <div class="p-1 m-0"><p class="description">{{ description }}</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-box {
  color: #1C1B22 !important;
  width: 15vw;
  margin: 2%;
}

.icon-box div {
  text-align: justify;
}

.icon-box .title {
  text-align: center;
}

</style>