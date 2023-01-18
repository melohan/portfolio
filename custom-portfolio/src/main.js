import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap 
// --------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import GSAP
// --------------------------------------------------
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";


createApp(App).mount('#app')
