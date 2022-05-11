import { StandardTextFieldProps } from '@mui/material';
import { ChangeEvent, FocusEvent } from 'react';
import { StyledTextField } from '../../styled-components/Table';

interface RoutineInputProps extends StandardTextFieldProps {
  value?: string;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const RoutineInput: React.FC<RoutineInputProps> = (params) => {
  const { value, handleInputChange, handleInputBlur } = params;

  return (
    <StyledTextField
      {...params}
      variant='standard'
      value={value}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
    />
  );
};
