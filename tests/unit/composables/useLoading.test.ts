import { describe, it, expect, vi } from 'vitest'
import { useLoading } from '../../../src/composables/useLoading'

describe('useLoading', () => {
  it('starts with false by default', () => {
    const { isLoading } = useLoading()
    expect(isLoading.value).toBe(false)
  })

  it('starts with true when initial=true', () => {
    const { isLoading } = useLoading(true)
    expect(isLoading.value).toBe(true)
  })

  it('startLoading sets isLoading to true', () => {
    const { isLoading, startLoading } = useLoading()
    startLoading()
    expect(isLoading.value).toBe(true)
  })

  it('stopLoading sets isLoading to false', () => {
    const { isLoading, startLoading, stopLoading } = useLoading()
    startLoading()
    expect(isLoading.value).toBe(true)
    stopLoading()
    expect(isLoading.value).toBe(false)
  })

  it('withLoading sets loading during async execution', async () => {
    const { isLoading, withLoading } = useLoading()
    let loadingDuringExec = false

    await withLoading(async () => {
      loadingDuringExec = isLoading.value
      return 'result'
    })

    expect(loadingDuringExec).toBe(true)
    expect(isLoading.value).toBe(false)
  })

  it('withLoading returns the function result', async () => {
    const { withLoading } = useLoading()
    const result = await withLoading(async () => 42)
    expect(result).toBe(42)
  })

  it('withLoading resets loading on error', async () => {
    const { isLoading, withLoading } = useLoading()

    await expect(
      withLoading(async () => { throw new Error('fail') })
    ).rejects.toThrow('fail')

    expect(isLoading.value).toBe(false)
  })
})
