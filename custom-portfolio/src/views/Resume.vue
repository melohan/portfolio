<script setup>
import resumeData from '@/assets/data/resume.json'

const Summary = resumeData.Summary
const Education = resumeData.Education
const Experience = resumeData.Experience

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <span>{{ title }}</span>
        <h2>{{ title }}</h2>
        <p>Here is an overview of my summary</p>
      </div>
      <div class="row">
        <!-- Left col-->
        <div class="col-lg-6">

          <!-- Main sumary-->
          <div v-if="Summary">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>{{ Summary.title }}</h4>
              <p><em>{{ Summary.location }}</em></p>
              <p>{{ Summary.text }}</p>
            </div>
          </div>
          <!-- End main sumary-->

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
        <!-- End left col -->
        <!-- Right Col -->
        <div class="col-lg-6">
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
        <!--Right left col-->
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume {
  font-family: "Satisfy", serif !important;
}

.section-title h2 {
  color: #ffb727
}

.resume-item h5 {
  background: #ffb727 !important;
}

</style>