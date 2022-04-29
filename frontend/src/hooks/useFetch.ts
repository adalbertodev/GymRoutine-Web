import { useEffect, useState } from 'react';

export const useFetch = (
  url: string | undefined,
  method: string,
  content?: object
) => {
  const [state, setState] = useState<fetch>({
    data: null,
    loading: true,
    error: null
  });

  const setUrl = (newUrl: string) => {
    url = newUrl;
  };

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    if (url !== undefined) {
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
    }
  }, [content, method, url]);

  return { state, setUrl };
};

interface fetch {
  data: object[] | null;
  loading: boolean;
  error: Error | null;
}
