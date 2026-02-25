import { Ref } from 'vue';
export declare function useLoading(initial?: boolean): {
    isLoading: Ref<boolean>;
    startLoading: () => void;
    stopLoading: () => void;
    withLoading: <T>(fn: () => Promise<T>) => Promise<T>;
};
