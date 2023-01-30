<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {gsap} from "gsap";

import resumeData from '@/assets/data/resume.json'

// Props
// ------------------------------------------------------------------------
defineProps({
  title: {
    type: String,
    required: true
  }
})

//  Data
// ------------------------------------------------------------------------
const Summary = resumeData.Summary
const Education = resumeData.Education
const Experience = resumeData.Experience

//  References
// ------------------------------------------------------------------------
const resumeSection = ref(null)
const resumeTitle = ref(null)
const resumeIntro = ref(null)
const leftResumeSide = ref(null)
const rightResumeSide = ref(null)

// Animations
// ------------------------------------------------------------------------

// Will make smth from small size to big
const fromSmallText = {duration: 1.5, scale: 0.1}
const toBigText = {duration: 1, scale: 1}

// animation for rightResumeSide
const popFromLeft = { duration: 1.5, x: -150, autoAlpha: 0, ease: "power3.out", stagger: 1.5 };

// animation for leftResumeSide
const popFromRight = { duration: 1.5, x: 150, autoAlpha: 0, ease: "power3.out", stagger: 1.5 };

// Yoyo animation on text (/!\ follow closely popFromLeft and popFromRight)
const yoyoSeqStart = {duration: 1, x: "+=200", yoyo: true, repeat: 1}
const yoyoSeqThen = {duration: 1, x: "-=200", yoyo: true, repeat: 1};
const yoyoSeqTo = {duration: 1, x: "+=100", yoyo: true, repeat: 1}

// onMounted
// ------------------------------------------------------------------------

onMounted(() => {

  // Animations
  // -----------------------
  const currentSectionTimeline = gsap.timeline({paused: true});

  // define every animation on the timeline (except the scroll message)
  currentSectionTimeline.from(resumeTitle.value, fromSmallText).to(resumeTitle.value, toBigText);
  currentSectionTimeline.from(leftResumeSide.value, popFromRight);
  currentSectionTimeline.from(rightResumeSide.value, popFromLeft)

  // define the scroll message animation
  const scrollInfoTimeline = gsap.timeline({paused: true});
  scrollInfoTimeline.to(resumeIntro.value, yoyoSeqStart)
                    .to(resumeIntro.value, yoyoSeqThen)
                    .to(resumeIntro.value, yoyoSeqTo);

  // EventListener on Scroll
  // -----------------------
  window.addEventListener('scroll', () => {
    if (resumeSection.value.getBoundingClientRect().left < window.innerWidth) {
      currentSectionTimeline.play()
      scrollInfoTimeline.play()
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
  <section id="resume" class="resume" ref="resumeSection">
    <div class="container">

      <div class="section-title">
        <span ref="resumeTitle">[{{ title }}]</span>
        <h2>{{ title }}</h2>
        <p ref="resumeIntro">Here is an overview of my summary!</p>
      </div>
      <div class="row">
        <!-- ----------------------- Left col ----------------------- -->
        <div class="col-lg-6" ref="leftResumeSide">
          <!-- Summary -->
          <div v-if="Summary">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>{{ Summary.title }}</h4>
              <p><em>{{ Summary.location }}</em></p>
              <p>{{ Summary.text }}</p>
            </div>
          </div>
          <!-- Education -->
          <h3 class="resume-title">Education</h3>
          <div v-if="Education">
            <div v-for="(edu, key) in Education" :key="key">
              <div class="resume-item">
                <h4>{{ edu.title }}</h4>
                <h5>{{ edu.date }}</h5>
                <p><em>{{ edu.location }}</em></p>
                <p>{{ edu.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------- Right col ----------------------- -->
        <div class="col-lg-6" ref="rightResumeSide">

          <!-- Professional experiences -->
          <h3 class="resume-title">Professional Experience</h3>
          <div v-if="Experience">
            <div v-for="(exp, key) in Experience" :key="key">
              <div class="resume-item">
                <h4>{{ exp.title }}</h4>
                <h5>{{ exp.date }}</h5>
                <p><em>{{ exp.location }}</em></p>
                <p>{{ exp.text }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
  .resume {
    font-family: "Satisfy", serif !important;
  }

  .section-title h2 {
    opacity: 0;
  }

  .resume-item h5 {
    background: #ffb727 !important;
  }
</style>