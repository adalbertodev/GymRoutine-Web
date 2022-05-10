import { ChangeEvent, useState } from 'react';
import { splitInputName } from '../pages/RoutineMaker/utils/splitInputName';

export const useForm = <T extends Object>(initialState: T = {} as T) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({
    target
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { field } = splitInputName(target.name);
    setValues((formState) => ({ ...formState, [field]: target.value }));
  };

  const reset = () => {
    setValues(initialState);
  };

  return { values, handleInputChange, reset, setValues };
};
