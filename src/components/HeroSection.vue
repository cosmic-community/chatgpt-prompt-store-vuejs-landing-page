<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { ImageMetadata } from '../types'

interface Props {
  headline: string
  subheadline: string
  image?: ImageMetadata
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
  <section ref="sectionRef" class="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="animate-on-scroll">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {{ headline }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {{ subheadline }}
          </p>
          <button
            @click="scrollToPackages"
            class="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {{ ctaText }}
          </button>
        </div>
        
        <div v-if="image" class="animate-on-scroll">
          <img
            :src="`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`"
            :alt="headline"
            class="rounded-lg shadow-2xl w-full"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
  </section>
</template>