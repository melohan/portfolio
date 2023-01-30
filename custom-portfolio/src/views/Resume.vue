<template>
  <section id="resume" class="resume" ref="resumeSection">
    <div class="container">

      <div class="section-title">
        <span ref="resumeTitle">[{{ title }}]</span>
        <h2>{{ title }}</h2>
        <p ref="resumeIntro">Here is an overview of my summary!</p>
      </div>
      <div class="row">
        <!------------------------- Left col ------------------------->
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
        <!------------------------- Right col ------------------------->
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

<script setup>
import {ref, onMounted} from 'vue'
import {gsap} from "gsap";
import resumeData from '@/assets/data/resume.json'

// Props
// -------------------------------------------
defineProps({
  title: {
    type: String,
    required: true
  }
})

//  Data
// -------------------------------------------
const Summary = resumeData.Summary
const Education = resumeData.Education
const Experience = resumeData.Experience

//  References
// -------------------------------------------
const resumeSection = ref(null)
const resumeTitle = ref(null)
const resumeIntro = ref(null)
const leftResumeSide = ref(null)
const rightResumeSide = ref(null)

// Animations
// -------------------------------------------

const popFromLeft = {
  duration: 1.5,
  x: -150,
  autoAlpha: 0,
  ease: "power3.out",
  stagger: 1.5
};

const popFromRight = {
  duration: 1.5,
  x: 150,
  autoAlpha: 0,
  ease: "power3.out",
  stagger: 1.5
};

onMounted(() => {

  const tl3 = gsap.timeline({paused: true});
  tl3.from(resumeTitle.value, {duration: 1.5, scale: 0.1})
      .to(resumeTitle.value, {duration: 1, scale: 1});
  tl3.from(leftResumeSide.value, popFromRight);
  tl3.from(rightResumeSide.value, popFromLeft)

  const tl4 = gsap.timeline({paused: true});
  tl4.to(resumeIntro.value, {duration: 1, x: "+=300", yoyo: true, repeat: 1})
      .to(resumeIntro.value, {duration: 1, x: "-=100", yoyo: true, repeat: 1});

  window.addEventListener('scroll', () => {
    if (resumeSection.value.getBoundingClientRect().left < window.innerWidth) {
      tl3.play()
      tl4.play()
    }
  })
});


</script>


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