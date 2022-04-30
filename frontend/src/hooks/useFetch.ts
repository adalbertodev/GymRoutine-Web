import { useEffect, useState } from 'react';

export const useFetch = (url: string, method: string, content?: object) => {
  const [state, setState] = useState<fetch>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    // setState({ data: null, loading: true, error: null });

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: content ? JSON.stringify(content) : null
    })
      .then((response) => response.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data: data
        });
      })
      .catch((e) => {
        setState({
          loading: false,
          error: e,
          data: null
        });
      });
  }, [content, method, url]);

  return state;
};

interface fetch {
  data: object[] | null;
  loading: boolean;
  error: Error | null;
}
