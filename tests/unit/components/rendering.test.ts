import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import * as allExports from '../../../src/index'

const componentEntries = Object.entries(allExports).filter(
  ([name]) => !name.startsWith('use') && name !== 'default'
) as [string, any][]

describe('all spinner components', () => {
  describe.each(componentEntries)('%s', (_name, Component) => {
    it('renders without error', () => {
      const wrapper = mount(Component)
      expect(wrapper.exists()).toBe(true)
    })

    it('accepts size prop', () => {
      const wrapper = mount(Component, { props: { size: '60px' } })
      const el = wrapper.element as HTMLElement
      expect(el.style.width).toBe('60px')
    })

    it('has scoped styles applied', () => {
      const wrapper = mount(Component)
      const el = wrapper.element as HTMLElement
      const attrs = el.getAttributeNames()
      const hasScopeAttr = attrs.some((a) => a.startsWith('data-v-'))
      expect(hasScopeAttr).toBe(true)
    })
  })
})

describe('components with color prop', () => {
  const colorComponents = ['DoubleBounce', 'Jumper', 'ThreeDots', 'Stretch', 'SquareGrid'] as const

  it.each(colorComponents)('%s accepts color prop without error', (name) => {
    const Component = (allExports as any)[name]
    const wrapper = mount(Component, {
      props: { color: '#e74c3c' },
    })
    expect(wrapper.exists()).toBe(true)
  })
})

describe('components with duration prop', () => {
  const durationComponents = ['DoubleBounce', 'Stretch', 'SquareGrid', 'ScaleOut'] as const

  it.each(durationComponents)('%s accepts duration prop without error', (name) => {
    const Component = (allExports as any)[name]
    const wrapper = mount(Component, {
      props: { duration: '0.5s' },
    })
    expect(wrapper.exists()).toBe(true)
  })
})

describe('LetterCube special props', () => {
  it('renders custom letters', () => {
    const Component = (allExports as any).LetterCube
    const wrapper = mount(Component, {
      props: { letters: ['V', 'U', 'E', ' ', '3', '!'] },
    })
    expect(wrapper.text()).toContain('V')
    expect(wrapper.text()).toContain('3')
  })
})

describe('plugin install', () => {
  it('exports a default plugin with install function', () => {
    expect(allExports.default).toBeDefined()
    expect(typeof allExports.default.install).toBe('function')
  })

  it('install registers all components on the app', () => {
    const registered: Record<string, any> = {}
    const mockApp = {
      component(name: string, comp: any) {
        registered[name] = comp
      },
    }
    allExports.default.install(mockApp as any)
    expect(Object.keys(registered).length).toBe(componentEntries.length)
  })
})
