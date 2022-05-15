import { useCallback, useEffect, useState } from 'react';

interface ApiState<T> {
  data: T | T[] | null;
  error: string | null;
  loading: boolean;
}

export const useApi = <T extends Object>(
  apiFunction: () => Promise<T | T[]>
) => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    loading: false
  });

  const request = useCallback(async () => {
    setState((state) => ({ ...state, loading: true }));
    try {
      const result = await apiFunction();
      setState((state) => ({ ...state, data: result }));
    } catch (err: any) {
      setState((state) => ({ ...state, error: err.message }));
    } finally {
      setState((state) => ({ ...state, loading: false }));
    }
  }, [apiFunction]);

  useEffect(() => {
    request();
  }, [request]);

  return {
    state,
    request
  };
};
