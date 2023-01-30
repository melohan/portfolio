
<script setup>
  import {ref, onMounted} from 'vue'
  import {gsap} from "gsap";

  import homeData from '@/assets/data/home.json'

  // Props
  // ------------------------------------------------------------------------
  defineProps({
    title: {
      type: String,
      required: true
    }
  })

  //  References
  // ------------------------------------------------------------------------
  const homeSection = ref(null)         // View sections
  const homeImg = ref(null);            // Main image of the section
  const homeImgContainer = ref(null);   // Main image container
  const homeTitle = ref(null);
  const homeIntro = ref(null);
  const homeDescription = ref(null);
  const linkIcon = ref(null);
  const gitIcon = ref(null);
  const homeScroll = ref(null);

  // Animation definition
  // ------------------------------------------------------------------------

  // This group of animation make the element slide from bottom to top with different speed
  const quickIntroFromBottom = {opacity: 0, duration: 1, y: 160, stagger: 0.5, ease: "back"}
  const slowIntroFromBottom = {opacity: 0, duration: 3, y: 160, stagger: 0.5, ease: "back"}
  const mediumIntroFromBottom = {opacity: 0, duration: 2, y: 160, stagger: 0.5, ease: "back"}

  // Simple appear based on the opacity
  const appear = {opacity: 0, duration: 1}

  // Repetitive horizontal movement
  const moveLeftToRight = {x: '100%', duration: 2, ease: 'none', repeat: -1}

  // Set to opacity from 0 to 1
  const hiddenElementAppear = {autoAlpha: 1}

  // These animation will push the element to the right, then display it to left
  const controlledMoveFromLeft = {duration: 1.5, xPercent: -100, ease: "power2.in"}
  const controlledMoveToRight = {duration: 2.5, xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.in"}


  // Animations
  // ------------------------------------------------------------------------

  const homeAnimation = (imageContainerTarget, imageTarget, titleTarget, introTarget, descriptionTarget,
                         firstIconTarget, secondIconTarget, scrollTextTarget) => {
    let homeTl = gsap.timeline({})
    // Animate the hidden container
    homeTl.set(imageContainerTarget.value, hiddenElementAppear)
        .from(imageContainerTarget.value, controlledMoveFromLeft)
        .from(imageTarget.value, controlledMoveToRight);
    // Other element are displayed by sliding from the bottom of the page
    homeTl.from(titleTarget.value, slowIntroFromBottom);
    homeTl.from(introTarget.value, mediumIntroFromBottom);
    homeTl.from(descriptionTarget.value, slowIntroFromBottom);
    homeTl.from(firstIconTarget.value, quickIntroFromBottom);
    homeTl.from(secondIconTarget.value, quickIntroFromBottom);
    homeTl.from(scrollTextTarget.value, appear)
    homeTl.from(scrollTextTarget.value, moveLeftToRight)
    // Use another timeline for pivoting element because the `pivot` animation is too "sophisticated"
    // The following code will make the image rotate of n degree
    pivot(secondIconTarget.value, -360, -360, 2.5, 5);
    pivot(firstIconTarget.value, 360, 360, 2.5, 5);
  }

  function pivot(elementTarget, leftRotation, rightRotation, introSpeed, generalSpeed, repetition = -1) {
    gsap.set(elementTarget, {rotation: 0});
    const timeline = gsap.timeline({repeat: repetition});
    timeline
        .to(elementTarget, {rotation: 0, duration: introSpeed})
        .to(elementTarget, {rotation: rightRotation, duration: generalSpeed})
        .to(elementTarget, {rotation: 0, duration: generalSpeed})
        .to(elementTarget, {rotation: -leftRotation, duration: generalSpeed})
        .to(elementTarget, {rotation: 0, duration: generalSpeed});
  }

  // onMounted
  // ------------------------------------------------------------------------

  onMounted(() => {
    homeAnimation(homeImgContainer, homeImg, homeTitle, homeIntro, homeDescription, linkIcon, gitIcon, homeScroll)
  });

</script>


<template>
  <section id="hero" ref="homeSection">
    <div class="hero-container">

      <!-- --------- Horizontal flex div next to each other --------- -->
      <div class="d-flex justify-content-center">

        <!-- ---- Horizontal Left div ---- -->
        <div class="p-2">
          <div class="reveal" ref="homeImgContainer">
            <img src="@/assets/img/portrait.webp" ref="homeImg" alt="" id="hero-img">
          </div>
        </div>
        <!-- ---- End Horizontal Left div ---- -->

        <!-- ---- Horizontal Right div ---- -->
        <div class="p-2">
          <h1 ref="homeTitle" class="mt-5">{{ title }}</h1>
          <h2 ref="homeIntro">{{ homeData.intro }}</h2>
          <p ref="homeDescription">{{ homeData.description }}</p>

          <!-- Vertical flex div -->
          <div class="d-flex justify-content-start">
            <div class="p-2">
              <a href="https://github.com/melohan"><img ref="linkIcon" class="hero-logo" src="../assets/img/linkedin.png" alt=""></a>
            </div>
            <div class="p-2">
              <a href="https://github.com/melohan"><img ref="gitIcon" class="hero-logo" src="../assets/img/github.png" alt=""></a>
            </div>
            <div class="p-lg-5" style="min-width: 10vw;">
              <h2 ref="homeScroll">Scroll >></h2>
            </div>
          </div>
          <!-- End Vertical flex div -->

        </div>
        <!-- ---- End Horizontal Right div ---- -->

      </div>
      <!-- End Horizontal flex div -->
    </div>
  </section><!-- End Hero -->

</template>

<style scoped>

  /** Overriding main.css */
  #hero {
    width: 100vw;
    max-height: 100vh;
    background: #4F4E60;
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
    max-height: 60vh;
  }

  .hero-logo {
    max-width: 80px;
    max-height: 80px;
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