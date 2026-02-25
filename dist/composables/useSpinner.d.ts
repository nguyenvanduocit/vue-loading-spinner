import { CSSProperties } from 'vue';
export declare function useSpinner(props: {
    size: string;
}): {
    sizeStyle: import('vue').ComputedRef<CSSProperties>;
};
export declare function useScaledSpinner(props: {
    size: string;
    color?: string;
}, baseSize: number): {
    sizeStyle: import('vue').ComputedRef<CSSProperties>;
    innerStyle: import('vue').ComputedRef<Record<string, string>>;
};
