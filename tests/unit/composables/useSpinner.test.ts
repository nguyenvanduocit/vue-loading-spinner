import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'
import { useSpinner, useScaledSpinner } from '../../../src/composables/useSpinner'

describe('useSpinner', () => {
  it('returns sizeStyle with width and height', () => {
    const props = reactive({ size: '40px' })
    const { sizeStyle } = useSpinner(props)

    expect(sizeStyle.value).toEqual({
      width: '40px',
      height: '40px',
    })
  })

  it('reacts to size changes', () => {
    const props = reactive({ size: '40px' })
    const { sizeStyle } = useSpinner(props)

    props.size = '80px'
    expect(sizeStyle.value).toEqual({
      width: '80px',
      height: '80px',
    })
  })
})

describe('useScaledSpinner', () => {
  it('returns sizeStyle and innerStyle with scale', () => {
    const props = reactive({ size: '40px', color: '#41b883' })
    const { sizeStyle, innerStyle } = useScaledSpinner(props, 80)

    expect(sizeStyle.value).toEqual({
      width: '40px',
      height: '40px',
    })

    expect(innerStyle.value).toEqual({
      transform: 'scale(0.5)',
      '--bg-color': '#41b883',
    })
  })

  it('computes correct scale for different sizes', () => {
    const props = reactive({ size: '160px', color: '#000' })
    const { innerStyle } = useScaledSpinner(props, 80)

    expect(innerStyle.value.transform).toBe('scale(2)')
  })

  it('omits --bg-color when color is undefined', () => {
    const props = reactive({ size: '40px' })
    const { innerStyle } = useScaledSpinner(props, 80)

    expect(innerStyle.value).not.toHaveProperty('--bg-color')
  })

  it('reacts to prop changes', () => {
    const props = reactive({ size: '40px', color: '#fff' })
    const { innerStyle } = useScaledSpinner(props, 80)

    expect(innerStyle.value['--bg-color']).toBe('#fff')

    props.color = '#000'
    expect(innerStyle.value['--bg-color']).toBe('#000')

    props.size = '80px'
    expect(innerStyle.value.transform).toBe('scale(1)')
  })
})
