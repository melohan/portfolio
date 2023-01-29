// ----------------------------------------------------------------------------------------
// This file contains the definition and functions of the animations for the Home.vue
// ----------------------------------------------------------------------------------------

// Imports
// -------------------------------------------
import { gsap } from "gsap";

// Animation definition
// -------------------------------------------
const slowIntroFromBottom = {
    opacity:0,
    duration: 3,
    y:160,
    stagger:0.5,
    ease:"back"
}

const mediumIntroFromBottom = {
    opacity:0,
    duration: 2,
    y:160,
    stagger:0.5,
    ease:"back"
}

const quickIntroFromBottom = {
    opacity:0,
    duration: 1,
    y:160,
    stagger:0.5,
    ease:"back"
}

const appear = {
    opacity: 0,
    duration: 1,
}

const moveLeftToRight = {
    x: '100%',
    duration: 2,
    ease: 'none',
    repeat: -1,
}

// Group of animations for the home image
const hiddenElementAppear = { autoAlpha: 1 }
const controlledMoveFromLeft= {
    duration: 1.5,
    xPercent: -100,
    ease: "power2.in",
}
const controlledMoveToRight = {
    duration: 2.5,
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: "power2.in",
}

// Functions
// -------------------------------------------

export const homeAnimation = (imageContainerTarget, imageTarget, titleTarget, introTarget, descriptionTarget,
                              firstIconTarget, secondIconTarget, scrollTextTarget ) => {
    let tl = gsap.timeline({})
    tl.set(imageContainerTarget.value, hiddenElementAppear);
    tl.from(imageContainerTarget.value, controlledMoveFromLeft);
    tl.from(imageTarget.value, controlledMoveToRight);
    tl.from(titleTarget.value, slowIntroFromBottom);
    tl.from(introTarget.value, mediumIntroFromBottom);
    tl.from(descriptionTarget.value, slowIntroFromBottom);
    tl.from(firstIconTarget.value, quickIntroFromBottom);
    tl.from(secondIconTarget.value, quickIntroFromBottom);
    tl.from(scrollTextTarget.value, appear)
    tl.from(scrollTextTarget.value, moveLeftToRight)
    // Use another timeline for pivoting element because the `pivot` animation is too sophisticated
    pivot(secondIconTarget.value, -360, -360, 2.5, 5);
    pivot(firstIconTarget.value, 360, 360, 2.5, 5);
}

function pivot(elementTarget, leftRotation, rightRotation, introSpeed, generalSpeed, repetition = -1){
    gsap.set(elementTarget, { rotation: 0 });
    const timeline = gsap.timeline({ repeat: repetition });
    timeline
        .to(elementTarget, { rotation: 0, duration: introSpeed })
        .to(elementTarget, { rotation: rightRotation, duration: generalSpeed })
        .to(elementTarget, { rotation: 0, duration: generalSpeed })
        .to(elementTarget, { rotation: -leftRotation, duration: generalSpeed })
        .to(elementTarget, { rotation: 0, duration: generalSpeed });
}
