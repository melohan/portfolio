<script setup>
  import {onMounted} from 'vue'
  import {gsap} from "gsap";

  // Single page App: each view component is contained in App.vue
  import Home from '@/views/Home.vue'
  import About from '@/views/About.vue'
  import Resume from '@/views/Resume.vue'
  import Skills from '@/views/Skills.vue'
  import Realizations from '@/views/Realizations.vue'

  // Main Horizontal Scroll
  // ------------------------------------------------

  onMounted(() => {

    // convert a nodeList of elements with the class .panel into an array of elements.
    let panel = gsap.utils.toArray(".panel");
    // target the main-container
    let container = document.querySelector("#main-container")


    gsap.to(panel, {
      xPercent: -100 * (panel.length - 1),      // Move each element of sections of 100 units
      ease: "none",                             // Progression is linear
      scrollTrigger: {
        trigger: container,                     // Defines the trigger on the container
        pin: true,                              // Elements are pined when the animation starts
        scrub: 1,                               // The animation progress with the user scroll
        snap: 1 / (panel.length - 1),           // When scrolling, it goes to the closest element (the next panel)
        end: "+=3500"                           // End after 3500 units of scrolling (should stop before)
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


  /**
    Notes: The scrollbar cannot be hidden in Google
   */
  body {
    color: #202020 !important;
    font-family: "Satisfy", serif !important;
    overflow: hidden;           /* Hide scrollbars */
    overflow-x: hidden;         /* Hide horizontal scrollbar */
    overscroll-behavior: none;
  }
  /* Set the scrollbar width to 0 (in order to hide it if it works */
  ::-webkit-scrollbar {
    width: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #main-container {
    overscroll-behavior: none;
    height: 100vh;
    width: 500vw;       /* 100 per panel */
    display: flex;
    flex-wrap: nowrap;
  }

  .panel {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    width: 100vw;
    max-height: 100vh;
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
