<script setup>
import homeData from '@/assets/data/home.json'


// Props
// -------------------------------------------
defineProps({
  title: {
    type: String,
    required: true
  }
})


// Load data for this page
// -------------------------------------------
const homeContent = homeData;

</script>

<template>
  <section id="hero">
    <div class="hero-container">
      <div class="d-flex justify-content-center">
        <div class="p-2">
          <img src="@/assets/img/portrait.webp" alt="" id="hero-img">
        </div>
        <div class="p-2">
          <h1>{{ title }}</h1>
          <h2>{{ homeData.intro }}</h2>
          <p>{{ homeData.description }}</p>
          <div class="d-flex justify-content-start">
            <div class="p-2">
              <img class="hero-logo" src="../assets/img/linkedin.png" alt="">
            </div>
            <div class="p-2">
              <img class="hero-logo" src="../assets/img/github.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Hero -->

</template>

<style scoped>

/** Template custom element */
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

</style>