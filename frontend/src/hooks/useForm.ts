import { ChangeEvent, useState } from 'react';
import { splitInputName } from '../pages/RoutineMaker/utils/splitInputName';

export const useForm = <T extends Object>(initialState: T = {} as T) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (
    data:
      | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | { input: React.RefObject<HTMLInputElement>; value: string }
  ) => {
    let name: string;
    let value: string;

    if ((data as ChangeEvent<HTMLInputElement>).target) {
      data = data as ChangeEvent<HTMLInputElement>;
      name = data.target.name;
      value = data.target.value;
    } else {
      data = data as {
        input: React.RefObject<HTMLInputElement>;
        value: string;
      };
      name = data.input.current?.getAttribute('name') || '';
      value = data.value;
    }

    const { field } = splitInputName(name);
    setValues((formState) => ({ ...formState, [field]: value }));
  };

  const reset = () => {
    setValues(initialState);
  };

  return {
    values,
    handleInputChange,
    reset,
    setValues
  };
};
