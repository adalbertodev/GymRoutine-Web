import { memo, useCallback } from 'react';
import { TableHandlerContainer } from '../styled-components/Handler';
import { downloadHTML } from '../helpers/downloadHTML';
import { useTable } from '../hooks/useTable';
import { addEmptyRow, updateRmFields } from '../contexts/tableActions';
import { TableHandlerButton } from './inputs/TableHandlerButton';

export const TableHandler: React.FC = memo(() => {
  const { dispatch } = useTable();

  const handleAddRow = useCallback(() => {
    dispatch(addEmptyRow());
  }, [dispatch]);

  const handleCalculateRm = useCallback(() => {
    dispatch(updateRmFields());
  }, [dispatch]);

  return (
    <TableHandlerContainer>
      <TableHandlerButton color='secondary' onClick={handleAddRow}>
        Añadir
      </TableHandlerButton>

      <TableHandlerButton color='primary' onClick={handleCalculateRm}>
        Calcular
      </TableHandlerButton>

      <TableHandlerButton
        color='success'
        onClick={() => downloadHTML('routineTable')}
      >
        Descargar
      </TableHandlerButton>
    </TableHandlerContainer>
  );
});
