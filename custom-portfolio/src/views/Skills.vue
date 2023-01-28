<script setup>
import ProgressBar from '@/components/ProgressBar.vue'

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
            <ProgressBar name="Français" :value="100"/>
            <ProgressBar name="Anglais" :value="65"/>
            <ProgressBar name="Turc" :value="50"/>
            <ProgressBar name="Allemand" :value="25"/>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <h4>Business skills</h4>
        </div>
        <div class="d-flex justify-content-center">
          <div class="mb-0" style="width: 50vw">
            <ProgressBar name="Python" :value="85"/>
            <ProgressBar name="PHP Laravel" :value="75"/>
            <ProgressBar name="C# .NET" :value="55"/>
            <ProgressBar name="React Native" :value="45"/>
            <ProgressBar name="VueJS 3" :value="40"/>
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