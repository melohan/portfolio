<template>
  <section id="about" class="about" ref="aboutSection">
    <div class="container">
      <div ref="aboutIntro" class="section-title">
        <span>{{ title }}</span>
        <h2>{{ title }}</h2>
        <p>{{ aboutData.about }}</p>
      </div>
      <div class="row">
        <img ref="aboutImg" src="@/assets/img/about.png" alt="" id="about-img"
             class="col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start">

        <div class="col-lg-8 d-flex flex-column align-items-stretch">
          <div class="content ps-lg-4 d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-lg-6" ref="aboutGeneral">
                <ul v-for="(value, key) in aboutData.general" :key="key">
                  <li><i class="bi bi-chevron-right"></i> <strong>{{ key }}:</strong> <span>{{ value }}</span></li>
                </ul>
              </div>
              <div class="col-lg-6" ref="aboutDetails">
                <ul v-for="(value, key) in aboutData.details" :key="key">
                  <li><i class="bi bi-chevron-right"></i><strong>{{ key }}:</strong> <span>{{ value }}</span></li>
                </ul>
              </div>
            </div>
            <div class="row mt-n4" ref="aboutHobbies">
              <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch" v-for="(value, key) in aboutData.hobbies"
                   :key="key">
                <div class="count-box">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                        class="purecounter"></span>
                  <h3>{{ key }}</h3>
                  <p> {{ value }}</p>
                </div>
              </div>
            </div>
          </div><!-- End .content-->

        </div>
      </div>

    </div>
  </section><!-- End About Me Section -->
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { gsap } from "gsap";
import aboutData from '@/assets/data/about.json'

// Props
// -------------------------------------------
defineProps({
  title: {
    type: String,
    required: true
  }
})

//  References
// -------------------------------------------
const aboutSection = ref(null);
const aboutIntro = ref(null);
const aboutImg = ref(null)
const aboutGeneral = ref(null)
const aboutDetails = ref(null)
const aboutHobbies = ref(null)


// Animations
// -------------------------------------------

const mediumReveal = {
  opacity: 0,
  ease: "power3.inOut",
  duration: 1.3
};

const fastReveal = {
  opacity: 0,
  ease: "power3.inOut",
  duration: 1
}

onMounted(() => {

  const tl2 = gsap.timeline({ paused: true });
  tl2.from(aboutImg.value, mediumReveal)
      .from(aboutIntro.value, fastReveal)
      .from(aboutGeneral.value, fastReveal)
      .from(aboutDetails.value, fastReveal)
      .from(aboutHobbies.value, fastReveal)
      .fromTo(aboutImg.value, { filter: "invert(0%)" }, { filter: "invert(100%)", duration: 3 });

  // Run the animation when the section is in the middle of the viewport
  window.addEventListener('scroll', () => {
    if (aboutSection.value.getBoundingClientRect().left < window.innerWidth) {
      tl2.play();
    }
  })
});

</script>

<style scoped>


.content span {
  color: #5d6a75;
}

.about {
  font-family: "Satisfy", serif !important;
}

.about .content h3 {
  font-size: 13px !important;
}

.about .content .count-box p {
  font-family: "Satisfy", serif;
}

#about-img {
  max-height: 50vh;
  border-radius: 5px;
  opacity: 1;
}

</style>