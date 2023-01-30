<script setup>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Resume from './views/Resume.vue'
import Skills from './views/Skills.vue'
import Realizations from './views/Realizations.vue'

import {ref, shallowRef, onMounted, onBeforeUnmount} from 'vue'

import {gsap} from "gsap";


onMounted(() => {
  let sections = gsap.utils.toArray(".panel");
  let container = document.querySelector("#main-container")

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });
})

</script>

<template>
  <div id="app">
    <div id="main-container">
      <div class="panel bg-dark">
        <Home title="Welcome"/>
      </div>
      <div class="panel bg-light">
        <About title="About me"/>
      </div>
      <div class="panel bg-dark">
        <Resume title="My resume"/>
      </div>
      <div class="panel bg-light">
        <Skills title="Skills"/>
      </div>
      <div class="panel bg-dark">
        <Realizations title="Realizations"/>
      </div>
    </div>
  </div>
</template>

<style scoped>


body {
  color: #202020 !important;
  font-family: "Satisfy", serif !important;
}

.sub-container {
  width: 80vw;
  height: 90vh;
}


::-webkit-scrollbar {
  width: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden; /* Hide scrollbars */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overscroll-behavior: none;
  height: 100vh;
}

#main-container {
  overscroll-behavior: none;
  height: 100vh;
  width: 600vw; /* 100vw unit per sections */
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-light {
  background-color: #eee !important;
  color: #1C1B22;
}

.bg-dark {
  background-color: #1C1B22 !important;
  color: #eee;
}


</style>
