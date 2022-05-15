import { StandardTextFieldProps } from '@mui/material';
import { memo } from 'react';
import { StyledTextField } from '../../styled-components/Table';

interface RoutineInputProps extends StandardTextFieldProps {
  value?: string;
}

export const RoutineInput: React.FC<RoutineInputProps> = memo((params) => {
  return <StyledTextField {...params} variant='standard' />;
});
