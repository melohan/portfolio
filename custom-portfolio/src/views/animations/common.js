// Animation definition
// -------------------------------------------
export const slowIntroFromBottom = {
    opacity:0,
    duration: 3,
    y:160,
    stagger:0.5,
    ease:"back"
}

export const mediumIntroFromBottom = {
    opacity:0,
    duration: 2,
    y:160,
    stagger:0.5,
    ease:"back"
}

export const quickIntroFromBottom = {
    opacity:0,
    duration: 1,
    y:160,
    stagger:0.5,
    ease:"back"
}

export const appear = {
    opacity: 0,
    duration: 1,
}

export const moveLeftToRight = {
    x: '100%',
    duration: 2,
    ease: 'none',
    repeat: -1,
}

// Group of animations for the home image
export const hiddenElementAppear = { autoAlpha: 1 }
export const controlledMoveFromLeft= {
    duration: 1.5,
    xPercent: -100,
    ease: "power2.in",
}
export const controlledMoveToRight = {
    duration: 2.5,
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: "power2.in",
}

// Animations on titles
// These two animation in a timeline
// Will make the text from small to big
export const fromSmallText = {duration: 1.5, scale: 0.1}
export const toBigText = {duration: 1, scale: 1}