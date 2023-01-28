<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import skillsData from '@/assets/data/skills.json'

const Languages = skillsData.Languages
const Business = skillsData.Business


defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
  <section id="skills" class="skills">
    <div class="container">

      <div class="section-title">
        <span>{{ title }}</span>
        <h2>{{ title }}</h2>
      </div>

      <div class="d-flex flex-column">
        <div class="d-flex justify-content-center">
          <h4>Language</h4>
        </div>
        <div class="d-flex justify-content-center">
          <div class="mb-0" style="width: 50vw">
            <div v-if="Languages">
              <div v-for="(language, key) in Languages" :key="key">
                <ProgressBar v-bind:name="language.name" v-bind:value="parseInt(language.value)"/>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <h4>Business skills</h4>
        </div>
        <div class="d-flex justify-content-center">
          <div class="mb-0" style="width: 50vw">
            <div v-if="Business">
              <div v-for="(bu, key) in Business" :key="key">
                <ProgressBar v-bind:name="bu.name" v-bind:value="parseInt(bu.value)"/>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

</template>

<style scoped>

.skills .skills-content {
  margin-top: 30px;
}

.skills h4 {
  color: #ffb727;
}

</style>