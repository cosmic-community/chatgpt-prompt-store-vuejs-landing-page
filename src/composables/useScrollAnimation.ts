import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollAnimation(elementRef: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = elementRef.value.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}