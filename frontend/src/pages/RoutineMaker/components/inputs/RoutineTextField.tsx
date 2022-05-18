import { StandardTextFieldProps, TextField } from '@mui/material';

interface RoutineTextFieldProps extends StandardTextFieldProps {
  fontSize?: number;
}

export const RoutineTextField: React.FC<RoutineTextFieldProps> = (params) => {
  return <TextField {...params} />;
};
