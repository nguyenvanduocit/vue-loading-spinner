import { ref } from 'vue'
import type { Ref } from 'vue'

export function useLoading(initial = false): {
  isLoading: Ref<boolean>
  startLoading: () => void
  stopLoading: () => void
  withLoading: <T>(fn: () => Promise<T>) => Promise<T>
} {
  const isLoading = ref(initial)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
    isLoading.value = true
    try {
      return await fn()
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, startLoading, stopLoading, withLoading }
}
