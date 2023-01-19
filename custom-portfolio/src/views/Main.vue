<script setup>
import Home from './sections/Home.vue'
import About from './sections/About.vue'
import Education from './sections/Education.vue'
import Experiences from './sections/Education.vue'
import Skills from './sections/Skills.vue'
import Realizations from './sections/Realizations.vue'
import { gsap } from "gsap";

//GSAPHorizontalScroll
function GSAPHorizontalScroll(containerElement, sectionsElements) {
  let sections = gsap.utils.toArray(sectionsElements);
  let containerScrollWidth = document.querySelector(containerElement).scrollWidth;

  let horizontalScroll = gsap.timeline({
    scrollTrigger: {
      trigger: containerElement,
      pin: true,
      start: "0% 0%",
      end:
        "+=" + (containerScrollWidth - window.innerWidth),
      scrub: 0,
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.22, max: 0.31 },
        delay: 0,
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
  GSAPHorizontalScroll(mainContainer, sections);
};
</script>
<template>
<div id="main-container">
  <section class="main-section bg-dark">
    <Home title="Welcome to my portfolio!" />
  </section>
  <section class="main-section bg-light">
    <About title="About me" />
  </section>
  <section class="main-section bg-dark">
    <Education title="Education" />
  </section>
  <section class="main-section bg-dark">
    <Experiences title="Experiences" />
  </section>
  <section class="main-section bg-dark">
    <Skills title="Skills" />
  </section>
  <section class="main-section bg-dark">
    <Realizations title="My realizations" />
  </section>
</div>
</template>


<style scoped>
::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main-container {
  height: 100vh;
  width: 600vw;
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
    background: #e1e1e1 !important;
    color: #161618;
}

.bg-dark {
  background: #515062 !important;
  color: #e1e1e1;
}

</style>