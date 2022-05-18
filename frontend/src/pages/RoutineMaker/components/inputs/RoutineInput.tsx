import { StandardTextFieldProps } from '@mui/material';
import { memo, useMemo } from 'react';
import { StyledTextField } from '../../styled-components/Table';
import { AutoFitText } from '../../utils/AutoFitText';

interface RoutineInputProps extends StandardTextFieldProps {}

export const RoutineInput: React.FC<RoutineInputProps> = memo((params) => {
  const fontSize = useMemo(
    () =>
      AutoFitText({
        maxSize: 15,
        minSize: 10,
        input: (params.inputRef as React.RefObject<HTMLInputElement>)?.current,
        inputValue: params.InputProps?.inputProps?.value || ''
      }),
    [params.InputProps?.inputProps?.value, params.inputRef]
  );

  return <StyledTextField {...params} fontSize={fontSize} variant='standard' />;
});
