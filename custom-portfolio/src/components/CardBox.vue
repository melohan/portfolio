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
  <div class="icon-box">
    <div class="d-flex flex-column m-0 p-0">
      <div class="p-2">
        <div class="p-2"><h4 class="title"><a v-bind:href="projPath">{{ title }}</a></h4></div>
        <div class="p-2"><p class="description">{{ description }}</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-box {
  color: #1C1B22 !important;
  width: 17vw;
  margin: 2%;
}

.icon-box div {
  text-align: justify;
}

.icon-box .title {
  text-align: center;
}

</style>