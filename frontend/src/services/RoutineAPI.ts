import axios from 'axios';

export const get = async <T>(route: string): Promise<T[]> => {
  try {
    const { data } = await axios.request<T[]>({
      baseURL: process.env.REACT_APP_API_URL,
      url: route,
      method: 'GET',
      responseType: 'json',
      validateStatus: () => true
    });
    return data;
  } catch (error) {
    console.log();
    throw new Error(caughtError(error));
  }
};

export const getById = async <T>(route: string, id: string): Promise<T> => {
  const url = `${process.env.REACT_APP_API_URL}${route}/${id}`;

  try {
    const { data } = await axios.get<T>(url, {
      headers: {
        Accept: 'application/json'
      }
    });
    return data;
  } catch (error) {
    throw new Error(caughtError(error));
  }
};

export const post = async <T>(route: string, body: T): Promise<number> => {
  const url = `${process.env.REACT_APP_API_URL}${route}`;

  try {
    const { status } = await axios.post<T>(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: body
    });
    return status;
  } catch (error) {
    throw new Error(caughtError(error));
  }
};

export const deleteById = async <T>(
  route: string,
  id: string
): Promise<number> => {
  const url = `${process.env.REACT_APP_API_URL}${route}/${id}`;

  try {
    const { status } = await axios.delete<T>(url, {
      headers: {
        Accept: 'application/json'
      }
    });
    return status;
  } catch (error) {
    throw new Error(caughtError(error));
  }
};

export const deleteByObject = async <T>(
  route: string,
  body: T
): Promise<number> => {
  const url = `${process.env.REACT_APP_API_URL}${route}`;

  try {
    const { status } = await axios.delete<T>(url, {
      headers: {
        Accept: 'application/json'
      },
      data: body
    });
    return status;
  } catch (error) {
    throw new Error(caughtError(error));
  }
};

const caughtError = (error: Error | unknown) => {
  if (axios.isAxiosError(error)) {
    return error.message;
  }
  return 'An unexpexted error occurred';
};
