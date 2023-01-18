<script setup>
import { defineComponent } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experiences from './components/Education.vue'
import Skills from './components/Skills.vue'
import Realizations from './components/Realizations.vue'
</script>

<template>
  <div id="app">
     <Home title="Welcome to my portfolio!" />
     <About title="About me" />
     <Education title="Education" />
     <Experiences title="Experiences" />
     <Skills title="Skills" />
     <Realizations title="My realizations" />
  </div>
</template>
