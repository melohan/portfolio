<script setup>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Resume from './views/Resume.vue'
import Skills from './views/Skills.vue'
import Realizations from './views/Realizations.vue'

import {gsap} from "gsap";


/**
 * This function implement the horizontal scroll between sections
 * @param {*} containerElement  expect an unique container
 * @param {*} sectionsElements  expect a class repeted and container in ContainerElement
 * @notes This code implement https://codepen.io/AkhilRaja/pen/PopdVMe
 */
function horizontalScroll(containerElement, sectionsElements) {

  let sections = gsap.utils.toArray(sectionsElements);
  let containerScrollWidth = document.querySelector(containerElement).scrollWidth;

  let horizontalScroll = gsap.timeline({
    scrollTrigger: {
      trigger: containerElement,
      // The animation will be pinned to the scroll position
      pin: true,
      start: "0% 0%",
      // The animation will continue until the end of the container element is reached
      end: "+=" + (containerScrollWidth - window.innerWidth),
      scrub: 0,
      // Snap to a specific point in the scroll position (the section)
      snap: {
        // the animation will jump to specific points as the user scrolls
        snapTo: 1 / (sections.length - 1),
        duration: {min: 0.2, max: 0.3},
        delay: 0,
        // Start and end the animation slowly
        ease: "sine.inOut"
      }
    }
  });
  horizontalScroll.to(sections,
      {
        xPercent: -100 * (sections.length - 1),
        ease: "none"
      });
}

var mainContainer = "#main-container"
var sections = ".main-section"

window.onload = () => {
  horizontalScroll(mainContainer, sections);
};
</script>

<template>
  <div id="app">
    <div id="main-container">
      <section class="main-section bg-dark">
        <Home title="Welcome"/>
      </section>
      <section class="main-section bg-light">
        <About title="About me"/>
      </section>
      <section class="main-section bg-dark">
        <Resume title="My resume"/>
      </section>
      <section class="main-section bg-light">
        <Skills title="Skills"/>
      </section>
      <section class="main-section bg-dark">
        <Realizations title="Realizations"/>
      </section>
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
}

#main-container {
  height: 100vh;
  width: 600vw; /* 100vw unit per sections */
  display: flex;
  flex-wrap: nowrap;
}

.main-section {
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
