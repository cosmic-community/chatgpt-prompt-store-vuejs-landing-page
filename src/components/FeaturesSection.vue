<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { Feature } from '../types'

interface Props {
  title: string
  features: Feature[]
}

defineProps<Props>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
        {{ title }}
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="animate-on-scroll bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-5xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>