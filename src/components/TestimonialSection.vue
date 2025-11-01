<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

interface Props {
  quote: string
  author: string
}

defineProps<Props>()

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center animate-on-scroll">
        <svg class="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <blockquote class="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
          "{{ quote }}"
        </blockquote>
        
        <p class="text-lg text-primary font-semibold">{{ author }}</p>
      </div>
    </div>
  </section>
</template>