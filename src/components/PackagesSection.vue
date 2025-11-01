<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { PromptPackage } from '../types'

interface Props {
  packages: PromptPackage[]
}

defineProps<Props>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section id="packages" ref="sectionRef" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
        Choose Your Perfect Package
      </h2>
      <p class="text-xl text-gray-600 text-center mb-16 animate-on-scroll">
        Select the plan that fits your needs and start mastering AI today
      </p>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="animate-on-scroll relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary"
          :class="pkg.metadata.featured_package ? 'border-primary scale-105' : 'border-gray-200'"
        >
          <!-- Featured Badge -->
          <div
            v-if="pkg.metadata.featured_package"
            class="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md"
          >
            Most Popular
          </div>
          
          <!-- Package Image -->
          <div v-if="pkg.metadata.package_image" class="h-48 overflow-hidden">
            <img
              :src="`${pkg.metadata.package_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`"
              :alt="pkg.metadata.package_name"
              class="w-full h-full object-cover"
              width="400"
              height="200"
            />
          </div>
          
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2">{{ pkg.metadata.package_name }}</h3>
            <div class="text-4xl font-bold text-primary mb-4">{{ pkg.metadata.price }}</div>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ pkg.metadata.description }}</p>
            
            <ul class="space-y-3 mb-8">
              <li
                v-for="(feature, index) in pkg.metadata.features_list"
                :key="index"
                class="flex items-start"
              >
                <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <button
              class="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              :class="pkg.metadata.featured_package 
                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>