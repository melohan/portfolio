import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap 
// --------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import GSAP
// --------------------------------------------------
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Vueuse/motion
// --------------------------------------------------
import { MotionPlugin } from '@vueuse/motion'

// Import general css
// --------------------------------------------------

import './assets/main.css'

const app = createApp(App)

app.use(MotionPlugin)
gsap.registerPlugin(ScrollTrigger);

app.mount('#app')