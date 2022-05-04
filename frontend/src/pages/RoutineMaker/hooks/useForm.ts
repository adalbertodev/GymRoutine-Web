import { useState } from 'react';
import { Cell } from '../models/Cell';

export const useForm = (initialState = emptyCell) => {
  const [formData, setFormData] = useState<Cell>(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};

const emptyCell: Cell = {
  exercise: '',
  series: '',
  repetitions: '',
  weight: ''
};
