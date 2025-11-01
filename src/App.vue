<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getLandingPage, getPromptPackages } from './lib/cosmic'
import type { LandingPage, PromptPackage } from './types'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PackagesSection from './components/PackagesSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import FinalCTA from './components/FinalCTA.vue'
import CosmicBadge from './components/CosmicBadge.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const landingPage = ref<LandingPage | null>(null)
const packages = ref<PromptPackage[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const [pageData, packagesData] = await Promise.all([
      getLandingPage(),
      getPromptPackages()
    ])
    
    landingPage.value = pageData
    packages.value = packagesData
  } catch (err) {
    error.value = 'Failed to load content. Please try again later.'
    console.error('Error loading content:', err)
  } finally {
    isLoading.value = false
  }
})

const bucketSlug = import.meta.env.VITE_COSMIC_BUCKET_SLUG as string
</script>

<template>
  <div class="min-h-screen bg-white">
    <LoadingSpinner v-if="isLoading" />
    
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <p class="text-red-600 text-lg">{{ error }}</p>
      </div>
    </div>
    
    <main v-else-if="landingPage">
      <HeroSection 
        :headline="landingPage.metadata.hero_headline"
        :subheadline="landingPage.metadata.hero_subheadline"
        :image="landingPage.metadata.hero_image"
        :cta-text="landingPage.metadata.cta_button_text"
      />
      
      <FeaturesSection 
        :title="landingPage.metadata.features_section_title"
        :features="landingPage.metadata.features"
      />
      
      <PackagesSection :packages="packages" />
      
      <BenefitsSection 
        :title="landingPage.metadata.benefits_section_title"
        :benefits="landingPage.metadata.benefits"
      />
      
      <TestimonialSection 
        :quote="landingPage.metadata.testimonial_quote"
        :author="landingPage.metadata.testimonial_author"
      />
      
      <FinalCTA 
        :headline="landingPage.metadata.final_cta_headline"
        :description="landingPage.metadata.final_cta_description"
        :cta-text="landingPage.metadata.cta_button_text"
      />
    </main>
    
    <CosmicBadge :bucket-slug="bucketSlug" />
  </div>
</template>