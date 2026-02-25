import { computed } from 'vue'
import type { CSSProperties } from 'vue'

export function useSpinner(props: { size: string }) {
  const sizeStyle = computed<CSSProperties>(() => ({
    width: props.size,
    height: props.size,
  }))

  return { sizeStyle }
}

export function useScaledSpinner(
  props: { size: string; color?: string },
  baseSize: number,
) {
  const sizeStyle = computed<CSSProperties>(() => ({
    width: props.size,
    height: props.size,
  }))

  const innerStyle = computed<Record<string, string>>(() => {
    const styles: Record<string, string> = {
      transform: `scale(${parseInt(props.size) / baseSize})`,
    }
    if (props.color) {
      styles['--bg-color'] = props.color
    }
    return styles
  })

  return { sizeStyle, innerStyle }
}
