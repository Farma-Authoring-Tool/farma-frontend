import useSWR from 'swr';
import { Lo } from '../types/Lo';

const API_BASE_URL = 'http://localhost:3000';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetLo = (id: BigInteger) => {
  const { data: lo, error } = useSWR(id ? `${API_BASE_URL}/los/${id}` : null, fetcher);
  return {
    lo,
    isLoading: !error && !lo,
    error: error,
  };
};

export const useGetLos = () => {
  const { data: los, error } = useSWR(`${API_BASE_URL}/los`, fetcher);
  return {
    los,
    isLoading: !error && !los,
    error: error,
  };
};

export const useCreateLo = () => {
  const createLo = async (newLoData: Lo) => {
    const response = await fetch(`${API_BASE_URL}/los`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLoData),
    });
    const data = await response.json();
    return data;
  };

  return createLo;
};

export const useUpdateLo = () => {
  const updateLo = async (id: Lo, updatedLoData: Lo) => {
    const response = await fetch(`${API_BASE_URL}/los/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLoData),
    });
    const data = await response.json();
    return data;
  };

  return updateLo;
};

export const useDeleteLo = () => {
  const deleteLo = async (id: Lo) => {
    const response = await fetch(`${API_BASE_URL}/los/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  };

  return deleteLo;
};
