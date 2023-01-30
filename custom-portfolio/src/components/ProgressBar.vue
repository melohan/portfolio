<template>
  <h4 class="small font-weight-bold">{{ name }} <span class="float-right">{{ value }}%</span></h4>
  <div class="progress mb-4" >
    <div ref="progressBar" class="progress-bar bg-dark" role="progressbar"
         v-bind:aria-valuenow="value" aria-valuemin="0"
         aria-valuemax="100"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {gsap} from "gsap";

// Props
// -------------------------------------------
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})


//  References
// -------------------------------------------
const progressBar = ref(null)

const intValue = parseInt(props.value);

onMounted(() => {

  const tl3 = gsap.timeline({paused: true});
  tl3.to(progressBar.value, {
    width: `${intValue}%`,
    duration: 1
  });

  window.addEventListener('scroll', () => {
    if (progressBar.value.getBoundingClientRect().left < window.innerWidth) {
     tl3.play()
    }
  })
});


</script>