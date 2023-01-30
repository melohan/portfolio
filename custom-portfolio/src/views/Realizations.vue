<script setup>

import {ref, onMounted, onBeforeUnmount} from 'vue'
  import {gsap} from "gsap";

  import CardBox from '@/components/CardBox.vue'
  import realizationData from '@/assets/data/realization.json'

  // Props
  // ------------------------------------------------------------------------
  defineProps({
    title: {
      type: String,
      required: true
    }
  })

  //  References
  // ------------------------------------------------------------------------
  const realizationSection = ref(null);
  const realizationCardContainer = ref(null);
  const realizationTitleContainer = ref(null);

  // Animation definition
  // ------------------------------------------------------------------------
  const returnToPosition = {duration: 1, y: 0, ease: "power3.out"}

  // onMounted
  // ------------------------------------------------------------------------
  onMounted(() => {

    // Animations
    // -----------------------
    const currentSectionTimeline = gsap.timeline({paused: true});
    currentSectionTimeline.fromTo(realizationTitleContainer.value, {y: -900}, returnToPosition);
    currentSectionTimeline.fromTo(realizationCardContainer.value, {y: +900}, returnToPosition);

    // EventListener on Scroll
    // -----------------------
    window.addEventListener('scroll', () => {
      if (realizationSection.value.getBoundingClientRect().left < window.innerWidth) {
        currentSectionTimeline.play()
      }
    })
  });

// BeforeMount (destroy the EventListener on Scroll)
// ------------------------------------------------------------------------
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <section id="services" class="services" ref="realizationSection">
    <div class="container">

      <div class="section-title" ref="realizationTitleContainer">
        <span>[{{ title }}]</span>
        <h2>{{ title }}</h2>
        <p>Here are some of my realizations</p>
      </div>

      <div class="d-flex flex-row" ref="realizationCardContainer">
        <div v-for="(real, key) in realizationData" :key="key" class="d-flex justify-content-between">
          <CardBox v-bind:title="real.title"
                   v-bind:description="real.description"
                   v-bind:projPath="real.link"
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

  .section-title h2 {
    opacity: 0;
  }
</style>