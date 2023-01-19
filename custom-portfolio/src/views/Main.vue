<script setup>
import { defineComponent } from 'vue'
import Home from './Home.vue'
import About from './About.vue'
import Education from './Education.vue'
import Experiences from './Education.vue'
import Skills from './Skills.vue'
import Realizations from './Realizations.vue'

// GSAP scroll animations
// ------------------------------------------


</script>

<template>
  <div id="app">
    <div class="section-container d-flex flex-column" >
      <Home title="Welcome to my portfolio!" />
      <About title="About me" />
      <Education title="Education" />
      <Experiences title="Experiences" />
      <Skills title="Skills" />
      <Realizations title="My realizations" />
    </div>
  </div>
</template>
