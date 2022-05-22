import { memo, useCallback } from 'react';
import { TableHandlerContainer } from '../styled-components/Handler';
import { downloadHTML } from '../helpers/downloadHTML';
import { useTable } from '../hooks/useTable';
import { deleteLastRow, updateRmFields } from '../contexts/tableActions';
import { TableHandlerButton } from './inputs/TableHandlerButton';

export const TableHandler: React.FC = memo(() => {
  const { dispatch } = useTable();

  const handleCalculateRm = useCallback(() => {
    dispatch(updateRmFields());
  }, [dispatch]);

  const handleDeleteLastRow = useCallback(() => {
    dispatch(deleteLastRow());
  }, [dispatch]);

  return (
    <TableHandlerContainer>
      <TableHandlerButton color='error' onClick={handleDeleteLastRow}>
        Eliminar fila
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
