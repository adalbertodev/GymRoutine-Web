import { createTheme, ThemeProvider } from '@mui/material/styles';
import { memo, useCallback, useMemo } from 'react';
import { addEmptyRow } from '../../contexts/tableActions';
import { useTable } from '../../hooks/useTable';
import { AddButtonRow } from '../../styled-components/RoutineMaker';

export const AddRowButton = memo(() => {
  const { dispatch } = useTable();

  const handleAddRow = useCallback(() => {
    dispatch(addEmptyRow());
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontSize: 15,
          fontWeightMedium: 900
        },
        palette: {
          info: {
            main: '#198cff20',
            dark: '#0080ff40',
            contrastText: '#0080ff90'
          }
        }
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <AddButtonRow
        disableElevation
        variant='contained'
        color='info'
        size='small'
        fullWidth
        onClick={handleAddRow}
      >
        +
      </AddButtonRow>
    </ThemeProvider>
  );
});
