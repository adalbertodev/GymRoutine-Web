import { StandardTextFieldProps } from '@mui/material';
import { StyledTextField } from '../../styled-components/Table';

interface RoutineInputProps extends StandardTextFieldProps {
  value?: string;
}

export const RoutineInput: React.FC<RoutineInputProps> = (params) => {
  const { value } = params;

  return <StyledTextField {...params} variant='standard' value={value} />;
};
