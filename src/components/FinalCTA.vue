<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

interface Props {
  headline: string
  description: string
  ctaText: string
}

defineProps<Props>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)

function scrollToPackages() {
  const packagesSection = document.getElementById('packages')
  if (packagesSection) {
    packagesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ headline }}</h2>
        <p class="text-xl mb-8 text-white/90 leading-relaxed">{{ description }}</p>
        <button
          @click="scrollToPackages"
          class="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {{ ctaText }}
        </button>
      </div>
    </div>
  </section>
</template>