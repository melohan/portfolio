<template>
  <section id="hero">
    <div class="hero-container">

      <div class="d-flex justify-content-center">
        <div class="p-2">
          <div class="reveal" ref="homeImgContainer">
            <img src="@/assets/img/portrait.webp" ref="homeImg" alt="" id="hero-img">
          </div>
        </div>
        <div class="p-2">
          <h1 ref="homeTitle">{{ title }}</h1>
          <h2 ref="homeIntro">{{ homeData.intro }}</h2>
          <p ref="homeDescription">{{ homeData.description }}</p>
          <div class="d-flex justify-content-start">
            <div class="p-2" >
              <img ref="linkIcon" class="hero-logo" src="../assets/img/linkedin.png" alt="">
            </div>
            <div class="p-2">
              <img ref="gitIcon" class="hero-logo" src="../assets/img/github.png" alt="">
            </div>
            <div class="p-lg-5" style="min-width: 10vw;">
              <h2 ref="homeScroll">Scroll >></h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section><!-- End Hero -->

</template>

<script setup>
import homeData from '@/assets/data/home.json'
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue'
import { homeAnimation } from '@/views/animations/home'

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
const homeImg = ref(null);
const homeImgContainer = ref(null);
const homeTitle = ref(null);
const homeIntro = ref(null);
const homeDescription = ref(null);
const linkIcon = ref(null);
const gitIcon = ref(null);
const homeScroll = ref(null);



// Create an observer to make the references available to the template
const observer = shallowRef();


// Once the component is mounted, it should access to our references
onMounted(() => {
  homeImgContainer.value;
  homeImg.value;
  homeTitle.value;
  homeIntro.value;
  homeDescription.value;
  linkIcon.value;
  gitIcon.value;
  homeScroll.value;
  homeAnimation(homeImgContainer, homeImg, homeTitle, homeIntro, homeDescription, linkIcon, gitIcon, homeScroll)
})

onBeforeUnmount(() => {
  observer.value.disconnect()
})

</script>

<style scoped>

/** Overriding main.css */
#hero {
  width: 100vw;
  height: 100% !important;
  background: #4F4E60;
}

#hero h1 {
  margin-top: 10vh;
}

#hero h2 {
  margin: 0 !important;
}

#hero p {
  color: #eee;
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  max-width: 30vw;
}

.hero-logo {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

#hero-img {
  inset: 0px 0px 20px 0px rgba(28, 27, 34, 0.8);;
  width: 30vw;
  border-radius: 2px;
}

.reveal {
  visibility: hidden;
  position: relative;
  overflow: hidden;
}

</style>