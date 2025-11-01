<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { Benefit } from '../types'

interface Props {
  title: string
  benefits: Benefit[]
}

defineProps<Props>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-gradient-to-br from-primary-dark to-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
        {{ title }}
      </h2>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="animate-on-scroll bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <h3 class="text-2xl font-semibold mb-4">{{ benefit.title }}</h3>
          <p class="text-white/90 leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>