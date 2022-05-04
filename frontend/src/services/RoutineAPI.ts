import axios from 'axios';

export const get = async <T>(route: string): Promise<T[]> => {
  const url = `${process.env.REACT_APP_API_URL}${route}`;
  try {
    const { data } = await axios.get<T[]>(url, {
      headers: {
        Accept: 'application/json'
      }
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
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
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
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
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
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
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
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
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
  }
};
