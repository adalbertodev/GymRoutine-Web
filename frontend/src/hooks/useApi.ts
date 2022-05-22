import { useCallback, useEffect, useState } from 'react';

interface ApiState<T> {
  data: T | T[] | null;
  error: string | null;
  loading: boolean;
}

export const useApi = <T extends Object>(
  apiFunction?: () => Promise<T | T[]>,
  apiFunctionWithId?: (id: string) => Promise<T | T[]>,
  id?: string
) => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    loading: false
  });

  const request = useCallback(async () => {
    setState((state) => ({ ...state, loading: true }));
    try {
      if (id && apiFunctionWithId) {
        const result = await apiFunctionWithId(id);
        result && setState((state) => ({ ...state, data: result }));
      } else if (apiFunction) {
        const result = await apiFunction();
        result && setState((state) => ({ ...state, data: result }));
      }
    } catch (err: any) {
      setState((state) => ({ ...state, error: err.message }));
    } finally {
      setState((state) => ({ ...state, loading: false }));
    }
  }, [apiFunction, apiFunctionWithId, id]);

  useEffect(() => {
    request();
  }, [request]);

  return {
    state,
    request
  };
};
